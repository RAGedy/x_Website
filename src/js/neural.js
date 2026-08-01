// Interactive forward propagation for the culture neural net.
// No auto-fire: weights and per-node thresholds are rolled once per page
// load, and hovering any node injects a full activation there — the signal
// then cascades through later columns according to those weights, thinning
// as it travels. Geometry comes straight from the inline SVG.
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var svg = document.querySelector('.culture-neural');
  if (!svg) return;

  var nodes = {}; // "cx,cy" -> {fill, halo, x, key, layer, in:[edges]}
  [].slice.call(svg.querySelectorAll('circle')).forEach(function (c) {
    var key = c.getAttribute('cx') + ',' + c.getAttribute('cy');
    var n = nodes[key] || (nodes[key] = { key: key, x: +c.getAttribute('cx'), in: [] });
    if (c.hasAttribute('fill')) n.fill = c; else n.halo = c;
  });

  // cluster x positions into layers (columns are ~185px apart, jitter ~12px)
  var list = Object.keys(nodes).map(function (k) { return nodes[k]; });
  var xs = list.map(function (n) { return n.x; }).sort(function (a, b) { return a - b; });
  var bands = [xs[0]];
  xs.forEach(function (x) { if (x - bands[bands.length - 1] > 80) bands.push(x); });
  list.forEach(function (n) {
    for (var i = bands.length - 1; i >= 0; i--) if (n.x >= bands[i] - 40) { n.layer = i; break; }
  });
  var layers = bands.map(function () { return []; });
  list.forEach(function (n) { layers[n.layer].push(n); });

  var edges = [].slice.call(svg.querySelectorAll('line')).map(function (l) {
    var from = nodes[l.getAttribute('x1') + ',' + l.getAttribute('y1')];
    var to = nodes[l.getAttribute('x2') + ',' + l.getAttribute('y2')];
    if (!from || !to) return null;
    var e = { el: l, from: from, to: to, w: 1 };
    to.in.push(e);
    return e;
  }).filter(Boolean);

  // one fixed "personality" per page load: same hover, similar cascade
  edges.forEach(function (e) { e.w = 0.35 + Math.random() * 0.65; });
  list.forEach(function (n) {
    n.th = (0.42 + Math.random() * 0.42) * (n.layer === layers.length - 1 ? 0.8 : 1);
  });

  function pulseNode(n, a, at) {
    setTimeout(function () {
      var s = 1 + 0.06 * a; // barely any size change — the glow carries the effect
      var opts = { duration: 950, easing: 'cubic-bezier(.3,.7,.3,1)' };
      n.fill.style.transformBox = n.halo.style.transformBox = 'fill-box';
      n.fill.style.transformOrigin = n.halo.style.transformOrigin = 'center';
      n.fill.animate([
        { transform: 'scale(1)', filter: 'brightness(1) saturate(1)' },
        { transform: 'scale(' + s + ')', filter: 'brightness(' + (1 + 1.5 * a) + ') saturate(' + (1 + 0.4 * a) + ')', offset: 0.35 },
        { transform: 'scale(1)', filter: 'brightness(1) saturate(1)' }
      ], opts);
      n.halo.animate([
        { strokeOpacity: 0.35 },
        { strokeOpacity: Math.min(0.7, 0.35 + 0.35 * a), offset: 0.35 },
        { strokeOpacity: 0.35 }
      ], opts);
    }, at);
  }

  function flashEdge(e, flow, at) {
    setTimeout(function () {
      e.el.animate([
        { stroke: '#6D82B4', strokeOpacity: 0.4 },
        { stroke: '#ffffff', strokeOpacity: Math.min(0.9, 0.5 + 0.35 * flow), offset: 0.35 },
        { stroke: '#6D82B4', strokeOpacity: 0.4 }
      ], { duration: 650, easing: 'ease-in-out' });
    }, at);
  }

  var LAYER_MS = 300;
  function jitter(t) { return Math.max(0, t + (Math.random() - 0.5) * 120); }

  // hover a node -> full activation there, forward pass through later columns
  function cascadeFrom(seed) {
    var act = {};
    act[seed.key] = 1;
    pulseNode(seed, 1, 0);
    for (var k = seed.layer + 1; k < layers.length; k++) {
      var t = (k - seed.layer) * LAYER_MS;
      var firedCount = 0, bestN = null, bestV = 0;
      layers[k].forEach(function (n) {
        var sum = 0, norm = 0, activeNorm = 0;
        n.in.forEach(function (e) {
          norm += e.w;
          var a = act[e.from.key];
          if (a) { sum += e.w * a; activeNorm += e.w; }
        });
        // weight mostly by what arrived: a single strong signal can travel
        var drive = activeNorm ? sum / (0.3 * norm + 0.7 * activeNorm) : 0;
        var v = Math.tanh(1.6 * drive);
        if (v > bestV) { bestV = v; bestN = n; }
        if (v > n.th) {
          act[n.key] = 0.72 * v;
          firedCount++;
          n.in.forEach(function (e) {
            var a = act[e.from.key];
            if (a) flashEdge(e, e.w * a, jitter(t - 150));
          });
          pulseNode(n, v, jitter(t));
        }
      });
      // every hover earns a trail: the strongest candidate carries a dying signal
      if (!firedCount && bestN) {
        var f = Math.max(bestV, 0.45);
        act[bestN.key] = 0.72 * f;
        bestN.in.forEach(function (e) {
          var a = act[e.from.key];
          if (a) flashEdge(e, e.w * a, jitter(t - 150));
        });
        pulseNode(bestN, f, jitter(t));
      }
    }
  }

  var cooldown = {};
  function onHover(n) {
    var now = performance.now();
    if (cooldown[n.key] && now - cooldown[n.key] < 900) return;
    cooldown[n.key] = now;
    n.in.slice().sort(function (a, b) { return b.w - a.w; }).forEach(function (e, idx) {
      flashEdge(e, e.w, jitter(30));
      if (idx < 2) pulseNode(e.from, 0.3 + 0.25 * e.w, jitter(150));
    });
    cascadeFrom(n);
  }

  list.forEach(function (n) {
    [n.fill, n.halo].forEach(function (c) {
      if (!c) return;
      c.style.pointerEvents = 'auto';
      c.addEventListener('mouseenter', function () { onHover(n); });
    });
  });

  window.__nnFire = function (i) { cascadeFrom(list[i % list.length]); };
})();
