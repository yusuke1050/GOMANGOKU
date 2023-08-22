$(function(){
    $('.main-visual img:nth-child(2)').hide();
    setInterval(function(){
        $('.main-visual img:first-child').fadeOut(1500);
        $('.main-visual img:nth-child(2)').fadeIn(1500);
        $('.main-visual img:first-child').appendTo('.main-visual');
    },4000);
});



$(function(){
    $('.NEW-ARRIVAL-content').slick( {
        autoplay: false,
        arrows: true,
        slidesToShow: 5,
        swipe: true,
        cssEase: "linear",
        Infinity: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});


$(function () {
    $('.burger').on('click',function() {
        if($(header).hasClass('active')){
            $(header).removeClass('active');
            $(header).removeClass('open');
        }else{
            $(header).addClass('active');
            $(header).addClass('open');
        }
    });
});

$(function () {
    function sliderSetting(){
        var width = $(window).width();
        if(width <= 769){
            $(".NEWS-content").not('.slick-initialized').slick({
                autoplay: false,
                arrows: false,
                Infinity: false,
                dots: false,
                slidesToShow: 1,
                centerMode: false,
            });
        } else {
            $('.slick-initialized').slick('un slick');
        }
    }
    sliderSetting();
    $(window),resize(function(){
        sliderSetting();
    });

        
    
});
