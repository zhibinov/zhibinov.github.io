$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 2,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 800,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });
});

$(function () {
    $('.minimized').click(function (event) {
        var i_path = $(this).attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div>');
        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth()) / 2,
            // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight()) / 2
        });
        $('#overlay, #magnify').fadeIn('fast');
    });

    $('body').on('click', '#close-popup, #overlay', function (event) {
        event.preventDefault();

        $('#overlay, #magnify').fadeOut('fast', function () {
            $('#close-popup, #magnify, #overlay').remove();
        });
    });
});