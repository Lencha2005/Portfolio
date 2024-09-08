const btnBurger = document.querySelector('.btn-burger');
const btnMenu = document.querySelector('.btn-menu-js');
const btnClose = document.querySelector('.btn-close-menu');
const listMobileMenu = document.querySelector('.mobile-menu');
const itemMobileMenu = document.querySelectorAll('.js-mobile-item');
const listMenu = document.querySelector('.js-menu-nav-list');
const itemMenu = document.querySelectorAll('.menu-nav-item');
console.log(btnBurger)

function onOpenMobileMenu(){
listMobileMenu.classList.add('is-open')
};

function onCloseMobileMenu(){
    listMobileMenu.classList.remove('is-open')
};

function onOpenMenu(){
    listMenu.classList.toggle('active')
};

btnBurger.addEventListener('click', onOpenMobileMenu);
btnClose.addEventListener('click', onCloseMobileMenu);
btnMenu.addEventListener('click', onOpenMenu);

itemMobileMenu.forEach((item) => {
    item.addEventListener('click', onCloseMobileMenu)
});

itemMenu.forEach((item) => {
item.addEventListener('click', onOpenMenu)
});



