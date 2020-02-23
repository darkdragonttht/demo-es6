var cars = [
    { model: 'Buick', price: 'CHEAP' },
    { model: 'Camaro', price: 'expensive' }
];

var prices = cars.map(function (car) {
    return car.price;
});

console.log(prices);
//map dùng vào trong những trường hợp update lại dữ liệu