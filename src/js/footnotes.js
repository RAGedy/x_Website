// Footnote markers (.fn): CSS shows the definition on hover and keyboard focus.
// This adds tap-to-toggle for touch, click-away, and Escape to dismiss.
var fns = document.querySelectorAll('.fn');
function closeAll(except){
  fns.forEach(function(f){ if (f !== except) f.classList.remove('open'); });
}
fns.forEach(function(f){
  f.addEventListener('click', function(e){
    e.stopPropagation();
    closeAll(f);
    f.classList.remove('dismissed');
    f.classList.toggle('open');
  });
  f.addEventListener('mouseleave', function(){ f.classList.remove('dismissed'); });
  f.addEventListener('blur', function(){ f.classList.remove('dismissed'); });
});
document.addEventListener('click', function(){ closeAll(null); });
document.addEventListener('keydown', function(e){
  if (e.key !== 'Escape') return;
  fns.forEach(function(f){
    if (f.classList.contains('open') || f.matches(':hover') || f === document.activeElement) f.classList.add('dismissed');
    f.classList.remove('open');
  });
});
