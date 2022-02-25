const menu = document.querySelector('.navbar__top');
const button = document.querySelector('.menu__button')
const navOption = document.querySelectorAll('.navbar__top')

button.addEventListener('click', () => {
    menu.classList.toggle('navbar__top--modifier')
    button.classList.toggle('menu__button--modifier')
})
function closeMenu () {
    menu.classList.remove('navbar__top--modifier')
}
for(let i = 0; i < navOption.length; i++) {
    navOption[i].addEventListener('click', closeMenu)
}