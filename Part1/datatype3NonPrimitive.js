// Non-Primitive Datatype - Object
let username = {
    firstName : "kunal", 
    "last name" : "kavathekar",
    isLoggedin : true
};
console.log(username);
console.log(username.firstName); // kunal
console.log(username["last name"]); // kavathekar
console.log(typeof(username)); // object

// date
let date1 = new Date();
console.log(date1);

// array
let heros = ["spiderman", "batman", "ironman", "thor"];
console.log(heros);
console.log(heros[0]); // spiderman
console.log(heros[1]); // batman
console.log(heros[5]); // undefined - since it does not defined in array