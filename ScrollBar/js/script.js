$(document).ready(function() {
   $(window).scroll(function(event) {
      var pos_body = $('html,body').scrollTop();
      // console.log(pos_body);
      if(pos_body>20){
         $('.menu').addClass('sticky');
      }
      else {
         $('.menu').removeClass('sticky');
      }
      if(pos_body>1200){
         $('.back-to-top').addClass('show');
      }
      else{
         $('.back-to-top').removeClass('show');
      }
   });
   $('.back-to-top').click(function(event) {
      $('html,body').animate({scrollTop: 0},1400);
   });
});