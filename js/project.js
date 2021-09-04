$(function () {
	// 定时器
	var timer;
	// 当前轮播图下标
	var current_index = 0;
	// 获取图片的张数
	var len = $('.music_img_container img').length;
	var autoPlay = function () {
		// 当前路径不是在 project 下时清除定时器
		if (window.location.pathname !== "/project/") {
			clearInterval(timer);
			return;
		}
		current_index++;
		if (current_index > len - 1) {
			current_index = 1;
			$(".music_img_container").css("left", 0);
		}
		// 切换到下一张
		$(".music_img_container").animate({ left: -current_index * 100 + "%" }, 500)
	}
	timer = setInterval(function () {
		autoPlay();
	}, 2000);
	$(".music_back").on("mouseenter", function () {
		clearInterval(timer);
	});
	$(".music_back").on("mouseleave", function () {
		timer = setInterval(function () {
			autoPlay();
		}, 2000);
	});
    // 云音乐全栈小程序
	$('.wechat_img').on("mouseenter mouseleave", function (e) {
		if (e.handleObj.origType == "mouseenter") {
			$(".wechat_mask").stop().slideDown(1500);
		} else if (e.handleObj.origType == "mouseleave") {
			$(".wechat_mask").stop().slideUp(1000);
		}
	});
})