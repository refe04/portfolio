/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    nevbar.classList.toggle('active');

};

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
             navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id+ ']').classlist.add('active');
             })
        }
    });



    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toogle('sticky', windowwçscrollY >100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    nevbar.classList.remove('active');

};


/*==================== scroll reveal ====================*/
ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .sevices-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-cpntent h1, .about-img ', {origin: 'left'});



/*==================== typed js ====================*/