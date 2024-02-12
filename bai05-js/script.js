// Cách 3: 
// var button = document.querySelector('button');
// button.onclick = function() {
//     alert('Hola!');
// }

// Khai báo biến
// var a=10;
// var b=20;
// var c=a+b;
// console.log(c)

// Quy tắc đặt tên
// var hoVaTen="Nguyễn Ngọc"

// Toán tử số học
var a=10;
var b=20;
var fullName = "Bich Ngoc";

// var c=a+b;
// console.log(c);
// Phép nối chuỗi
// var d=a+fullName;
// console.log(d);
// Kết quả: 30Bich Ngoc

// var e = b-a;
// console.log(e);

// var f=a*b;
// console.log(f);

// var g = a/b;
// console.log(g);
// // mũ **
// var i = a ** b;
// console.log(i);
// // chia lấy dư
// var k = a % b;
// console.log(k);

// Tăng a lên 1 dơn vị trứóc sau đó gán m=a
// var m = ++a;
// console.log(m);


// // Gán i = a trước sau đó mới tăng a lên 1 đơn vị
// var i = a++;
// console.log(i);

// Ví dụ 1:
// var a = 20;
// var b = a++ - a-- + --a *3
// //    = 20  - 21  + 19  *3 =56

// Ví dụ 2: 
var a = 20;
var b = --a - ++a + --a - a++ + a-- * 2
//    = 19  - 20  + 19  - 19  + 20  *2  =39
console.log(b);

// 4.1. Kiểu dữ liệu nguyên thủy - kiểu k thay đổi gtri đc
    //Kiểu number
    var a = 10; //số nguyên
    var b = 10.5; //số thực
    var c = Infinity // kiểu dương vô cung
    var d = -Infinity // kiểu âm vô cùng


    
function tinhTong(a,b,c){
    return a+b+c;
}

var x=tinhTong(10,20,30);
console.log(x);











