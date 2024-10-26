let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    cartItems.classList.remove('active');
    navbar.classList.remove('active');
}

let cartItems = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    searchForm.classList.remove('active');
    cartItems.classList.toggle('active');
    navbar.classList.remove('active');
} 

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    searchForm.classList.remove('active');
    cartItems.classList.remove('active');
    navbar.classList.toggle('active');
} 

window.onscroll = () => {
    searchForm.classList.remove('active');
    cartItems.classList.remove('active');
    navbar.classList.remove('active');
}

