var expense = {
    type: 'Business',
    amount: '$45 USD'
};

//bình thường
// var type = expense.type;
// var amount = expense.amount;

//ES6
const {type, amount} = expense;

console.log(type);
console.log(amount);
