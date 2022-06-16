function TinhToan()
{
    //Khai báo biến
    var strSoA = "";
    var strSoB = "";
    var strPhepTinh = "";

    var soA = 0;
    var soB = 0;
    var ketqua = 0;

    //Lấy thông tin từ giao diện
    strSoA = $("#txtSoA").val();
    strSoB = $("#txtSoB").val();
    strPhepTinh = $("#pheptinh").val();

    //chuyển về dạng số
    soA = parseFloat(strSoA);
    soB = parseFloat(strSoB);
    switch(strPhepTinh)
    {
        case "1": 
        ketqua = Tong(soA,soB);
        break;
        case "2": 
        ketqua = Hieu(soA,soB);
        break;
        case "3": 
        ketqua = Tich(soA,soB);
        break;
        case "4": 
        if(soB == 0)
        {
           $("#error").text("Bạn cần phải nhập số B khác 0");
           return;
        }
        ketqua = Thuong(soA,soB);
        break;
    }
    //Hiển thị kết quả
    $("#txtKetqua").val(ketqua);
}

function Tong(a,b)
{
    return a + b;
}

function Hieu(a,b)
{
    return a - b;
}

function Tich(a,b)
{
    return a * b;
}

function Thuong(a,b)
{
    return a / b;
}