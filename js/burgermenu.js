let open = document.getElementsByClassName('home-burger')[0]
let close = document.getElementsByClassName('home-close')[0]
let menu = document.getElementById('mobilemenu')

open.addEventListener('click', () => {
    menu.style.right = 0
    menu.style.transition = 'all 700ms ease-in'
})

close.addEventListener('click', () => {
    menu.style.right = '-100%'
    menu.style.transition = 'all 700ms ease-in'
})