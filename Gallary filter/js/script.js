$(document).ready(function() {
	$('.menu_item').click(function(event) {
		var _type = $(this).attr('type');
		var _title = $(this).text();
	$('.title').text(_title);
	$('img').each(function() {
		if($(this).hasClass(_type)){
			$(this).removeClass('hidden');
			$(this).addClass('animate__flip');
		}
		else{
			$(this).addClass('hidden');
			$(this).removeClass('animate__flip');
		}
			});
	});
});