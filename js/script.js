$(window).ready(function(){

	"use strict";

	// trigger animation
		var trigger = $('.nav-trigger');

		trigger.click(function(){
			var	triggerSpan = $('.nav-trigger span');
			if (triggerSpan.hasClass('trigger-close')) {
					triggerSpan.eq(1).hide();
					triggerSpan.removeClass('trigger-close');
					triggerSpan.addClass('trigger-open');
			} else {
				triggerSpan.eq(1).show();
				triggerSpan.removeClass('trigger-open');
				triggerSpan.addClass('trigger-close');
			}
			// show nav on click
			$('nav').toggleClass('nav-open');
		});

	// close nav on click any link inside
		$('.navbar li a').click(function(){
			trigger.click();
		});

	//	text animation
		$(window).load(function(){
			$('.type-it').typeIt({
			    strings:  ['travel', 'coding', 'coffee', 'football'],
			    breakLines: false,
			    speed: 250,
			    lifeLike: false,
			    loop: true,
			    cursor: true
			});
		})

	// center .left-side-content
		$('.left-side-content').css('paddingTop', ($(window).height() - $('.left-side-content').height()) / 3);

	// smooth scroll to the div
		$('.navbar li a').click(function(event) {
		var id = $(this).attr("href");
		var offset = 0;
		var target = $(id).offset().top - offset;
		$('html, body').animate({
		scrollTop: target
		}, 500);
		event.preventDefault();
		});

	// on window load functions
	$(window).load(function(){
		// wow.js
		var wow = new WOW({mobile:false});
		wow.init();

		// loading screen
		$('body').css('overflow', 'visible');
		$('#loading-screen').fadeOut(function(){
			$(this).remove();
		});
	});

	// remove focus from links
		$('a').click(function(){
        	$(this).blur();
        });
  
	// back to top
		var scrollButton = $("#scroll-up");

		$(window).scroll(function(){

			if( $(this).scrollTop() >= 500){

				scrollButton.css('right', '0px');
			}else{
				scrollButton.css({
					right:'-40px',
					display: 'block'
				});
			}
		});

		scrollButton.click(function(){
			$("html,body").animate({scrollTop:0}, 500);
		});
});