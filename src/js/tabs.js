document.querySelectorAll('.tpl-tab').forEach(function(tab){
  tab.addEventListener('click', function(){
    document.querySelectorAll('.tpl-tab').forEach(function(t){t.setAttribute('aria-selected','false');});
    document.querySelectorAll('.tpl-body').forEach(function(b){b.classList.remove('active');});
    tab.setAttribute('aria-selected','true');
    document.querySelector('.tpl-body[data-tpl="'+tab.dataset.tpl+'"]').classList.add('active');
  });
});
