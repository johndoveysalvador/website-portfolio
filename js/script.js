/*=========================== toggle icon navbar ===========================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x-circle');
    navbar.classList.toggle('active');
};

/*=========================== scroll selection active link ===========================*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
/*=========================== sticky navbar ===========================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

/*=====   remove toggle icon navbar when click navbar link(scroll)  =====*/
    menuIcon.classList.remove('bx-x-circle');
    navbar.classList.remove('active');
};

/*=========================== scroll reveal ===========================*/
ScrollReveal({ 
    distance: '80px',
    duration: 1000,
    delay: 100,
});

ScrollReveal().reveal('.home-content, .home-content p, .home-content h3 , .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .social-media', { origin: 'left' });
ScrollReveal().reveal('.about-content h3, .about-content p, .about-container', { origin: 'right' });

/*=========================== typed.js ===========================*/

var typed = new Typed('.element', {
    strings: ['Front-End Developer', 'Graphic Designer', 'Blogger'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
  });