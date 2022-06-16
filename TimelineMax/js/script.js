$(document).ready(function() {
	timeline = new TimelineMax();
	timeline.to($('.khoi'),1,{x:200})
	.to($(".khoi"),1,{y:200},"+=1")
	.to($('.khoi'),1,{x:-200},"+=1")
	.to($('.khoi'),1,{y:-200});
   $('#stop').click(function(event) {
      timeline.stop();
   });
	$('#play').click(function(event) {
		timeline.play();
	});
	$('#play_reverse').click(function(event) {
		timeline.reverse();
	});
});