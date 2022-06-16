$(document).ready(function() {
	$("#myInput").on('keyup', function() {
		var tukhoa = $(this).val().toLowerCase();
		$(".trKey").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(tukhoa) > -1);
		});
	});
});