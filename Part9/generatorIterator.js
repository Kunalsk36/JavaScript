// Example of a generator function in JavaScript
// A simple generator function that yields an infinite sequence of numbers starting from 1
function* numberGenerator(){ // Generator function - The * indicates it's a generator
    let num = 1;
    while(true){
        yield num; // Yield the current number 
        // The yield keyword pauses the function and returns the value
        // The next time the function is called, it resumes from where it left off
        // yield is a keyword used to return a value from a generator function
        num++; // Increment the number
    }
}

let gen = numberGenerator(); // Create a generator instance
let gen2 = numberGenerator(); // Create another generator instance
console.log(gen.next().value); // Output: 1 - Calling next() resumes the generator and runs until the next yield
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3
console.log(gen.next().value); // Output: 4

console.log(gen2.next().value); // Output: 1 - gen2 is a separate instance, so it starts from 1 again
console.log(gen2.next().value); // Output: 2
