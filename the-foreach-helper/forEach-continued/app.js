//tạo một mảng các chữ số
var numbers = [1,2,3,4,5,6];

//tạo một biến để giữ tổng
var sum = 0;

/*
 * th1
 */
// numbers.forEach(function (number){
//    sum += number;
// });

//th2
function adder(number) {
    sum += number;
}

numbers.forEach(adder);

console.log(sum);

//foreach thường dùng trong lựa chọn