$(document).ready(function() {

    // banner slide
    $('.banner-slide').slick({
        loop: true,
        dots: false,
        infinite: false,
        speed: 300,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'></button>",
        slidesToShow: 1,
        slidesToScroll: 1,

    });


    $('.room-suits-list').slick({
        centerMode: true,
        centerPadding: "20.7%",
        slidesToShow: 1,
        lazyLoad: "ondemand",
        responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: "0",
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    centerMode: false,
                    infinite: true,
                    centerPadding: "0",
                    slidesToShow: 1,
                }
            }
        ]
    });


    $('.reviews-slide').slick({
        centerMode: true,
        centerPadding: "210px",
        slidesToShow: 3,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: "202px",
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: "20px",
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: "20px",
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.brand-logo-img').slick({
        arrows: true,
        infinite: false,
        slidesToShow: 8,
        responsive: [{
                breakpoint: 1750,
                settings: {
                    slidesToShow: 9,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 8,
                }
            },
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });
    $('.timeline').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: ".timeline-wrapper .timeline-dates",
        infinite: false,
        centerMode: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }]
    });
    $('.timeline-dates-wrapper .timeline-dates').slick({
        slidesToShow: 15,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: ".timeline-wrapper .timeline",
        dots: false,
        focusOnSelect: true,
        infinite: false,
        centerMode: false,
        responsive: [{ breakpoint: 768, settings: { centerMode: false, slidesToShow: 2 } }, { breakpoint: 1025, settings: { centerMode: false } }]
    });

    $('.bannerGallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        centerMode: false,

    });

    $(".just-wrap-offer").slick({
        slidesToShow: 4,
        initialSlide: 0,
        responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: true,
                    infinite: false,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    infinite: false,
                    slidesToShow: 2.15,
                }
            }
        ]
    });

    $(".breakwayGallery .break-slide").slick({
        slidesToShow: 3,
        infinite: false,
        speed: 500,
        arrow: true,
        initialSlide: 0,
        draggable: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    infinite: false,
                    slidesToShow: 2.15,
                    initialSlide: 0,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                    infinite: false,
                    slidesToShow: 1,
                    initialSlide: 0,
                    slidesToScroll: 1,
                }
            }
        ]
    });



});