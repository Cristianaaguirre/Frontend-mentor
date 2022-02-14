const list = document.querySelectorAll('.item')
const button = document.querySelector('.button')
const arrow = document.querySelector('arrow')

for (let i = 0; i < list.length; i++) {
    const item = list[i];
    // console.log(item)

    item.addEventListener('click', active)

    function active () {
        if (item.classList.contains('active')) {
            item.classList.remove('active')
        } else {
            remover();
            item.classList.add('active')
        }
    }

    function remover () {
        list.forEach(function quitar (e) {
            e.classList.remove('active')    
        })
    }
}
