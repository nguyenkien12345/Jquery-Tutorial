jQuery(document).ready(function($) {
   $('.content').isotope({
      itemSelector: 'img'
      // Đối  tượng được chọn
   });
   $('.menu_item').click(function(event) {
      var type = $(this).attr('type');
      // console.log(type);
      var ten_loai = $(this).text();
      $('.title').text(ten_loai);
      type = '.'+type;
      $('.content').isotope({
         filter:type
      });
   });
});