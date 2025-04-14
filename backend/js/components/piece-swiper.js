/*
轮播
*/
define(['swiper'], function (swiper) {
    var init = function (obj) {
        var indexSwiper = new swiper(obj.id, {
            loop: true, // 循环模式选项
            // 鼠标可以控制滚动
            mousewheel: true,
            autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                // 拖动后还会自动播放=false
                disableOnInteraction: false
            },
            // autoplay: false,
            pagination: {
                el: '.swiper-pagination',
                clickable :true
            },
        });
        return indexSwiper;
    };

    return {
        init: init
    };
});