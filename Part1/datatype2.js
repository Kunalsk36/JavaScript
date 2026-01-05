/*
Datatypes can be divided into :

1) Primitive - String, number, boolean, null, undefined, symbol
2) Non-Primitive - Object -> (can be further divided into) arrays, functions, objects, etc.

*/

let number = 30;
console.log(number); //30
console.log(typeof(number)); //number

let number2 = new Number(40);
console.log(number2); // [Number: 40]
console.log(number2.valueOf()); //40
console.log(typeof(number2)); //object

// null and undefined
let firstName = null;
let middleName;
let lastName = undefined;

console.log(firstName); //null
console.log(middleName); // undefined
console.log(lastName); // undefined

// String
// we can define string by
let str1 = "Kunal";
let str2 = 'Shrikant';
let str3 = `Kavathekar`
let strGreet1 = `Hello ${str1} ${str2} ${str3}!`; // method 1
let strGreet2 = "Hello "+ str1 + " " + str2 + " " + str3 + "!"; // method 2
console.log(strGreet1);
console.log(strGreet2);

// Symbol -> Symbol guaranteed to be unique.
// It will generate unique value each time at backend.
const sm1 = Symbol();
let sm2 = Symbol();
let sm3 = Symbol("kunal");
let sm4 = Symbol("kunal");
console.log(sm1); // Symbol()
console.log(sm2); // Symbol()
console.log(sm3); // Symbol(kunal)
console.log(sm4); // Symbol(kunal)
console.log(sm1 == sm2); // false
console.log(sm3 == sm4); // false
// const sm5 = new Symbol(); // this will throw new error TypeError: Symbol is not a constructor
// console.log(sm5);