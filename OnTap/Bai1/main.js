$(document).ready(function () {
    $("#btnTaoCauHoi").click(TaoCauHoi);

    function TaoCauHoi() {
        //Lấy số câu hỏi người dùng nhập vào
        var socauhoi = $("#txtSoCauHoi").val();
        // Nếu trong javascript tạo thẻ bằng cách dùng hàm create thì trong jquery tạo thẻ div bằng cộng chuỗi
        var divNoiDungCauHoi = "<div class = 'NoiDungCauHoi'>";

        for (var i = 1; i <= socauhoi; i++) 
        {
            var tagCauHoi = '<div class="cauhoi" mahcauhoi=' + i + '>';
            tagCauHoi += "<h3>Câu hỏi " + i + '</h3>';
            // Tạo câu trả lời
            var tagCauTraLoi = '<div class="DanhSachCauTraLoi">';
            // Random từ 1 đến 4 
            var viTriDapAnDung = Math.floor(Math.random()*4) + 1;
            // Vì 1 câu hỏi có 4 câu trả lời
            for(var j = 1; j <= 4; j++)
            {
                if(j == viTriDapAnDung)
                {
                // Lý do truyền i vào là vì câu hỏi 1 tương ứng với các câu trả lời 1, câu hỏi 2 tương ứng với các câu trả lời 2
                tagCauTraLoi += '<input DapAnDung="true" class="CauTraLoi" type="radio" name = "'+i+'" value = "tl_'+j+'"> Đáp án '+ j ;
                }
                else
                {
                tagCauTraLoi += '<input DapAnDung="false" class="CauTraLoi" type="radio" name = "'+i+'" value = "tl_'+j+'"> Đáp án '+ j ;
                }

            }
            tagCauTraLoi += '</div>';
            tagCauHoi += tagCauTraLoi;
            tagCauHoi += "</div>";
            // Tạo số câu hỏi mong muốn
            divNoiDungCauHoi += tagCauHoi;
        }

        divNoiDungCauHoi += '</div>';
        //Tạo ra nút chấm điểm
        divNoiDungCauHoi += '<br/><input type="button" id="btnChamDiem" value="Chấm điểm" class="btn btn-success">';
        $("#DanhSachCauHoi").html(divNoiDungCauHoi);
    }

    // Xử lý cho sự kiện click trên câu trả lời
    //Ở đây chúng ta cần xác định đối tượng gốc là DanhSachCauHoi mà không phải là CauTraLoi
    // Vì CauTraLoi là cái thành phần ban đầu chưa có mà được tạo ra sau này nên chúng ta phải lấy thằng gốc là thằng bao phủ thằng được tạo ra 
    // sau này
    // delegate: bao phủ
    $("body").delegate(".CauTraLoi","click",function(){
        var giaTriCauTraLoi = $(this).val();
        // this ở đây là thằng CauTraLoi
        var tenCauHoi = $(this).closest(".cauhoi").find("h3").text(); //lấy ra câu hỏi
        alert(tenCauHoi + ': ' + giaTriCauTraLoi);
    });

    // Xây dựng xử lý nút chấm điểm
    $("body").delegate("#btnChamDiem","click",function(){
        // Số câu hỏi
        var socauhoi = $("#txtSoCauHoi").val();
        var soCTLDung = 0;
        // Duyệt các div câu hỏi
        $(".cauhoi").each(function(){
            var lstCauTraLoi = $(this).find(".CauTraLoi") //Lưu ý câu hỏi là thẻ cha và danh sách câu trả lời là thẻ con nên mới dùng find được
            //Kiểm tra người dùng checked vào DapAnDung = true hay không
            // Duyệt câu trả lời trên câu hỏi
            for(var i = 0; i < lstCauTraLoi.length; i++)
            {
                var dapAnDuocChon = lstCauTraLoi[i].checked;
                var dapAnDung = lstCauTraLoi[i].getAttribute('DapAnDung');
                // Này là true booblean
                if(dapAnDuocChon == true && dapAnDung.trim() == "true") 
                {
                        soCTLDung += 1;
                }
            }
        })
        $(".KQ").html(soCTLDung + "/" + socauhoi)
    });

});

//Lưu ý sự kiện click chỉ được thực hiện khi nó có sẵn trên giao diện chứ không phải là 
//được thêm vô sau khi chạy trang web và thực thi câu lệnh tạo thẻ