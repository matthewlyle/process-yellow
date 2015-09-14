$(function() {
    homeSlider();
    responsiveNav();
    portfolioSlider();
    portfolioOverlay();
    footerLinks();
})

function responsiveNav() {

    var $overlay = $('.menu-overlay'),
        $trigger = $('.responsiveNavTrigger'),
        $close = $('.close-overlay');

    $trigger.click(function() {
        $(this).addClass('active');
        $overlay.delay(300).fadeIn(100);
    })

    $close.click(function() {
        $overlay.fadeOut();
        $trigger.removeClass('active');
    })

}

function homeSlider() {

    var slider = '#slider',
        nav = '.link-grid',
        overlay = '.menu-overlay',
        trigger = '.responsiveNavTrigger';

    $(slider).slick({
        arrows: false,
        adaptiveHeight: true,
        touchMove: false,
        cssEase: 'cubic-bezier(0.780, -0.320, 0.000, 1.065)',
        speed: 1000,
        swipeToSlide: false
    });

    $.each([0, 1, 2], function(index) {

        $('.slide' + index).on('click', function() {
            $(slider).slickGoTo(index);
            $(nav + ' a').removeClass('active');
            $(this).addClass('active');
            if ($(this).hasClass('slide2')) {
                $('html').addClass('contact')
            } else {
                $('html').removeClass('contact')
            }
        });

        $(overlay + ' .slide-' + index).on('click', function() {
            $(slider).slickGoTo(index);
            $(overlay).fadeOut();
            $(trigger).removeClass('active');
        });

    });

}

function portfolioSlider() {

    $('.portfolio-slider').slick({
        slide: 'img',
        touchMove: false,
        lazyLoad: true
    });

}

function footerLinks() {

    $("footer-links a").hover(
        function() {
            $(this).find('i').addClass("spin");
        },
        function() {
            $(this).find('i').removeClass("spin");
        }
    );

}

function portfolioOverlay() {

    $('.portfolio-link').hover(
        function() {
            $(this).find('.portfolio-overlay').toggleClass('active');
        })

}

// $(function(){
//     $('.wildlands-tasks ul li').appear();
//     $('.wildlands-tasks ul li').on('appear', function(){
//         $(this).addClass('appear');
//     })
// })


// $(function(){
//     $('.mad-dog-phone img').appear();
//     $('.mad-dog-phone img').on('appear', function(){
//         $(this).addClass('phone-scroll');
//     })
// })