var form = document.getElementById('loginForm');
var card = document.getElementById('card');
var err = document.getElementById('error');
var btn = document.getElementById('submitBtn');
function reject(){
  err.classList.remove('show');
  card.classList.remove('shake');
  btn.disabled = true;
  btn.textContent = 'Signing in\u2026';
  setTimeout(function(){
    btn.disabled = false;
    btn.textContent = 'Log in';
    err.classList.add('show');
    void card.offsetWidth;
    card.classList.add('shake');
  }, 900);
}
if (form){
  form.addEventListener('submit', function(e){ e.preventDefault(); reject(); });
  document.getElementById('ssoBtn').addEventListener('click', reject);
}
