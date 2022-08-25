function haveSlider() {
    function showHaveItems(){
        $(".have__item").removeClass("have__item--active")
        setTimeout(() => $(".have .swiper-slide-active .weHas").addClass("have__item--active"), 200);
        setTimeout(() => $(".have .swiper-slide-active .weWant").addClass("have__item--active"), 700);
    }
    var swiper = new Swiper('.have .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.have .swiper-button-next',
            prevEl: '.have .swiper-button-prev',
        },
        pagination: {
            el: '.have .swiper-pagination',
            type: 'fraction',
        },
        on: {
            init: function () {
                $(".have .swiper-slide-active .have__item").addClass("have__item--active")
            },
            transitionEnd: function () {
                showHaveItems()
                console.log('swiper changed');
            },
        }
    })

}

haveSlider()
