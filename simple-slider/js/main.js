'use strict'
$(function() {

    //conf
    var width = 720,
        animationSpeed = 1000,
        pause = 3000,
        currentSlide = 1;

    //caching
    var $slider = $('#slider'),
        $sliderContainer = $slider.find('.slides'),
        $slides = $sliderContainer.find('.slide');

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $sliderContainer.animate({
                'margin-left': '-=' + width
            }, animationSpeed, function() {
                currentSlide++;
                //alert($slides.length)
                if (currentSlide === $slides.length) {
                    currentSlide = 1;
                    $sliderContainer.css('margin-left', 0)
                }
            });
        }, pause);
    }

            function pauseSlider() {
                clearInterval(interval)
            }

            $slider
                .on('mouseenter', pauseSlider)
                .on('mouseleave', startSlider)
            startSlider();
});
