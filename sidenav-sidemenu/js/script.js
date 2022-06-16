$(document).ready(function() {
	$(".btn-open").click(function(event) {
		$(".sidenav").addClass('show');
		$(".main-contain").addClass('push');
	});
	$(".btn-close").click(function(event) {
		$(".sidenav").removeClass('show');
		$(".main-contain").removeClass('push');
	});
});