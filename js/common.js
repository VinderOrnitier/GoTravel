$(document).ready(function() {

	//Видео фон
	$(function(){
		$(".player").YTPlayer();
	});

	//Фиксирование меню
	var num = 100; 

	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > num) {
			$('.top-menu').addClass('fixed');
		} else {
			$('.top-menu').removeClass('fixed');
		}
	});

	//Исчезновение формы
	var header = $('.tabs');
	var range = 100;
	$(window).on('scroll', function () {
			var st = $(this).scrollTop();
			header.each(function () {
					var offset = $(this).offset().top;
					var height = $(this).outerHeight();
					offset = offset + height / 2;
					$(this).css({ 'opacity': 2 - (st - offset + range) / range });
			});
	});

	//Переключатель в форме
	$('.switch label').on('click', function(){
		var indicator = $(this).parent('.switch').find('span');
		if ( $(this).hasClass('right') ){
			$(indicator).addClass('right');
		} else {
		$(indicator).removeClass('right');
		}
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
