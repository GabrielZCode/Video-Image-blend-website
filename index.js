let dayNight = document.getElementById('sun');
let menuToggle = document.querySelector('#menuToggles');
let body = document.querySelector('body');
let navigation = document.querySelector('.navigation');
let cardPart = document.querySelector('.cardPart')

dayNight.onclick = function(){
    body.classList.toggle('dark')
    dayNight.classList.toggle('active')
    cardPart.classList.toggle('dark')
}

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}
