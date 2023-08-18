const emailMenu = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

emailMenu.addEventListener('click', toggleDesktopMenu)
burgerIcon.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}