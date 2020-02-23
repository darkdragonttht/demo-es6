//tìm hiểu về reduce
var numbers = [10, 20, 30];
var sum = 0;

//cách bình thường
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);


"---"

//cách dùng reduce
var th2 = numbers.reduce(function(sum, number){
    return sum + number;
}, 0);
console.log(th2);

