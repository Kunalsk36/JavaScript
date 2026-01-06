/**
 * 1. Write a for loop that loop through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai".
 * Store all teas before "chai" in a new array named "selectedTeas".
 */

let arr1 = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for(let i = 0; i < arr1.length; i++){
    if(arr1[i] == "chai"){
        break;
    }
    selectedTeas.push(arr1[i]);
}
// console.log(selectedTeas);

/**
 * 2. Write a for loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris".
 * Store the other cities in a new array named 'visitedCities.
 */

let arr2 = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for(let j = 0; j < arr2.length; j++){
    if(arr2[j] === "Paris"){
        continue;
    }
    visitedCities.push(arr2[j]);
}
// console.log(visitedCities);


/**
 * 3. Use a for-of loop to iterate through the array [1,2,3,4,5] and stop when the number '4' is found
 * Store the numbers before 4 in an array named smallNumbers.
 */
let arr3 = [1,2,3,4,5];
let smallNumbers = [];
for (const element of arr3) {
    if(element===4){
        break;
    }
    smallNumbers.push(element);
}
// console.log(smallNumbers);

/**
 * 4. Use a for-of loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea".
 * Store the other teas in an array named preferredTeas.
 */
let arr4 = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (const element of arr4) {
    if(element === "herbal tea"){
        continue;
    }
    preferredTeas.push(element);
}
// console.log(preferredTeas);


/**
 * 5. Use a for-in loop to loop through an object containing city populations.
 * Stop the loop when the population of "Berlin" is found and store all previous cities population in a new object named 'cityPopulations'.
 * 
 */
let citiesPopulation = {
    "London" : 890000,
    "New York" : 840000,
    "Paris" : 2200000,
    "Berlin" : 350000  
};
let cityPopulations = {};
for (const key in citiesPopulation) {
    if(key === "Berlin"){
        break;
    }
    cityPopulations[key] = citiesPopulation[key]
}
// console.log(citiesPopulation);
// console.log(cityPopulations);


/**
 * 6. Use a for-in loop to loop through an object containing city populations.
 * Skip any city with a population below 3 million and store the rest in new object named largeCities.
 */

let worldCities = {
    "Sydney" : 5000000,
    "Tokyo" : 9000000,
    "Berlin" : 3500000,
    "Paris" : 2200000
};
let largeCities = {};
for (const key in worldCities) {
    if(worldCities[key] < 3000000){
        continue;
    }
    largeCities[key] = worldCities[key];
}
console.log(largeCities);


/**
 * 7. Write a for-of loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"].
 * Stop the loop when "chai" is found, and store all previous tea types in an array named availableTeas.
 */

let arr5 = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
for (const city of arr5) {
    if(city === "chai"){
        break;
    }
    availableTeas.push(city);    
}
console.log(availableTeas);


/**
 * 8. Write a forEach loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"].
 * Skip "Sydney" and store the other cities in a new array named 'traveledCities'.
 */

let arr6 = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];
arr6.forEach(city => {
    if(city === "Sydney"){
        return;
    }
    traveledCities.push(city);
});
console.log(traveledCities);


/**
 * 9. Write a for loop that iterates through the array [2, 5, 7, 9].
 * Skip the value 7 and multiply the rest by 2. 
 * Store teh results in a new array named 'doubledNumbers'.
 */

let numbers = [2, 5, 7, 9];
let doubledNumbers = [];
for(let k = 0; k < numbers.length; k++){
    if(numbers[k] == 7){
        continue;
    }
    doubledNumbers.push(numbers[k]*2);
}
console.log(doubledNumbers);


/**
 * 10. Use a for-of loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"] and stop when the length of the current tea name is greater than 10. 
 * Store the teas iterated over in an array named 'shortTeas.
 */

let teaTypes = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const tea of teaTypes) {
    if(tea.length > 10){
        break;
    }
    shortTeas.push(tea);
}
console.log(shortTeas);
