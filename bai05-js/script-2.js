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
// var fullNgoce = "Lê Văn An";
// console.log(fullNgoce.length);


// 7.2 indexOf(): Tìm vị trí đầu tiên của một chuỗi
// - Nếu không tìm thấy sẽ trả về -1
// - Có phân biệt chữ hoa, chữ thường
// - Cú pháp
// var myString = 'Xin chào!. Tôi tên là Ngoc. Tôi năm nay 18 tuổi.'
// console.log(myString.indexOf('Tôi'));   // Output: 9
// console.log(myString.indexOf('Ngoc'));   // Output: 9
// console.log(myString.indexOf('Ngoc'));   // Output: 9
// console.log(myString.indexOf('Tôi',11));  


// 7.3 lastIndexOf(): Tìm vị trí cuối cùng của một chuỗi nằm trong một chuôiz
// - Không thấy sẽ trả về -1
// - cú pháp: string.lastIndexOf(searchvalue, start)
// - start: vị trí bắt đầu tìm kiếm (tính từ trái qua phải) và tìm kiếm ngược lại (mặc định bắt đầu từ số 0)
// var myString = `Xin chào! Tôi tên Ngoc. Tôi năm nay 18 tuổi.`;
// console.log(myString.lastIndexOf("Tôi", 24)); // Trả về 23
// console.log(myString.lastIndexOf("Tôi", 22)); // Trả về 10
// console.log(myString.lastIndexOf("Tôi", 10)); // Trả về 10
// console.log(myString.lastIndexOf("Tôi", 9)); // Trả về -1



// 7.4 slice(): 
// - Dùng để cắt một chuỗi và trả về một chuỗi
// - chuỗi ban đầu không thay đổi
//  - cú pháp: string.slice(start,end)
//              start: vị trí bắt đầu cắt (bắt buộc)
// var myString = `Xin chào! Tôi tên Ngoc. Tôi năm nay 18 tuổi.`;
// console.log(myString.slice(10, 21)); // Tôi tên Ngoc
// console.log(myString.slice(0)); // Lấy toàn bộ chuỗi
// console.log(myString.slice(0, 1)); // X (Lấy ký tự đầu tiên của chuỗi)
// console.log(myString.slice(-1)); // . (Lấy ký tự cuối cùng của chuỗi)
// console.log(myString); // Vẫn giữ nguyên chuỗi gốc


// 7.5 replace()
// Dùng để thay thế 1 chuỗi thành 1 chuỗi mới.
// ● Nhưng chỉ thay thế chuỗi đầu tiên mà nó tìm thấy.
// ● Cú pháp: string.replace(searchValue, newValue)
// ● Trong đó:
// ● searchValue: Từ khóa cần thay thế (bắt buộc).
// ● newValue: Từ khóa mới để thay thế (bắt buộc
// var myString = `Xin chào! Tôi tên Ngoc. Tôi năm nay 18 tuổi.`;
// console.log(myString.replace("Tôi", "Mình"));
// console.log(myString.replace(/Tôi/g, "Mình"));


// * Regex -là các mẫu (pattern) thay vì các chuỗi cụ thể được sử dụng tìm/thay thế (Find/Replace). Là một công cụ cực mạnh cho xử lí chuỗi trong Php, javascript… 
// var regexConst = new RegExp("abc");



// 7.6 toUpperCase() - Viết hoa tất cả và toLowerCase() - viết thường 
// var myString = `Xin chào! Tôi tên Ngoc. Tôi năm nay 18 tuổi.`;
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase())


// 7.7 trim( )- Loại bỏ khoảng trắng ở đầu và cuối chuỗi (chỉ loại bỏ ở 2 đầu)
// var myString = ` Xin chào! Tôi tên Ngoc. Tôi năm nay 18 tuổi. `;
// console.log(myString);
// console.log(myString.trim())


// 7.8 chartAt(index) - lấy ký tự theo index
// var myString = `Nguyen Ngoc`;
// console.log(myString.charAt()); // Lấy ký tự đầu tiên
// console.log(myString.charAt(0)); // Lấy ký tự đầu tiên
// console.log(myString.charAt(1)); // Lấy ký tự thứ 2
// console.log(myString.charAt(myString.length - 1)); // Lấy ký tự cuối cùng


// 7.9 split() - chuyển một chuỗi thành một array
// var myString = 'Ngoc, cat, meo';
// // Tra ve ca chuoi
// console.log(myString.split());
// // Tra ve cac phan tu cach nhau boi dau ,
// console.log(myString.split(','));
// //Tra ve cac phan tu cach nhau boi dau , bat dau tu vi tri 2
// console.log(myString.split(',',2));

//Nang cao - Xoa khoang trang va chuyen thanh chuoi - sd regex trim whiteplace 
// var myString = 'Ngoc, cat, meo';
// myString = myString.replace(/^\s+\S+|\S+\s+$/g,'');
// console.log(myString.split(','));


// 8. Lam viec voi number

// 8.1. isNaN()
    // ● Dùng để kiểm tra một biến có phải là NaN không.
    // ● NaN: là viết tắt của Not a Number.
    // ● Cú pháp: isNaN(tenBien)
    // ● Ví dụ:

// var a = 10;
// var b= 10;
// var result = a/b;

// if (typeof result == "number") {
//     console.log("Day la so" + result)
// }

// console.log(isNaN(result));// tra ve true
// if (isNaN(result)){
//     console.log("So nay bi loi");
// } else {
//     console.log("Day la so" + result);
// }


