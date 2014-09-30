$(function(){

	var btn = $('.btn');
	var title = $('.title');

	$(btn).click(function(){

		if ($(title).hasClass('test')) {

			$(title).removeClass('test');

		} else {

			$(title).addClass('test');

		}

	});

})