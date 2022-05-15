const barMenu = document.querySelector('.barMenu')

const menu = document.querySelector('.menuTopicos')

barMenu.addEventListener('click', ()=>{
  barMenu.classList.toggle('active') 
  menu.classList.toggle('menuTopicos')
  menu.classList.toggle('display')
  console.log('cli');
//   menu.style.cssText = 'display: block;transition: display .5s ease-in-out;'
})

//

// menu.addEventListener('click', ()=>{

// })