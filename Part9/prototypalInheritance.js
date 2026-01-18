// In JavaScript, objects can inherit properties and methods from other objects
// This is done using prototypes
// Prototype is an object from which other objects inherit properties

// Example of Prototypal Inheritance
function Person(name){ // Constructor function
    this.name = name;
}

Person.prototype.greet = function(){ // Prototype method
    console.log(`Hello my name is ${this.name}`);
};

let kunal = new Person("KUNAL");  // Creating an instance of Person
kunal.greet(); // Output: Hello my name is KUNAL