$(function() {
	var menu = $('.navigation__menu');

	$('.navigation h2').on('click', function() {
		if ($(document).width() < 885) {
			menu.fadeToggle(500, function() {
				if (menu.css('display') === 'none') {
					menu.attr('style', '');
					//console.log($(document).width());
				}
			});
		}

	});

	$(window).on('resize', function() {

		if ($(document).width() > 885) {
			if (menu.css('display') === 'block') {
				menu.attr('style', '');
				//console.log($(document).width());
			}

		}
	});

});