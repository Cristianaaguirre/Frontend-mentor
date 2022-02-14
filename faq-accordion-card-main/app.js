const button = document.querySelectorAll(".btn__container");
const menu = document.querySelectorAll('.dropdown__item');

for (let i = 0; i< button.length & menu.length; i++) {
  const buttonOption = button[i]
  const dropItem = menu[i]
  buttonOption.addEventListener('click', openMenu) 

  function openMenu () {
      if (buttonOption.nextElementSibling.classList.contains('dropdown__item--open') === true) {
        dropItem.classList.remove('dropdown__item--open') 
      } else {
        cerrar()
        dropItem.classList.add('dropdown__item--open') 
      }
  }
}

function cerrar () {
  menu.forEach(function cerrar(e) {
    e.classList.remove('dropdown__item--open')
  })
}

