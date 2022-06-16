$(window).on('load',function(event) {
	event.preventDefault();
	$("body").removeClass('preloading');
	$(".loader").delay(1000).fadeOut('fast');
});