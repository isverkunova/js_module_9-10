$(function() {

    //jCarousel
    $('.jcarousel').jcarousel({
        wrap: 'circular',
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

    //select
    $('select').uniform();
});