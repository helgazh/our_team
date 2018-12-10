;(function($){

    "use strict";

    $(function(){
        $('.ba-team-slider').slick({
            infinity: false,
            slidesToScroll: 1,
            slidesToShow: 1,
            dots: true,

            prevArrow: '<button id="prev" type="button" class="slick-next"> <img src="img/keyboard-right-arrow-button.svg"> </button>',
            nextArrow: '<button id="next" type="button" class="slick-prev"> <img src="img/left-arrow.svg"> </button>'
        })
    });
    })(jQuery);