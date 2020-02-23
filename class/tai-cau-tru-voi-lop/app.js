class Car {
    constructor({title}){
        this.tille = title;
    }
    drive(){
        return 'vroom';
    }
}

class Toyota extends Car{
    constructor(options) {
        super(options); //Car.constructor()
        this.color = options.color;
    }

    honk(){
        return 'beep';
    }
}

const car = new Car({title: 'Toyota'});
const toyota = new Toyota({color: 'red', title: 'Daily Driver'});

console.log(car.drive());
console.log(car);
console.log(toyota.honk());
console.log(toyota);
console.log(toyota.drive());