$(document).ready(function() {
	var stt = 0;
	startImg = parseInt($('img:first').attr('stt'));
	endImg   = parseInt($('img:last').attr('stt'));

	$('img').each(function() {
		if ($(this).is(':visible')){
			stt = parseInt($(this).attr('stt'));
		}
	});

	$('#next').click(function(event) {
		next = ++stt;
		if(next == endImg){
			stt=(startImg-1);
		}
		$('img').hide();
		$('img').eq(next).show();
		$('li').removeClass('active');
		$('li').eq(next).addClass('active');
	});

	$('#prev').click(function(event) {
		prev = --stt;
		if(prev == 0){
			stt=(endImg+1);
		}
		$('img').hide();
		$('img').eq(prev).show();
		$('li').removeClass('active');
		$('li').eq(prev).addClass('active');
	});
	setInterval(function(){
    $("#next").click();
    },1000);
});