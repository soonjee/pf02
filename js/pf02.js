$(function () {
    $('.visual_slider').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        pauseOnHover: true,
    })

    $('.main .visual_control i:nth-child(1)').on('click', function () {
        $('.visual_slider').slick('slickPrev')
    });
    $('.main .visual_control i:nth-child(2)').on('click', function () {
        $('.visual_slider').slick('slickNext')
    });
})