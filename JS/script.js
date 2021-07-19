
$(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    items: 3,
    nav: true,
    loop: true,
    margin: 5,
    padding: 5,
    stagePadding: 5,
    responsive: {
        0: {
            items: 1,
            dots: false
        },
        485: {
            items: 2,
            dots: false
        },
        728: {
            items: 3,
            dots: true
        }
    }

});


