$(document).ready(function(){

	var
		loader = $('.preloader');

	loader.animate({	
		opacity: 0,
	}, 1000, function() {
		loader.css("display", "none");
	});

});