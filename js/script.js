$(function () {
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

