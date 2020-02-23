function Car(options) {
    this.title = options.title;
}

function Toyota(options){
    Car.call(this, options);
    this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota; //tính kế thừa

Toyota.prototype.honk = function () {
    return 'beep';
};

Car.prototype.driver = function () {
    return 'vroom';
};

const car = new Car({title: 'Focus'});
const toyota = new Toyota({color: 'eed', title:'Daily Driver'});
console.log(car);
console.log(car.driver());
console.log(toyota);
console.log(toyota.driver());
console.log(toyota.honk());