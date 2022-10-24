$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header-navigation.sticky-header').addClass('affix');
        // $('.header').addClass('header-sticky');
        // $('.contacthotel').slideUp();
        // $('.header-middle').addClass('animated');
    } else {
        $('.header-navigation.sticky-header').removeClass('affix');
        // $('.header').removeClass('header-sticky');
        // $('.contacthotel').slideDown();
        // $('.header-middle').removeClass('animated');
    }
});
/* back to top */
var btn = $('.scrollup');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('activate');
    } else {
        btn.removeClass('activate');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});

$(document).ready(function() {

    $('#birthday').datepicker();
    $('#txtArrivalDate').daterangepicker();
    $('#txtDepartureDate').daterangepicker();

    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 2000
    // });

    //price ranger
    $("#slider-range").slider({
        range: true,
        min: 130,
        max: 500,
        values: [130, 250],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));

    //select-picker
    // $('#category-search').picker({ search: true });




    //filter search
    $(".filter .filter__title").click(function() {
        $(this).parents('.filter').children('.filter__body').slideToggle();
        $(this).parents('.filter').toggleClass('collasped');
    });




    $(".panel-title").click(function() {
        var map_id = $(this).attr("data-map-id");
        $(".product-map").addClass("hidden");
        $(map_id).removeClass("hidden");
    });


    //toggle-menu
    $(".toggle-nav").click(function() {
        $('.wrapper').addClass('hd-menu-open');
        $('body').addClass('ov-hidden');
    });
    $(".toggle-nav--remove").click(function() {
        $('.wrapper').removeClass('hd-menu-open');
        $('body').removeClass('ov-hidden');
    });
    $(document).mouseup(function(e) {
        var vacancydropdown = $(".dropdown-menu");
        if ($(e.target).closest(".hd-menu-container").length ===
            0) {
            $('.wrapper').removeClass('hd-menu-open');
            $('body').removeClass('ov-hidden');
        }
        if (!vacancydropdown.is(e.target) && vacancydropdown.has(e.target).length === 0) {
            vacancydropdown.removeClass('show');
        }
    });






    $('.trust-text').each(function() {
        if ($(this).text().length > 130) {
            $(this).text($(this).text().trim().substring(0, 130) + '...');
        }
    });
    $('.trust-review-title').each(function() {
        if ($(this).text().trim().length < 1) {
            $(this).css('visibility', 'hidden');
        }
    });
    $('.trust-review-title').each(function() {
        if ($(this).text().trim().length > 33) {
            $(this).text($(this).text().trim().substring(0, 33) + '...');
            $(this).css('max-width', '260px');
            $(this).css('margin', '40px auto 16px auto');
            $(this).siblings('.trust-text-div').css('height', '72px');
            $(this).siblings('.trust-text-div').find('.trust-text').css('height', '72px');
            if ($(this).siblings('.trust-text-div').find('.trust-text').text().trim().length > 100) {
                $(this).siblings('.trust-text-div').find('.trust-text').text($(this).siblings('.trust-text-div').find('.trust-text').text().trim().substring(0, 100) + '...');
            }
        }
        if ($(this).css('height') === '48px') {
            $(this).siblings('.trust-text-div').css('height', '72px');
            $(this).siblings('.trust-text-div').find('.trust-text').css('height', '72px');
            if ($(this).siblings('.trust-text-div').find('.trust-text').text().trim().length > 100) {
                $(this).siblings('.trust-text-div').find('.trust-text').text($(this).siblings('.trust-text-div').find('.trust-text').text().trim().substring(0, 100) + '...');
            }
        }
    });


    $(".header-bottom #mobile-burger-menu").click(function() {
        $("body").addClass("ov-hidden");
        $(this).parents(".header-bottom").children(".nav-container").removeClass("hide-menu");
    });
    $("#close-burger-menu").click(function() {
        $("body").removeClass("ov-hidden");
        $(this).parents(".header-bottom").children(".nav-container").addClass("hide-menu");
    });
    $('.nav-container').each(function() {
        var b = $(window);
        if (b.innerWidth() < 768) {
            if ($('.nav-container').hasClass('hide-menu')) {
                $("body").css('overflow', 'auto');
            } else {
                $("body").css('overflow', 'hidden');
            }
        }
    });



    $(".guests-picker").click(function() {
        $('.guests-dropdown').toggleClass('show');
    })


    $('.btn-plus').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        // fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($(this).siblings('input').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $(this).siblings('input').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $(this).siblings('input').val(0);
        }

        var roomsRequired = parseInt($('.rooms-required').val()),
            adults = parseInt($('.guests-adults').val()),
            children = parseInt($('.guests-children').val()),
            guests = adults + children,
            roomSingular = $('.rooms-count').data('textSingular'),
            roomPlural = $('.rooms-count').data('textPlural'),
            guestSingular = $('.guests-count').data('textSingular'),
            guestPlural = $('.guests-count').data('textPlural'),
            roomsCount = '',
            guestsCount = '';
        if (roomsRequired == 1) {
            roomsCount = roomsRequired + ' ' + roomSingular;
        } else {
            roomsCount = roomsRequired + ' ' + roomPlural;
        }
        if (guests == 1) {
            guestsCount = guests + ' ' + guestSingular;
        } else {
            guestsCount = guests + ' ' + guestPlural;
        }
        $('.rooms-count').html(roomsCount);
        $('.guests-count').html(guestsCount);
    });
    $(".btn-minus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        // fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($(this).siblings('input').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $(this).siblings('input').val(currentVal - 1);

        } else {
            // Otherwise put a 0 there
            $(this).siblings('input').val(0);
        }

        var roomsRequired = parseInt($('.rooms-required').val()),
            adults = parseInt($('.guests-adults').val()),
            children = parseInt($('.guests-children').val()),
            guests = adults + children,
            roomSingular = $('.rooms-count').data('textSingular'),
            roomPlural = $('.rooms-count').data('textPlural'),
            guestSingular = $('.guests-count').data('textSingular'),
            guestPlural = $('.guests-count').data('textPlural'),
            roomsCount = '',
            guestsCount = '';
        if (roomsRequired == 1) {
            roomsCount = roomsRequired + ' ' + roomSingular;
        } else {
            roomsCount = roomsRequired + ' ' + roomPlural;
        }
        if (guests == 1) {
            guestsCount = guests + ' ' + guestSingular;
        } else {
            guestsCount = guests + ' ' + guestPlural;
        }
        $('.rooms-count').html(roomsCount);
        $('.guests-count').html(guestsCount);
    });




});



// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    // var animationModule = (function() {
    //     var a = $(".animation-element");
    //     var b = $(window);
    //     var c = function() {
    //         b.on("scroll resize", d);
    //         b.trigger("scroll")
    //     };
    //     var d = function() {
    //         if (b.innerWidth() > 767) {
    //             var f = b.height();
    //             var g = b.scrollTop();
    //             var e = (g + f);
    //             $.each(a, function() {
    //                 var h = $(this);
    //                 var j = h.outerHeight();
    //                 var k = h.offset().top;
    //                 var i = (k + j);
    //                 if ((k <= e)) {
    //                     if (h.hasClass("bounce-up")) {
    //                         h.addClass("in-view")
    //                     } else {
    //                         if (h.hasClass("slide-right")) {
    //                             if (h.hasClass("slow")) {
    //                                 h.find(".slide-element").css("paddingLeft", (e - i) / 10 + "px")
    //                             } else {
    //                                 h.find(".slide-element").css("paddingLeft", (e - i) / 60 + "%")
    //                             }

//                         } else {
//                             if (h.hasClass("slide-left")) {
//                                 if (h.hasClass("slow")) {
//                                     h.find(".slide-element").css("paddingRight", (e - i) / 10 + "px")
//                                 } else {
//                                     h.find(".slide-element").css("paddingRight", (e - i) / 60 + "%")
//                                 }
//                             }
//                         }
//                     }
//                 } else {
//                     if (h.hasClass("bounce-up")) {
//                         h.removeClass("in-view")
//                     } else {
//                         if (h.hasClass("slide-right")) {
//                             h.find(".slide-element").css("paddingLeft", 0)
//                         } else {
//                             if (h.hasClass("slide-left")) {
//                                 h.find(".slide-element").css("paddingRight", 0)
//                             }
//                         }
//                     }
//                 }
//             })
//         }
//     };
//     return { bindEvents: c }
// })();