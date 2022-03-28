// hàm kiểm tra số nguyên tố
function kiem_tra_snt(n)
{
    // Biến cờ hiệu
    var snt = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2) {
        snt = false;
    }
    else if (n == 2) {
        snt = true;
    }
    else if (n % 2 == 0) {
        snt = false;
    }
    else {
        for (var i = 3; i <= Math.sqrt(n); i += 1)
        {
            if (n % i == 0) {
                snt = false;
                break;
            }
        }
    }
 
    return snt;
}
 
// In các số nguyên tố từ 1 tới n
function print_snt()
{
    // Lấy number
    var number = document.getElementById("number").value;
 
    number = parseInt(number);

    var ketQua = '';
    for (var i = 1; i <= number; i++) {
        // Nếu là số nguyên tố thì in ra
        if (kiem_tra_snt(i)){
            ketQua += i + " ";
        }
    }
    document.getElementById("xuatSoNguyenTo").innerHTML = ketQua;
}