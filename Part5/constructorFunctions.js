// Constructor Functions
function Person(name, age) {
    this.name = name;
    this.age = age;
};

function Car(make, model, year) {  
    this.make = make;
    this.model = model;
    this.year = year;
};

let person1 = new Person("Alice", 30);
let car1 = new Car("Toyota", "Corolla", 2020);
let car2 = new Car("Honda", "Civic", 2019);
console.log('person1', person1);
console.log('car1', car1);
console.log('car2', car2);

// Challenge: Create a Constructor Function for Tea
function Tea(type){
    this.type = type;
    this.describe = function(){
        return `This tea is of type: ${this.type}`;
    }
}

let tea1 = new Tea("Green");
console.log(tea1);
console.log(tea1.describe());

// Adding Methods to Constructor Functions via Prototype
function Animal(species){
    this.species = species;
};

Animal.prototype.sound = function(){
    return `${this.species} makes a sound.`;
}
let dog = new Animal("Dog");
console.log(dog);
console.log(dog.sound());

// Enforcing 'new' with Constructor Functions
function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with 'new'");
    }
    this.name = name;
}

let drink1 = new Drink("Coffee");
console.log(drink1);
// let drint2 = Drink("Tea"); // This will throw an error