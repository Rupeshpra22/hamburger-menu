const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        hamburger.classList.add('open');
        menuOpen = true;
    }else{
        hamburger.classList.remove('open');
        menuOpen = false;
    }
});