// check if both strings are same or not:
let str1 = "kunal";
let str2 = "kunal";
if(str1 == str2){
    console.log("Both Strings are same!");
}
else{
    console.log("Both Strings are Not same!");
}


// check if variable is number or not
let numVar = 36;
if(typeof(numVar)==='number'){
    console.log("it is a number!");
}
else{
    console.log("it is not a number");
    
}

let strVar = "kunal";
if(typeof(strVar)==='number'){
    console.log("it is a number!");
}
else{
    console.log("it is not a number");   
}


// check if boolean value is true or not:
let isActive = true;
if(isActive){
    console.log("it is active");
}
else{
    console.log("it is not active");
}

if(!isActive){
    console.log("it is active");
}
else{
    console.log("it is not active");
}


// check if array is empty or not
let items = [];
if(items.length === 0){
    console.log("array is empty.");
}
else{
    console.log("array is not empty.");
}

let items2 = [3,1,6];
if(items2.length === 0){
    console.log("array is empty.");
}
else{
    console.log("array is not empty.");
}