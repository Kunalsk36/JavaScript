function fetchUserData(){
    return new Promise((resolve, reject) => {
        // Simulate an API call
        setTimeout(() => {
            const userData = { id: 1, name: "Kunal", email: "kunal@example.com" };
            resolve(userData);
            // reject("Failed to fetch user data"); // Uncomment to test error handling 
        }, 2000);
    });
}

async function displayUserData(){ // Async function to handle the Promise
    try{ // Try block to catch errors
        const data = await fetchUserData();// Await the Promise resolution
        console.log("User Data:", data); // Log the fetched user data
    }
    catch(error){ // Catch block to handle errors
        console.log(`Error occured: ${error}`); // Log the error message
    }
}

displayUserData(); // Call the async function to display user data