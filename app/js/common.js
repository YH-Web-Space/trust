$(function () {
    $('.slider').slick({
        dots: true,
        slidesToShow: 3,
        adaptiveHeight: true
    });
})
$(function () {
    $('.slider-car').slick({
        // responsive: [
        //     {
        //         breakpoint: 2561,
        //         settings: "unslick"
        //     },
        //     {
        //         breakpoint: 426,
        //     }
        // ]
    });
})
let burger = document.querySelector('.burger');
let navigation = document.querySelector('.navigation')
let menu = document.querySelector('.menu__header');
let services = document.querySelectorAll('.services-header__item')

function showNav() {
    let interval = 100;

    this.classList.toggle('active');
    navigation.classList.toggle('active');
    menu.classList.toggle('active');
    for (let i = 0; i < services.length; i++) {
        setTimeout(function (i) {
            services[i].classList.toggle('active');
        }, interval * i, i);
    }
}

burger.addEventListener('click', showNav);


let acc = document.querySelectorAll(".show-info");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        let panel = this.nextElementSibling;
        console.log(panel);
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            this.classList.remove("active");
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            this.classList.add("active");
        }
    });
}

