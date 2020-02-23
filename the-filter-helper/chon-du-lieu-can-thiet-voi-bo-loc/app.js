//chọn dữ liệu cần thiết với bộ lọc
var products = [
    { name: 'cucumber', type: 'vegetable' },
    { name: 'banana', type: 'fruit' },
    { name: 'celery', type: 'vegetable' },
    { name: 'orange', type: 'fruit' }
];

var filterProducts = [];

for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filterProducts.push(products[i]);
    }
}

console.log(filterProducts);

//bộ lọc với type === fruit
var fruit = products.filter(function (product){
    return product.type === 'fruit';
});
console.log(fruit);

//bộ lọc với type === vegetable
var vegetable = products.filter(function (production){
    if (production.type === 'vegetable') {
        return true;
    }
});
console.log(vegetable);