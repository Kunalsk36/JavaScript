const Person = {
    name: "Kunal",
    greet(){
        console.log(`My name is ${this.name}`);
    }
}

Person.greet(); // Output: My name is Kunal

const anotherPerson = Person.greet; // Calling the method without context
anotherPerson(); // Output: My name is undefined

const boundGreet = Person.greet.bind(Person); // Binding the method to Person object
boundGreet(); // Output: My name is Kunal

const boundGreet2 = Person.greet.bind({name: "Tanvi"}); // Binding the method to a different object
boundGreet2(); // Output: My name is Tanvi

const boundGreet3 = Person.greet.bind({}); // || Person.greet.bind(); // Binding the method to an empty object
boundGreet3(); // Output: My name is undefined // in both conditions


// bind, call, apply are used to explicitly set the 'this' context of a function
// call Example - invokes the function immediately
function introduce(city, country){
    console.log(`My name is ${this.name}, I live in ${city}, ${country}`);
}
introduce.call(Person, "Mumbai", "India"); // Output: My name is Kunal, I live in Mumbai, India

// apply Example - similar to call but takes arguments as an array
introduce.apply(Person, ["New York", "USA"]); // Output: My name is Kunal, I live in New York, USA

// bind Example
const boundIntroduce = introduce.bind(Person, "London", "UK");
boundIntroduce(); // Output: My name is Kunal, I live in London, UK