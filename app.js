var bouton = document.querySelector('.toggle_bouton')
var nav = document.querySelector('.nav');

bouton.onclick = function(){
  nav.classList.toggle('nav_open')
}
