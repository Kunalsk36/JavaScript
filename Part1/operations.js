/* 
there can be different types of operations such as
Arithmetic operations
Assignment operation
comparison operations
logical operation
*/

// Arithmetic operation
// include +, -, *, /, %, **(exponent)
let add = 3 + 6;
let sub = 9 - 6;
let mul = 5 * 3;
let div = 10 / 2;
let remainder = 11 % 2;
let expo = 2 ** 3;

// Assignment operation:
// =, +=, -=, *=, /=;
let num = 10;
num += 20;
// the above statement in simple way we can written as 'num = num + 20';

// Comparison operation
// <,>, >=, <=, ==, ===, !=

let num1 = 20;
let num2 = 30;
let num3 = 20;
let num4 = '30';

console.log(num1>num2);
console.log(num1>=num2);
console.log(num1<num2);
console.log(num1<=num2);
console.log(num1!=num2);
console.log(num2==num4);
console.log(num2===num4);

// logical operations
// && -> logical and (both)
// || -> logical or (any one)
// ! -> logical not (reverse)

let isLoggedin = true;
let isFeePaid = false;
console.log("-------- Example for Logical operation -------");
console.log(isLoggedin && isFeePaid);
console.log(isLoggedin || isFeePaid);
console.log(!isLoggedin);
