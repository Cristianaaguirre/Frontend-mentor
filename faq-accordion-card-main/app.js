const button = document.querySelectorAll(".btn__container");
const menu = document.querySelectorAll('.dropdown__item');

for (let i = 0; i< button.length & menu.length; i++) {
  const buttonOption = button[i]
  const dropItem = menu[i]

  buttonOption.addEventListener('click', function () {
    dropItem.classList.toggle('dropdown__item--open')
  })
}
  
