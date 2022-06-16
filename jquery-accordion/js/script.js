$(document).ready(function() {
	$('.noi-dung').slideUp();
	$('.khoi h3').on('click', function(event) {
		event.preventDefault();
		$(this).next().slideToggle();
		$('html,body').animate({
			scrollTop: $(this).offset().top},
			400);
	});
});

$(document).ready(function() {
	$('button').click(function(event) {
		$('html,body').animate({
			scrollTop: 0},
			400);
	});
});