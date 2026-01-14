let computer = {cpu: 12}
let lenovo = {
    screen: "HD",
    __proto__: computer
};
let tomHardware = {};
console.log('lenovo', lenovo);
console.log('lenovo', lenovo.__proto__);

let genericCar = {
    tyres: 4
};

let tesla = {
    model: "Model 3"
};

Object.setPrototypeOf(tesla, genericCar);

console.log('tesla', tesla);
console.log('tesla prototype', Object.getPrototypeOf(tesla));
