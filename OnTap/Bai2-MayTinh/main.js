$(document).ready(function() {
    $('.box-calculation').attr('disabled', 'true'); // Vô hiệu hoá ô phép tính
    $('.box-result').attr('disabled', 'true'); // Vô hiệu hoá ô kết quả
    $('.box-button button.times').attr('disabled', 'true'); // Vô hiệu hoá nút nhân
    $('.box-button button.divide').attr('disabled', 'true'); // Vô hiệu hoá nút chia
    $('.box-button button.equal').attr('disabled', 'true'); // Vô hiệu hoá nút bằng
});

// Giải thích :
// Chúng ta phải vô hiệu hoá 2 ô phép tính và kết quả để người dùng không thể nhập bất kỳ nội dung nào vào bên trong mà phải thông qua các nút 
// của máy tính.
// Vì sao lại vô hiệu hoá các nút nhân, chia, bằng :
// Nút nhân: khi bắt đầu một phép tính thì không thể bắt đầu bằng dấu nhân được.
// Nút chia: tương tự như nút nhân.
// Nút bằng: mới vừa load trang xong, chưa nhập phép tính gì nên cần vô hiệu hoá nút bằng.

// Thực hiện các hành động bên trong khi click vào các nút số
$('.box-button button.number').on('click', function() {
    $char = $(this).html(); // Lấy số vừa click
    $value_calculation = $('.box-calculation').val(); // Lấy chuỗi giá trị trong ô phép tính
    $('.box-calculation').val($value_calculation + $char); // Thêm số vừa click vào sau chuỗi giá trị trong ô phép tính
    $('.box-button button.operation').removeAttr('disabled'); // Gỡ bỏ vô hiệu hoá các nút phép toán
    $('.box-button button.equal').removeAttr('disabled'); // Gỡ bỏ vô hiệu hoá nút bằng
});

// Thực hiện các hành động bên trong khi click vào các nút dấu chấm
$('.box-button button.dot').on('click', function() {
    $char = $(this).html(); // Lấy dấu chấm
    $value_calculation = $('.box-calculation').val(); // Lấy chuỗi giá trị trong ô phép tính
    $('.box-calculation').val($value_calculation + $char); // Thêm dấu chấm vào sau chuỗi giá trị trong ô phép tính
    $('.box-button button.operation').attr('disabled', 'true'); // Vô hiệu hoá các nút phép toán
    $(this).attr('disabled', 'true'); // Vô hiệu hoá nút dấu chấm
});

// Giải thích :
// Sau một dấu chấm phải là một con số chứ không phải là một phép toán nên cần vô hiệu hoá tất cả các nút phép toán.
// Không thể nào mà có nhiều dấu chấm lặp lại liên tiếp nên khi click vào nút dấu chấm thì tự vô hiệu hoá nó luôn.

// Thực hiện các hành động bên trong khi click vào các nút CE
$('.box-button button.refresh').on('click', function() {
        $('.box-calculation').val(''); // Làm trống ô phép tính
        $('.box-result').val(''); // Làm trống ô kết quả
});

// Thực hiện các hành động bên trong khi click vào các nút Del
$('.box-button button.del').on('click', function() {
    $string = $('.box-calculation').val(); // Lấy giá trị trong ô phép tính
    $('.box-calculation').val($string.substring(0, $string.length - 1)); // Xoá ký tự cuối cùng chuỗi giá trị trong ô phép tính
});

// Thực hiện các hành động bên trong khi click vào các nút phép toán
$('.box-button button.operation').on('click', function() {
    $char = $(this).html(); // Lấy dấu phép toán vừa click
    $value_calculation = $('.box-calculation').val(); // Lấy chuỗi giá trị trong ô phép tính
    $('.box-calculation').val($value_calculation + $char); // Thêm dấu phép toán vừa click vào sau chuỗi giá trị trong ô phép tính
    $('.box-button button.times').attr('disabled', 'true'); // Vô hiệu hoá nút nhân
    $('.box-button button.divide').attr('disabled', 'true'); // Vô hiệu hoá nút chia
    $('.box-button button.dot').removeAttr('disabled'); // Gỡ bỏ vô hiệu hoá nút dấu chấm
});

// Trong các phép toán chỉ có cộng và trừ có thể lặp lại nhiều lần liên tiếp (Vd : +3-+2=1) nên khi click vào nút phép toán nào đó thì phải vô 
// hiệu nút nhân và chia, vì hai nút này không thể nào lặp lại nhiều lần liên tiếp được (Vd: 3/*4 = Math Error). 
// Ngoài ra khi click vào nút phép toán thì tiếp theo sẽ là một con số nên chúng ta sẽ gỡ bỏ vô hiệu hoá nút dấu chấm để có thể tạo được số 
// thập phân.

// Thực hiện các hành động bên trong khi click vào các nút bằng
$('.box-button button.equal').on('click', function() {
    $result = $('.box-calculation').val(); // Lấy chuỗi giá trị trong ô phép tính
    $('.box-result').val(eval($result)); // Hiển thị kết quả trong ô kết quả
});
// hàm eval() trong Javascript để trả về giá trị số của một chuỗi số