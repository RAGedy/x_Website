var bg = document.querySelector('.sizzle-panel img.bg');
if (bg && bg.dataset.gif){
  var gif = new Image();
  gif.onload = function(){ bg.src = bg.dataset.gif; };
  gif.src = bg.dataset.gif;
}
