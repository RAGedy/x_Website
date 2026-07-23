var burger = document.getElementById('navBurger');
var menu = document.getElementById('navMobile');
if (burger && menu){
  burger.addEventListener('click', function(){
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded','false');
    });
  });
}
