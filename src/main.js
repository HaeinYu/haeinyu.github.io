// header--dark style is applied to the Header when scrolling down
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if(window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
})

// Make Home background transparent when scroll down
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', ()=> {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Make Arrow up button transparent when scroll down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=> {
    if(window.scrollY > homeHeight / 2) {
        arrowUp.style.opacity = 1;
    }
    else {
        arrowUp.style.opacity = 0;
    }
});