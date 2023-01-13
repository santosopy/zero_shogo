$(function(){

    // main visual text
    $(".mv_text").typed({
        strings: ["100年安心を<br class='is_sp'>かなえる家。"],
        typeSpeed: 80,
        showCursor: false
    })

    // slider 1
    let first = new Swiper ('.first_slider', {
        loop: true,
        // loopAdditionalSlides: 1,
        autoplay: {
          delay: 2000,
        },
        slidesPerView: 1.2,
        breakpoints: {
            480: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
        },
        speed:1000,
        spaceBetween: 10,
        touchReleaseOnEdges:true,
        centeredSlides : true,
        pagination: { 
            el: '.first_slider .swiper-pagination',
            clickable: true,
        },
        navigation: { 
            nextEl: '.first_slider .swiper-button-prev',
            prevEl: '.first_slider .swiper-button-next',
        },
    });

    // slider 2
    let second = new Swiper ('.second_slider', {
        loop: true,
        // loopAdditionalSlides: 1,
        autoplay: {
          delay: 2000,
        },
        slidesPerView: 1.2,
        breakpoints: {
            640: {
                slidesPerView: 2.3,
                spaceBetween: 50,
                centeredSlides : false,
            },
        },
        speed:1000,
        spaceBetween: 10,
        touchReleaseOnEdges:true,
        centeredSlides : true,
        pagination: { 
            el: '.second_slider .swiper-pagination',
            clickable: true,
        },
        navigation: { 
            nextEl: '.second_slider .swiper-button-prev',
            prevEl: '.second_slider .swiper-button-next',
        },
    });

})