$(document).ready(function(){
    $('.tieudekhoi').click(function(){
        // Nhấn vào màu vàng. Nhấn tiếp màu đen
        $(this).toggleClass('vang');
        // Khi click vào nội dung hiện ra
        $(this).next().slideToggle(800);
        // Sử dụng hàm animate chuyển nội dung đi lên
        $('html,body').animate({scrollTop: $(this).offset().top})

    })
    // code cho phần phóng to ảnh
    $(".anh a").fancybox();
    // Xử lý co dãn nội dung accordion
    $('.noidungkhoi').slideUp();
})