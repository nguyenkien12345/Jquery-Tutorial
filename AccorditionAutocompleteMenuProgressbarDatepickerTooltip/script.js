$(document).ready(function() {

	// <!-- Accordition -->
	$('.accordition').accordion({
		// Khi click vào thẻ h3 bên trong thẻ div nó sẽ thu gọn lại
		header: '> div > h3',
		// Để cho phép thu gọn tất cả các phần (đóng tất cả các thẻ), hãy đặt collapsible tùy chọn thành true
		collapsible: true,
		// Để lấp đầy không gian dọc được phân bổ bởi vùng chứa của nó, hãy đặt heightStyle là 'fill' và  kích thước của accordion sẽ bằng chiều cao của vùng chứa nó
		heightStyle: 'fill',
		// Chiều cao bằng đúng nội dung của block chứa thẻ
		heightStyle: 'content',
	}).sortable({
		// Cho phép kéo thả thay đổi vị trí theo trục y
        axis: 'y',
		// Nhấn vào thẻ h3 để kéo
        handle: 'h3',
        stop: function( event, ui ) {
          ui.item.children( 'h3' ).triggerHandler( 'focusout' );
          // Refresh lại accordion sau khi kéo thay đổi vị trí
          $( this ).accordion( 'refresh' );
        }
    });

	// <!-- Autocomplete -->
	var data = ['Bóng đá','Cầu lông','Quần vợt','Muay Thái','Bơi lội','Điền kinh','Thể dục dụng cụ','Bóng chuyền','Bóng rổ','Boxing','Judo','Taekwondo','Đua ngựa', 'Cử tạ','Xiếc','Ném sào','Uốn dẻo'];
	$('#autocomplete').autocomplete({
		delay: 100,
		source: data
	});

	// <!-- Tooltip -->
	$(document).tooltip({
		// Bất cứ thẻ nào trong body có thuộc tính title sẽ có tooltip
	});
	$( "#show-option" ).tooltip({
		show: {
		  effect: "slideDown",
		  delay: 250
		}
	});
	$( "#hide-option" ).tooltip({
		hide: {
			effect: "explode",
			delay: 250
		}
	});
	$( "#open-event" ).tooltip({
		show: null,
		position: {
			my: "left top",
			at: "left bottom"
		},
		open: function( event, ui ) {
			ui.tooltip.animate({ top: ui.tooltip.position().top + 10 }, "fast" );
		}
	});

	// <!-- Datepicker -->
	$('#datapicker').datepicker({
			dateFormat: 'dd/mm/yyyy',
			showAnim: 'drop',
			minDate: '-10D',
			maxDate: '-20D'
	})

	// <!-- Menu -->
	$('#menu').menu();
	});