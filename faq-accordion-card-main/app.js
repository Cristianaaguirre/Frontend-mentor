const button = document.querySelector(".btn__container");

button.addEventListener("click", addClase);

function addClase() {
  document.querySelector(".dropdown__item").classList.add("dropdown__item--open")
}
