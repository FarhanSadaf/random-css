const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const selectImgBtn = document.querySelectorAll('.select-img-btn');

let counter = 1;
const size = carouselImages[0].clientWidth;

// Move 1 picture right
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

prevBtn.addEventListener('click', () => {
    if (counter < 1) return;
    counter--;
    carouselSlide.style.transition = 'transform 0.4s';
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

nextBtn.addEventListener('click', () => {
    if (counter > carouselImages.length - 2) return;
    counter++;
    carouselSlide.style.transition = 'transform 0.4s';
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Scroll buttons 1, 2, 3, ...
for (let i = 0; i < selectImgBtn.length; i++) {
    selectImgBtn[i].addEventListener('click', () => {
        counter = i+1;
        carouselSlide.style.transition = 'transform 0.4s';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
}

carouselSlide.addEventListener('transitionend', () => {
    // For circling effect
    // outside right
    if (counter > carouselImages.length - 2) {
        counter = 1;
        carouselSlide.style.transition = 'none';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    // outside left
    if (counter < 1) {
        counter = carouselImages.length - 2;
        carouselSlide.style.transition = 'none';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    // unselect all first
    for (let i = 0; i < selectImgBtn.length; i++) {
        selectImgBtn[i].src = "./images/scroll-not-selected.svg";
    }
    // Change img of selected selectImgBtn
    selectImgBtn[counter-1].src = "./images/scroll-selected.svg";
});