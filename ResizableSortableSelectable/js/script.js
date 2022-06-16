// $(document).ready(function() {
// 	$('#list1').sortable({
// 		connectWith:"#list2",
// 		activate:function(){
// 			$('#list1 li').css("background-color","blue");
// 		},
// 		deactivate:function(){
// 			$('#list1 li').css("background-color","green");
// 		}
// 	})
// 	$('#list2').sortable({
// 		connectWith:"#list1",
// 		receive:function(){
// 			$('#list2 li').css("background-color","orange");
// 		},
// 		remove:function(){
// 			$('#list2 li').css("background-color","red");
// 		}
// 	})
// });

// $(document).ready(function() {
// 	$("#list1").selectable({
// 		filter:".A",
// 		selected:function(){
// 			var data ="";
// 			$('#list1 .ui-selected').each(function(){
// 				data += $(this).attr("data");
// 			});
// 			alert(data);
// 		}
// 	});
// 	// $("#list2").selectable({
// 	// 	filter:".B"
// 	// })
// });

$(document).ready(function() {
	$('#khoi1').resizable({
		// animate:true,
		// ghost:true,
		alsoResize:"#khoi2"
	});
	$('#khoi2').resizable({
		// animate:true,
		// ghost:true,
	});
});