// 8.2. toString() - kieu so thanh kieu string
// var a = 10;
// var b = a.toString();
// var c = (10).toString();
// console.log(a); // Trả về số 10
// console.log(typeof a); // Trả về kiểu number
// console.log(b); // Trả về chuỗi 10
// console.log(typeof b); // Trả về kiểu string
// console.log(c); // Trả về chuỗi 10
// console.log(typeof c); // Trả về kiểu string

// 8.3. toFixed() - Dung de lm tron so thap phan (>=5 thi tron len; <5 lm tron xuong)
// var a = 12.3456;
// console.log(a.toFixed()); // Trả về 12
// console.log(a.toFixed(0)); // Trả về 12
// console.log(a.toFixed(1)); // Trả về 12.3
// console.log(a.toFixed(2)); // Trả về 12.35
// console.log(a.toFixed(3)); // Trả về 12.346


// 9. Lam viec voi Array - mang

// 9.1. toString() - chuyen array thanh string; tu dong cach nhau boi dau,
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.toString());
// // Trả về: "HTML5,CSS3,Javascript"

// 9.2. join()
// ● Chuyển array thành string.
// ● Thêm dấu bất kỳ để ngăn cách giữa các phần tử.
// ● Cú pháp: array.join(separator)
// ● Trong đó:
// ● separator (dải phân cách) là dấu ngăn cách để thêm vào string. Mặc định là dấu phẩy
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.join()); // Trả về: "HTML5,CSS3,Javascript"
// console.log(list.join(",")); // Trả về: "HTML5,CSS3,Javascript"
// console.log(list.join("")); // Trả về: "HTML5CSS3Javascript"
// console.log(list.join(", ")); // Trả về: "HTML5, CSS3, Javascript"
// console.log(list.join(" - ")); // Trả về: "HTML5 - CSS3 - Javascript"
// console.log(list.join(" test ")); // Trả về: "HTML5 test CSS3 test Javascript"


// 9.3. pop()
// ● Dùng để xóa phần từ cuối mảng.
// ● Trả về phần tử cuối mảng.
// ● Cú pháp: array.pop()
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.pop()); // Trả về: "Javascript"
// console.log(list); // Trả về: ["HTML5", "CSS3"]


// 9.4. push()
// ● Thêm một hoặc nhiều phần tử vào cuối mảng.
// ● Trả về độ dài mới của mảng.
// ● Cú pháp: array.push(item1, item2, ..., itemX)
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.push("Bootstrap 4", "ReactJS")); // Trả về: 5
// console.log(list);
// // Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]


// 9.5. shift()
// ● Dùng để xóa phần tử đầu mảng.
// ● Trả về phần tử ở đầu mảng.
// ● Cú pháp: array.shift()
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.shift()); // Trả về: "HTML5"
// console.log(list); // Trả về: ["CSS3", "Javascript"]


// 9.6. unshift()
// ● Thêm một hoặc nhiều phần tử vào đầu mảng.
// ● Trả về độ dài mới của mảng.
// ● Cú pháp: array. unshift(item1, item2, ..., itemX)
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.unshift("Bootstrap 4", "ReactJS")); // Trả về: 5
// console.log(list);
// // Trả về: ["Bootstrap 4", "ReactJS", "HTML5", "CSS3", "Javascript"]


// 9.7. splice()
// ● Xóa hoặc chèn phần tử mới vào mảng.
// ● Trả về mảng bị xóa.
// ● Cú pháp: array.splice(index, howmany, item1, ....., itemX)
    // ● index: Vị trí thêm/xóa phần tử (bắt buộc).
    // ● howmany: Số phần tử cần xóa (không bắt buộc).
    // ● item1, ..., itemX: Các phần tử mới được thêm vào (không bắt buộc).

// Vi du 1: chen phan tu vao mang
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.splice(2, 0, "Bootstrap 4", "ReactJS")); // Trả về: []
// console.log(list);
// // Trả về: ["HTML5", "CSS3", "Bootstrap 4", "ReactJS", "Javascript"]


// Vi du 2: Xoa phan tu
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.splice(1, 1)); // Trả về: ["CSS3"]
// console.log(list); // Trả về: ["HTML5", "Javascript"]

// vi du 3: Vua chen vua xoa phan tu vao mang
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.splice(2, 1, "Bootstrap 4", "ReactJS"));
// // Trả về: ["Javascript"]
// console.log(list);
// // Trả về: ["HTML5", "CSS3", "Bootstrap 4", "ReactJS"]


// 9.8. concat() Dùng để nối 2 array
// - Cu phap: array1.concat(array2, array3, ..., arrayX)

// var list = ["HTML5", "CSS3", "Javascript"];
// var list2 = ["Bootstrap 4", "ReactJS"];
// console.log(list.concat(list2));
// // Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
// console.log(list);
// // Trả về: ["HTML5", "CSS3", "Javascript"]


// 9.9. slice()
// ● Dùng để cắt các phần tử.
// ● Không làm ảnh hưởng đến mảng ban đầu.
// ● Cú pháp: array.slice(start, end)
// ● Trong đó:
// ● start: Vị trí bắt đầu. Mặc định là 0. (không bắt buộc).
// ● end: Vị trí kết thúc. Mặc định là phần tử cuối cùng. (không bắt buộc)
// var list = ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"];
// console.log(list.slice(3)); // Trả về: ["Bootstrap 4", "ReactJS"]
// console.log(list.slice(1, 3)); // Trả về: ["CSS3", "Javascript"]
// console.log(list.slice(-3, -1)); // Trả về: ["Javascript", "Bootstrap 4"]
// console.log(list);
// // Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
