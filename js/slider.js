const participants = new Swiper('.participants-slider', {
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
        prevEl: '.arrow-prev',
        nextEl: '.arrow-next',
    },
    pagination: {
        type: 'fraction',
        el: '.pagination',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20
        },
    }
});

const steps = new Swiper('.steps-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    height: 'auto',
    navigation: {
        prevEl: '.steps-arrow__prev',
        nextEl: '.steps-arrow__next',
    },
    pagination: {
        el: '.steps-pagin .paginate',
    }
});