// 5. Một số hàm built-in
// alert("Xin chào!!")

// var result = confirm ("Bạn đã trên 18 tuổi");
// console.log(result);

// var result = prompt("Nhập n", 0);
// - Hàm in thông tin
// console.log(result);
// - Hàm in ra cảnh báo
// console.warn(result);
// - Hàm in ra lỗi
// console.error(result);

// - Hàm setTimeout: code sẽ chạy 1 lần duy nhất sau một khoảng time\
// setTimeout(function () {
//     console.log("A")
//     }, 1000);
//  - Hàm setInterval: code chạy lặp lại sau một khoảng time
// setInterval(function () {
//     console.log("B")
//     }, 1000);

// Dừng lại sau 5s
    // var b= setInterval(function() {
    //     console.log("b")
    // }, 1000);

    // setInterval(function () {
    //     clearInterval(b)
    //     }, 5000);

// 6. Typeof: cho phép trả về kiểu của một biến

// var a =10;
// var b= "Nội dung";
// var c;
// var d = null;
// var e = true;

// // number
// console.log(typeof a); 
// // string
// console.log(typeof b);
// console.log(typeof (a+b));
// // undefined: biến chưa có giá trị
// console.log(typeof c);
// // object
// console.log(typeof d);
// // boolean
// console.log(typeof e);
// //true
// console.log(typeof a == "number");



// 7.1 Length: độ dài
// vd1: trả về độ dài chuỗi
// var fullName = "Lê Văn An";
// console.log(fullName.length);


// 7.2 indexOf(): Tìm vị trí đầu tiên của một chuỗi
// - Nếu không tìm thấy sẽ trả về -1
// - Có phân biệt chữ hoa, chữ thường
// - Cú pháp
// var myString = 'Xin chào!. Tôi tên là Nam. Tôi năm nay 18 tuổi.'
// console.log(myString.indexOf('Tôi'));   // Output: 9
// console.log(myString.indexOf('Nam'));   // Output: 9
// console.log(myString.indexOf('nam'));   // Output: 9
// console.log(myString.indexOf('Tôi',11));  


// 7.3 lastIndexOf(): Tìm vị trí cuối cùng của một chuỗi nằm trong một chuôiz
// - Không thấy sẽ trả về -1
// - cú pháp: string.lastIndexOf(searchvalue, start)
// - start: vị trí bắt đầu tìm kiếm (tính từ trái qua phải) và tìm kiếm ngược lại (mặc định bắt đầu từ số 0)
// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.lastIndexOf("Tôi", 24)); // Trả về 23
// console.log(myString.lastIndexOf("Tôi", 22)); // Trả về 10
// console.log(myString.lastIndexOf("Tôi", 10)); // Trả về 10
// console.log(myString.lastIndexOf("Tôi", 9)); // Trả về -1



// 7.4 slice(): 
// - Dùng để cắt một chuỗi và trả về một chuỗi
// - chuỗi ban đầu không thay đổi
//  - cú pháp: string.slice(start,end)
//              start: vị trí bắt đầu cắt (bắt buộc)
var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
console.log(myString.slice(10, 21)); // Tôi tên Nam
console.log(myString.slice(0)); // Lấy toàn bộ chuỗi
console.log(myString.slice(0, 1)); // X (Lấy ký tự đầu tiên của chuỗi)
console.log(myString.slice(-1)); // . (Lấy ký tự cuối cùng của chuỗi)
console.log(myString); // Vẫn giữ nguyên chuỗi gốc


// 7.5 replace()
// Dùng để thay thế 1 chuỗi thành 1 chuỗi mới.
// ● Nhưng chỉ thay thế chuỗi đầu tiên mà nó tìm thấy.
// ● Cú pháp: string.replace(searchValue, newValue)
// ● Trong đó:
// ● searchValue: Từ khóa cần thay thế (bắt buộc).
// ● newValue: Từ khóa mới để thay thế (bắt buộc
var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
console.log(myString.replace("Tôi", "Mình"));
console.log(myString.replace(/Tôi/g, "Mình"));