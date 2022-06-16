// Khai báo các biến
var paintwidth = 1; //Độ dày nét vẽ 
var color = "#000000"; // Màu nét vẽ
var paint; //Biến luận lý cho biết nhấn chuột trái hay phải
var prevX,prevY //Biến lưu vị trí điểm vẽ trước đó

$(document).ready(function(){
    context = canvas.getContext("2d"); //Lấy thiết bị ngữ cảnh của canvas
    //Cài đặt hàm xử lý sự kiện nhấn chuột trên canvas
    $("canvas").mousedown(function(e){
        //Lưu vị trí điểm chuột
        prevX = e.pageX - this.offsetLeft;
        prevY = e.pageY - this.offsetTop;
        paint = true;//cho phép vẽ
    });
    //Cài đặt hàm xử lý sự kiện di chuyển chuột
    $("canvas").mousemove(function(e){
        if(paint)
        {
            context.strokeStyle = color; // màu nét vẽ
            context.lineWidth = paintwidth; //độ dày nét vẽ
            context.lineJoin = "round"; //đấu bút vẽ tròn
            context.beginPath(); //chuẩn bị vẽ
            context.moveTo(prevX,prevY);//Di chuyển điểm vẽ đến điểm (prevX,prevY)
            //Vẽ đoạn thẳng đến điểm di chuyển chuột
            context.lineTo(e.pageX - this.offsetLeft,e.pageY - this.offsetTop);
            context.closePath();
            //Thực hiện vẽ 
            context.stroke();
            //Cập nhật điểm prevX,prevY
            prevX = e.pageX - this.offsetLeft;
            prevY = e.pageY - this.offsetTop;
        }
    });
    // cài đặt hàm xử lý sự kiện thả nút chuột
    $("canvas").mouseup(function(e){
        paint = false;//kết thúc chế độ vẽ
    });
    //Cài đặt hàm xử lý thay đổi màu chọn
    $("#color").change(function(){
        color = $(this).val();
    });
    //cài đặt hàm xử lý sự kiện đổi chọn trên các radio
    $(".pen").change(function(){
        var pen = $(this).val();
        if(pen == "thin")
            paintwidth = 1;
        else if (pen == "medium")
            paintwidth = 5;
        else
            paintwidth = 10;
    });
    //cài đặt hàm xử lý sự kiện click nút xóa
    $("#btnDel").click(function(){
        var width = $("canvas").width();
        var height = $("canvas").height();
        //tô màu trắng xóa canvas
        context.fillStyle = "#ffffff";
        context.rect(0,0,width,height);
        context.fill();
    });
});
