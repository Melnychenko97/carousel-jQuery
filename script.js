var slides = $('.image');
var pointers = $('.pointer');
slides.first().show();
pointers.first().toggleClass('active');
var numberOfSlider = 0;

$('.move-right').on('click', function () {
    if(numberOfSlider === 2) { // if last slide switch to first slide
        slides.last().fadeOut(600);
        slides.first().delay(600).fadeIn(600);

        pointers.last().toggleClass('active');
        pointers.first().toggleClass('active');

        numberOfSlider = 0;

    } else {
        slides.eq(numberOfSlider).fadeOut(600);
        slides.eq(numberOfSlider).next().delay(600).fadeIn(600);

        pointers.eq(numberOfSlider).next().toggleClass('active');
        pointers.eq(numberOfSlider).toggleClass('active');

        numberOfSlider++;
    }
});

$('.move-left').on('click', function () {
    if(numberOfSlider === 0) { // if first slide switch to last slide
        slides.first().fadeOut(600);
        slides.last().delay(600).fadeIn(600);

        pointers.first().toggleClass('active');
        pointers.last().toggleClass('active');

        numberOfSlider = 2;

    } else {
        slides.eq(numberOfSlider).fadeOut(600);
        slides.eq(numberOfSlider).prev().delay(600).fadeIn(600);

        pointers.eq(numberOfSlider).toggleClass('active');
        pointers.eq(numberOfSlider).prev().toggleClass('active');

        numberOfSlider--;
    }
});