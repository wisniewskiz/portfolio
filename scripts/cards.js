let slidePosition = 0;
const slides = document.getElementsByClassName('slider--item');
const totalSlides = slides.length;

console.log(slides);

document.getElementById('slider--actions__next').addEventListener("click", function() {
    moveToNextSlide();
});

document.getElementById('slider--actions__prev').addEventListener("click", function() {
    moveToPrevSlide();
});

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('slider--item__visible');
        slide.classList.add('slider--item__hidden');
    }

    slides[slidePosition].classList.add('slider--item__visible');
}

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition ++;
    }
    updateSlidePosition();
}
function moveToPrevSlide() {
    updateSlidePosition();
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition --;
    }
    
}