/**
 * 1. Write a function named 'makeTea' that  takes one parameter, 'typeOfTea', and returns a string like `"Making green tea"` when called with "green tea".
 * Store the result in a variable named 'teaOrder'.
 */
function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("green tea");
// console.log(teaOrder);
// or we can do print by following also:
// console.log(makeTea("green tea"));

/**
 * 2. Create a function named 'orderTea' that takes one parameter, 'teaType'. Inside this function, create another function named 'confirmOrder' that returns a message like "Order confirmed for teaType".
 * Call 'confirmOrder' from within 'orderTea' and return the result.
 */
function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}`;
  }
  let result = confirmOrder();
  return result;
}
// console.log(orderTea("oolong tea"));

/**
 * 3. Write an arrow function named calculateTotal that takes two parameters: 'price' and 'quantity'. The function should return the total cost by multiplying the price and quantity.
 * Store the result in a varialbe named 'totalCost'.
 */
const calculateTotal = (price, quantity) => {
  return price * quantity;
};
let totalCost = calculateTotal(30, 10);
// console.log(totalCost);

/**
 * 4. Write a function named processTeaOrder that takes another function, makeTea, as a parameter and calls it with the argument 'earl grey'.
 * Return the result of calling makeTea.
 */
// higher order function: - function calls a function
function makeTea(typeOfTea) {
  return `makeTea: ${typeOfTea}`;
}

function processTeaOrder(anotherFunction) {
  return anotherFunction("earl grey");
}

let order = processTeaOrder(makeTea);
// console.log(order);

/**
 * 5. Write a function named 'createTeaMaker' that returns another function. The returned function should take one parameter, 'teaType' and return a message like "making green tea".
 * Store the returned function in a variable named 'teaMaker' and call it with "green tea".
 */
function createTeaMaker() {
  return function anotherFunction(teaType) {
    return `Making ${teaType}`;
  };
}
let teaMaker = createTeaMaker();
let result = teaMaker("green tea");
// console.log(result);

/**
 * Question 6: Processing a Batch (Callback Pattern)
Task:
Write a function named processTeaBatch that takes two parameters:
teas: an array of tea names (e.g., ["green tea", "chai", "oolong"]).
action: a function that will process a single tea name.
Inside processTeaBatch, create a new empty array. Loop through the teas array, call the action function for every tea, and push the result into the new array.
Return the new array.
 */
let teas = ["green tea", "chai", "oolong"];
function action(el) {
  return el;
}
function processTeaBatch(teas, action) {
  let arr = [];
  teas.forEach((tea) => {
    let result = action(tea);
    arr.push(result);
  });

  return arr;
}
let result6 = processTeaBatch(teas, action);
// console.log(result6);

/**
 * Question 7: The "Tea Maker" Factory (Closure Pattern)
Task:
Write a function named createOrderType that takes one parameter, baseTea (e.g., "Green Tea").
It should return another function.
The returned function should take one parameter, topping (e.g., "Tapioca Pearls").
When called, the returned function should return a combined string: "Ordering [baseTea] with [topping]".
 */

function createOrderType(baseTea) {
  return function (topping) {
    return `Ordering ${baseTea} with ${topping}`;
  };
}

let greenTeaMaker = createOrderType("Green Tea");
console.log(greenTeaMaker("Tapioca Pearls"));