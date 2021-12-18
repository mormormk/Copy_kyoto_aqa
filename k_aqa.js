
// スライドショー slideshow
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 10,
	slidesPerView: 3,
    autoHeight: true,
    autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});

// ハンバーガーメニュー humberger
$(function(){
    $("nav").hide();
    $(".openModalBtn").click(function(){//メニューボタンをクリックしたとき
        $("nav").toggle(300);//0.3秒で表示したり非表示にしたりする
    });
});

// TOP追従メニューバー
$(function () {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 300) {
            $(".l_topber").css('top','0');
        } else {
            $(".l_topber").css('top','-100px');
        }
    });
});