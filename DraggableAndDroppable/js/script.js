$(document).ready(function() {
	$(".MyDraggable").draggable({
	// drag:function(){
	// 	$(this).css("background-color","#DC143C");
	// },
	// stop:function(){
	// 	$(this).css("background-color","#4B0082");
	// }
	// axis: "x",
	// containment:"parent"
	// scroll:true
	// revert:true,
	// helper:"clone"
	// disabled:true
});

	$(".MyDroppable").droppable({
		activate:function(){
			$(this).css("background-color","yellow");
		},
		over:function(){
			$(this).css("background-color","blue");
		},
		out:function(){
			$(this).css("background-color","green");
		},
		drop:function(){
			$(this).css("background-color","grey");
		},
		deactivate:function(){
			$(this).css("background-color","red");
		}
	})
});