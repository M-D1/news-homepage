const hamburger = document.querySelector('.hamburger')
const navBar = document.querySelector('.nav-menu')

hamburger.addEventListener('click',function(){
 hamburger.classList.toggle('active')
 navBar.classList.toggle('active')

})
document.querySelectorAll('.nav-link').forEach(n => {
 n.addEventListener('click',function(){
  hamburger.classList.remove('active')
  navBar.classList.remove('active')
 })
})