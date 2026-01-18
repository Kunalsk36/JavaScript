function fetchPostData(){
    return new Promise((resolve, reject)=>{
        // Simulate an API call
        setTimeout(()=>{
            const postData = { id: 101, title: "Async/Await in JavaScript", content: "Async/Await makes handling Promises easier." };
            resolve(postData);
            // reject("Failed to fetch post data"); // Uncomment to test error handling 
        }, 2500);
    })
}

function fetchComments(){
    return new Promise((resolve, reject)=>{
        // Simulate an API call
        setTimeout(()=>{
            const comments = [
                { id: 1, postId: 101, content: "Great post!" },
                { id: 2, postId: 101, content: "Very informative." }
            ];
            resolve(comments);
            // reject("Failed to fetch comments"); // Uncomment to test error handling 
        }, 1500);
    })
}

// method 1: Using async/await to fetch post data and comments sequentially
/*
async function displayBlogData(){ // Async function to handle the Promise
    try{ // Try block to catch errors
        console.log("Fetching blog data....");
        
        const post = await fetchPostData();// Await the Promise resolution for post data
        console.log("Post Data:", post); // Log the fetched post data
        const comments = await fetchComments(); // Await the Promise resolution for comments
        console.log("Comments:", comments); // Log the fetched comments
    }
    catch(error){ // Catch block to handle errors
        console.log(`Error occurred: ${error}`); // Log the error message
    }
}
displayBlogData(); // Call the async function to display blog data
*/

// Method 2: Using async/await to fetch post data and comments concurrently
async function displayBlogData(){
    try{
        console.log("Fetching blog data....");
        const [post, comments] = await Promise.all([fetchPostData(), fetchComments()]); // Await both Promises concurrently
        console.log("Post Data:", post); // Log the fetched post data
        console.log("Comments:", comments); // Log the fetched comments
    }
    catch(error){
        console.log(`Error occurred: ${error}`); // Log the error message
    }
}
displayBlogData(); // Call the async function to display blog data