// Example of creating and using a Promise in JavaScript
// Promise is used to handle asynchronous operations
// Promise can be in one of three states: pending, fulfilled, or rejected

function fetchData() { // this function simulates fetching data asynchronously
    return new Promise((response, reject) => {
        setTimeout(() => {
            let data = { name: "John", age: 30 };
            let success = true; // Change to false to test rejection
            if (success) {
                response(data);
            }
            else {
                reject("Error: Unable to fetch data");
            }
        }, 3000);
    });
}

let dataPromise = fetchData(); // Create a Promise
console.log(dataPromise); // Output: Promise { <pending> }
dataPromise // Handle the Promise
    .then((data) => { // called when the Promise is fulfilled
        console.log(`Data fetch successfully!`);
        return JSON.stringify(data); // Convert data to string
    })
    .then((strData) => { // chaining another then to handle the stringified data
        console.log(`Stringified Data: ${strData}`);
    })
    .catch((err) => { // called when the Promise is rejected
        console.log(err);
    });
