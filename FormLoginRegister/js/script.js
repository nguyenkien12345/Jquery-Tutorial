// cách 1
$(document).ready(function() {
	$('#btn-dangky').click(function(event) {
		$('#form-dangnhap').addClass('hidden');
		$('#form-dangky').removeClass('hidden');
	});
});

// cách 2
// $(document).ready(function() {
// 	$("#form-dangky").animate({
// 			marginLeft: -300,
// 			opacity: 0});
// 	$('#btn-dangky').click(function(event) {
// 		$("#form-dangnhap").animate({
// 			marginLeft: -300,
// 			opacity: 0});
// 		$("#form-dangky").animate({
// 			marginLeft: 0,
// 			opacity: 1});
// 	});
// });
