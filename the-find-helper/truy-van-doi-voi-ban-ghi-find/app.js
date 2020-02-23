//truy vấn bản ghi find
var users = [
    {name: 'Jinn'},
    {name: 'Alex', id: 4}, //trường hợp có 2 bản ghi trùng nhau, nó chỉ nhận 1 và nhận đối tượng nó gặp đầu tiên
    {name: 'Bill'},
    {name: 'Alex'}
];

var hi = users.find(function (user) {
    return user.name === 'Alex';
});

console.log(hi);