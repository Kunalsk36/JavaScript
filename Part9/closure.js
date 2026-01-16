// Example of a closure in JavaScript
// A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.
// In simple words, a closure allows a function to remember the environment in which it was created.
function outer() { // Outer function
    let count = 3;
    return function inner(){ // Inner function (closure)
        count++;
        return count;
    }
}

let increment = outer(); // Create a closure
console.log(increment()); // Output: 4
console.log(increment()); // Output: 5
console.log(increment()); // Output: 6