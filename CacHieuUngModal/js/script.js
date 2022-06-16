$(document).ready(function() {
	$("#open-1").click(function(event) {
		$('.hop-thoai-1').addClass('show')
		$('.background').addClass('show')
	});
	$("#open-2").click(function(event) {
		$('.hop-thoai-2').addClass('show')
		$('.background').addClass('show')
	});
	$("#open-3").click(function(event) {
		$('.hop-thoai-3').addClass('show')
		$('.background').addClass('show')
	});
	$("#open-4").click(function(event) {
		$('.hop-thoai-4').addClass('show')
		$('.background').addClass('show')
	});
	$(".close").click(function(event) {
		$('.hop-thoai').removeClass('show')
		$('.background').removeClass('show')
	});
	$(".background").click(function(event) {
		$('.hop-thoai').removeClass('show')
		$('.background').removeClass('show')
	});
});