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