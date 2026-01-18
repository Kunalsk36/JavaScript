// functions for basic math operations
function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

// exporting the functions as a CommonJS module
module.exports = {
    add,
    subtract,
    multiply
};

// or alternatively you can export like this:
// exports.add = add; // exporting add function
// exports.subtract = subtract; // exporting subtract function
// exports.multiply = multiply; // exporting multiply function