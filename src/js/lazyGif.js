// Swap a still for its animated GIF (data-gif) only once it nears the viewport,
// and never for visitors who asked for reduced motion or data saving.
var still = document.querySelector('img[data-gif]');
var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var saver = navigator.connection && navigator.connection.saveData;
if (still && !calm && !saver && 'IntersectionObserver' in window){
  var io = new IntersectionObserver(function(entries){
    if (!entries[0].isIntersecting) return;
    io.disconnect();
    var gif = new Image();
    gif.onload = function(){ still.src = still.dataset.gif; };
    gif.src = still.dataset.gif;
  }, {rootMargin:'300px'});
  io.observe(still);
}
