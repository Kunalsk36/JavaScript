/*
1. Declare an array named "teaFlavors" that contains the strings "green tea", "black tea", and "oolong tea". 
Access the first element of the array and store it in a variable named "firstTea".
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"]
let firstTea = teaFlavors[0];
console.log(firstTea);


/*
2. Declare an array named 'cities' containing "London", "Tokyo", "Paris", and "New York".
Access the third element in the array and store it in a variable named "favoriteCity".
*/

let cities = ["London", "Tokyo", "Paris", "New York"];
let favoriteCity = cities[2];
console.log(favoriteCity);

/*
3. You have an array named 'teaTypes' containing "herbal tea", "white tea", and "masala chai".
Change the second element of the array to "jasmine tea"
*/
let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes);


/*
4. Declare an array named 'citiesVisited' contaning "mumbai" and "sydney".
Add "Berlin" to the array using the push method.
*/
let citiesVisited = ["mumbai", "sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);


/* 
5. You have an array named 'teaOrders' with "chai", "iced tea", "matcha" and "earl grey".
Remove the last element of the array using the 'pop' method and store it in a variable named 'lastOrder'.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]
teaOrders.pop();
console.log(teaOrders);

/**
 * 6. You have an array named 'popularTeas' contaning "green tea", "oolong tea", and "chai".
 * Create a soft copy of this array named 'softCopyTeas'.
 */
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas; // create the softcopy any changes made in any of these reflect to other.
console.log(popularTeas);
console.log(softCopyTeas);
popularTeas.pop();
console.log(popularTeas);
console.log(softCopyTeas);

/**
 * You have an array named 'topCities' contaning "Berlin", "Singapore", and "New York".
 * Create a hard copy of this array named "hardCopyCities".
 */
// hardcopy means changes made in any copy won't make difference in another one.
let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities]; // creates a hardcopy of topCities;
let hardCopyCities2 = topCities.slice(); // another method that creates a hardcopy of topCities.
console.log(topCities);
console.log(hardCopyCities);
console.log(hardCopyCities2);
topCities.pop()
console.log(topCities);
console.log(hardCopyCities);
console.log(hardCopyCities2);

/**
 * 8. You have two arrays: 'europeanCities' contaning "Paris" and "Rome", and "asianCities" containing "Tokyo" and "Bangkok".
 * Merge these two arrays into a new array named 'worldCities'.
 */
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities); // concate method merge two arrays.
console.log(worldCities);

/**
 * 9. You have an array named 'teaMenu' containing "masala chai", "oolong tea", "green tea", and "earl grey".
 * Find the length of the array and store it in a variable named "menuLength"
 */
let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menuLenght = teaMenu.length;
console.log(teaMenu+" length is "+menuLenght);


/**
 * 10. You have an array nemed 'cityBucketList' contaning "kyoto", "London", "cape town", and "vancover".
 * check if "london" is in the array and store the result in a variable named isLondonInList.
 */
let cityBucketList = ["kyoto", "London", "cape town", "vancover"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);
