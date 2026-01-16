// This code demonstrates asynchronous behavior using setTimeout in JavaScript.
function sayHello(name) {
  console.log("Hello, " + name + "!");
}
console.log("1");

sayHello("Kunal");

setTimeout(()=>{
    console.log("2");
    sayHello("Nikhil");
}, 2000);

console.log("3");
sayHello("Tanvi");