let burger = document.querySelector('.burger')
let mobileMenu = document.querySelector('.mobileMenu')
let overLay = document.querySelector('.overLay')
let close = document.querySelector('.close')

burger.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)
overLay.addEventListener('click', closeMenu)
function openMenu() {
    mobileMenu.style.transform = 'translateX(0%)'
    overLay.style.display = 'block'
}

function closeMenu() {
    mobileMenu.style.transform = 'translateX(-100%)'
    overLay.style.display = 'none'
}