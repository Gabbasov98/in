function whatIsSlider() {
    var swiper = new Swiper('.what-is .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.what-is .swiper-button-next',
            prevEl: '.what-is .swiper-button-prev',
        },
    })
}

let gallerySlidersArray = []

function gallerySliders() {
    $(".gallery").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        gallerySlidersArray[index] = new Swiper(`.gallery[data-slider-id="${index}"] .swiper-container`, {
            slidesPerView: "auto",
            spaceBetween: 30,
            navigation: {
                nextEl: `.gallery[data-slider-id="${index}"] .swiper-button-next`,
                prevEl: `.gallery[data-slider-id="${index}"] .swiper-button-prev`,
            },
            breakpoints: {
                320: {
                    spaceBetween: 10,
                },
                992: {
                    spaceBetween: 30,
                }
            }
        })
    })
}

whatIsSlider()
gallerySliders()


$('input[type="tel"]').mask('+7 999 999-9999', { autoclear: false }, { placeholder: '+7             ' });

$(".header__burger").click(function() {
    $("body").toggleClass("fixed-body")
    $(".header").toggleClass("header--active")
})



