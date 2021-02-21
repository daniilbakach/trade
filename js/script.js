$(document).ready(function() {
    $('.presentation__slider').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/macbook_prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/macbook_next.png"></button>',
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        customPaging: function(slider, i) {
            var title = $(slider.$slides[i]).data('title');
            return '<button class="slider-item">' + title + '</button>';
        },
        // responsive: [{
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             dots: true

        //         }
        //     },
        //     {
        //         breakpoint: 576,
        //         settings: {
        //             arrows: false,
        //             slidesToShow: 1,
        //             dots: true
        //         }
        //     }
        // ]

    });
});