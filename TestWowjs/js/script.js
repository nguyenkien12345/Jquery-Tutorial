// $(document).ready(function() {
//    $(window).scroll(function(event) {
//       var pos_body = $('html,body').scrollTop();
//       var pos_img1 = $('.hinh-1').offset().top;
//       var pos_img2 = $('.hinh-2').offset().top;
//       var pos_img3 = $('.hinh-3').offset().top;
//       var pos_img4 = $('.hinh-4').offset().top;
//       var pos_img5 = $('.hinh-5').offset().top;
//       var pos_img6 = $('.hinh-6').offset().top;
//       // console.log(pos_body);
//       if(pos_body>20){
//          $('.menu').addClass('sticky');
//       }
//       else {
//          $('.menu').removeClass('sticky');
//       }
//       if(pos_body>1200){
//          $('.back-to-top').addClass('show');
//       }
//       else{
//          $('.back-to-top').removeClass('show');
//       }
//       if(pos_body > pos_img3-300){
//          $('.hinh-3').addClass('animate__animated animate__rubberBand')
//       }
//       if(pos_body > pos_img4-300){
//          $('.hinh-4').addClass('animate__animated animate__flash')
//       }
//       if(pos_body > pos_img5-300){
//          $('.hinh-5').addClass('animate__animated animate__shakeX')
//       }
//       if(pos_body > pos_img6-300){
//          $('.hinh-6').addClass('animate__animated animate__shakeY')
//       }
//    });
//    $('.back-to-top').click(function(event) {
//       $('html,body').animate({scrollTop: 0},1400);
//    });
// });