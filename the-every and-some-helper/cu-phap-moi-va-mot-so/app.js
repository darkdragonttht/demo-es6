//cú pháp mỗi và một vài
var names = [
    'Truong',
    'Quang',
    'Hien'
];

var th1 = names.every(function(name){
    return name.length > 5;
});
console.log(th1);

var th2 = names.some(function(name){
    return name.length > 5;
});
console.log(th2);