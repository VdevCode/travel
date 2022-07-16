//open menu bar
const openBar = document.querySelector('#menu-btn')
const menuBar = document.querySelector('.navbar')

openBar.addEventListener('click',function(){
    menuBar.classList.toggle('active')
    menuLogin.classList.remove('active')
    menuSearch.classList.remove('active')
})

//open menu login

const openLogin = document.querySelector('#login-btn')
const menuLogin = document.querySelector('.login-form')

openLogin.addEventListener('click',() =>{
    menuLogin.classList.toggle('active')
    menuBar.classList.remove('active')
    menuSearch.classList.remove('active')
})
 
//open search ( responsive)
const openSearch = document.querySelector('#search-btn')
const menuSearch = document.querySelector('.search-form')

openSearch.addEventListener('click',function(){
    menuSearch.classList.toggle('active')
    menuBar.classList.remove('active')
    menuLogin.classList.remove('active')
})

//darkmode (important)
const themeDarkmode = document.querySelector('#theme-btn')

themeDarkmode.addEventListener('click',function(){
    themeDarkmode.classList.toggle('fa-sun')

    if(themeDarkmode.classList.contains('fa-sun')){
        document.body.classList.add('active')
       
    }
    else{
        document.body.classList.remove('active')
    }
})


//slickder swiper

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});