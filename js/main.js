console.log(location,window);

var siteUrl = location.origin + '/front/u-industry/'

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: `<img class="slick-arrow slick-next" src="${siteUrl}/img/slider-right.png">`,
    prevArrow: `<img class="slick-arrow slick-prev" src="${siteUrl}/img/slider-left.png">`,


    responsive: [
        {
            breakpoint: 1910,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.slider-920').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.projects__slider').slick({
    dots: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    nextArrow: `<img class="slick-arrow slick-next-projects" src="${siteUrl}/img/slider-right.png">`,
    prevArrow: `<img class="slick-arrow slick-prev-projects" src="${siteUrl}/img/slider-left.png">`,
});


$('.click').on('click' , function (){
    if ($(this).find('.types__item-inner').hasClass('event')){
        $(this).find('.types__item-inner').removeClass('event');
        console.log('ok')
    } else{
        $(this).find('.types__item-inner').addClass('event')
        console.log('lox')
    }

})
