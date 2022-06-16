$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });

    //text chỉ có thể lấy ra giá trị
    //html cũng lấy ra giá trị nhưng nó có thể gán thêm giá trị html vào 

    $("#btnThucHien").click(function(){
        //Lấy giá trị
        var strGiaTri = $("#stanford").text();
        //Gán giá trị
        $("p").text(strGiaTri);
        //Thiết lập giá trị cho đối tượng
        $("#mota1").html("<span style='color:red;background-color:yellow;'>" + strGiaTri + "</span>")
        // $("p").text($("#mota1").html());
        // $("p").html($("#mota1").html());

        //Lấy thông tin
        // var name = $("#txtName").val();
        // if(name.length == 0)
        // {
        //     alert("Please Enter Your Name: ");
        // }
        // else
        // {
        //     alert("Tên của bạn là: " + name)
        // }
        // //Lấy thông tin
        // var age = $("#txtAge").val();
        // if(age.length == 0)
        // {
        //     alert("Please Enter Your Age: ");
        // }
        // else
        // {
        //     alert("Tuổi của bạn là: " + age)
        // }
        // if(name == "Trung Kiên")
        // {
        //     // Thiết lập thông tin
        //     $("#txtCrush").val("Đinh Thị Vân Anh");
        // }
        // else if(name == "Duy Linh")
        // {
        //     // Thiết lập thông tin
        //     $("#txtCrush").val("Vương Huỳnh Quế Trân");
        // }

        //Lấy thông tin từ thuộc tính của thẻ a
        var tieude = $("a").attr("title");
        var diachi = $("a").attr("href");
        //Thiết lập giá trị cho thuộc tính
        $("a").attr("title",diachi);

        //Gán cho thẻ p
        $("#demo").text(tieude + "; website: " + diachi);
    })
})