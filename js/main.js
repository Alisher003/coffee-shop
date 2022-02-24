let navbar = document.querySelector('.navbar');
let cartItem = document.querySelector('.cart__items__container')
let searchForm = document.querySelector('.search-form')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}


document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
}


document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}