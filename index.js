const hamburger = document.querySelector('.hamburger')
const navBar = document.querySelector('.nav-menu')

hamburger.addEventListener('click',function(){
 hamburger.classList.toggle('active')
 navBar.classList.toggle('active')
 if(hamburger.classList.contains = 'active'){
  hamburger.style.position ='fixed'
  hamburger.style.left = '92%'
 }else{
  hamburger.style.position = 'relative'
  console.log('a')
  
  
 }
})