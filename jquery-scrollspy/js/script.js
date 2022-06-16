$(document).ready(function() {
	$('.menu a').click(function(event) {
		event.preventDefault();
		part = $(this).attr('href');
		position = $(part).offset().top;
		$('html,body').animate({
			scrollTop: position
		},
		400);
	});
});