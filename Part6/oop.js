// Inheritance Example
class Vehicle{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    start(){
        return 'Vehicle started';
    }
}

class Car extends Vehicle{
    drive(){
        return `Driving a ${this.make} ${this.model}. Inheritance Example.`;
    }
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar);
console.log(myCar.start());
console.log(myCar.drive());

// Encapsulation Example
class BankAccount{
    #balance = 0; // private field

    
    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
        }  
    }
    
    getBalance(){
        return `$ ${this.#balance}`;
    }
}

let myAccount = new BankAccount();
myAccount.deposit(1000);
console.log(myAccount.getBalance());


// Abstraction Example
class CoffeeMachine{
    start(){
        return "Coffee Machine Started.....";
    }

    brewCoffee(){
        return "Brewing Coffee";
    }

    makeCoffee(){
        return `${this.start()} ${this.brewCoffee()}`;
    }
}
let myCoffeeMachine = new CoffeeMachine();
console.log(myCoffeeMachine.makeCoffee());


// Polymorphism Example

class Bird{
    fly(){
        return "Flying";
    }
}
class Penguin extends Bird{
    fly(){
        return "Penguins can't fly";
    }
}

let myBird = new Bird();
console.log(myBird.fly());
let myPenguin = new Penguin();
console.log(myPenguin.fly());

class sparrow extends Bird{}
let mySparrow = new sparrow();
console.log("sparrow is "+mySparrow.fly());


// static method
class Calculator{
    static add(a, b){
        return a + b;
    }
}

let calc = new Calculator();
// console.log(calc.add(12, 2)); // This will give error

console.log(Calculator.add(12, 2)); // Correct way to call static method