$(document).ready(function() {
    // Cách 1
    $(".update").click(function(event){
        var price = $(this).parent().parent().children(".price").html();       
        //Thằng cha đầu tiên của nó là td ,thằng cha thứ hai của nó là tr, thằng con là price
        //.html là lấy giá trị của nó 

        var quantity = $(this).parent().parent().children("td").children(".quantity").val(); 
        //Thằng cha đầu tiên của nó là td ,thằng cha thứ hai của nó là tr, thằng con là td có thằng con là quantity

        var thanhtien = price*quantity;

        var price = $(this).parent().parent().children(".total").html(thanhtien);

        var sodong = $("tbody tr").length;

        S = 0;
        for(var i = 1; i <= sodong; i++)
        {
            var tiencuatungdong = parseInt($("tbody tr:nth-child("+i+")").children('.total').html());

            S = S + tiencuatungdong;

            $(".subtotal").html(S);
        }
    });

    //Cách 2
    // $(".quantity").change(function(event){
    //     var price = $(this).parent().parent().children(".price").html();       
    //     //Thằng cha đầu tiên của nó là td ,thằng cha thứ hai của nó là tr, thằng con là price
    //     //.html là lấy giá trị của nó 

    //     var quantity = $(this).parent().parent().children("td").children(".quantity").val(); 

    //     var thanhtien = price*quantity;

    //     var price = $(this).parent().parent().children(".total").html(thanhtien);

    //     var sodong = $("tbody tr").length;
        
    //     S = 0;
    //     for(var i = 1; i <= sodong; i++)
    //     {
    //         var tiencuatungdong = parseInt($("tbody tr:nth-child("+i+")").children('.total').html());

    //         S = S + tiencuatungdong;

    //         $(".subtotal").html(S);
    //     }
    // });
});