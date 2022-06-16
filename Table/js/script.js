$(document).ready(function(){
    // $('.action button').click(function(){
    //     $(this).closest('tr').remove();
    //     // Cập nhật lại giá trị thứ tự các cột
    //     var row = 1;
    //     $('table.product tr').each(function(){
    //         $(this).find('td').eq(0).text(row);
    //         // Lấy cột đầu tiên cập nhật giá trị
    //         row++;
    //     });
    // });
    $('.action button').click(function(){
        $(this).closest('tr').remove();
        // Cập nhật lại giá trị thứ tự các cột
        var row = 100;
        $('table.product tr').each(function(){
            $(this).find('td').eq(1).text(row);
            row++;
        });
    });
    $('table.product tr').mouseover(function(){
        $(this).addClass('hashover');
    }).mouseout(function(){
        $(this).removeClass('hashover');
    });

    $('table.product tr td .bt-radio').click(function(){
        $('table.product tr').each(function(){
            $(this).removeClass('active')
        });
        $(this).closest('tr').addClass('active');
    });

    $('table.product tr td .bt-checkbox').click(function(){
       if($(this).prop('checked') == true)
       {
        $(this).closest('tr').addClass('active');
       }
       else{
        $(this).closest('tr').removeClass('active');
       }
       $('table.product tr').each(function(){
           if($(this).find('.bt-checkbox').prop('checked') == false){
               $(this).removeClass('active');
           }
       });
    });
    });