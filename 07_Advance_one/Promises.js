// How to create promises-
const promiseOne = new Promise(function(resolve, reject) {

    // Do an Async task
    // DB calls, cryptography, network related

    setTimeout(function() {
        console.log("Async task is complete");

        resolve()  //Iss 'promise' ke bina niche'.then' chalega hi nhi
    }, 1000)

})

// Consuming the promises-
// '.then' ka seedha connection hai 'resolve' ke saath

promiseOne.then(function() {  // Ye function automatically ek arguement recieve karta hai jiska kaam hai upar ki valiue return karna

    console.log("Promise Consumed");

})


// Another way(2nd promise)-

new Promise(function(reslove, reject) {

    setTimeout(function() {
        console.log("Async task 2");

        reslove()  //'resolve' inform karta ai '.then' ko ki kaam ho gaya hai upar wala.
    }, 1000)

}).then(function() {
    console.log("Async 2 resolved");
})


// 3rd promise-

const promiseThree = new Promise(function(resolve, reject) {

    setTimeout(function() {

        // 'resolve' la kaam values bhi pass karna hota hai.
        resolve({username: "Umang", email: "umang@example.com"})

    }, 1000)

})

// Calling of resolve method-

promiseThree.then(function(user) {

    console.log(user); //Ab 'user' mei resolve ka data/parameter aa gaya hai.

})


// 4th promise-

const promiseFour = new Promise(function(resolve, reject) {

    setTimeout(function() {

        let error = true

        if(!error) {
            resolve({username: "Ujjwal", password: "1234"})
        }
        else {
            reject('ERROR: Something went wrong')
        }

    }, 1000)

})


// Use of '.then' in chain-

promiseFour
.then((user) => {
    console.log(user);

    // Return ki hui value next .then() mein jaati hai
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error) {
    console.log(error);
})
.finally(() => {

    // Ye resolve aur reject dono cases mein execute hota hai
    console.log("The promise is either resolved or rejected");

})


// 5th promise-

const promiseFive = new Promise(function(resolve, reject) {

    setTimeout(function() {

        const error = true

        if(!error) {
            resolve({username: "JavaScript", password: "123"})
        }
        else {
            reject('Error: JS went wrong')
        }

    }, 1000)

})


// Consuming of promise using async/await-

async function consumePromiseFive() {

    try {

        // await Promise ke resolve hone ka wait karta hai
        const response = await promiseFive

        console.log(response);

    }
    catch (error) {

        // Promise reject hone par error yahan aayega
        console.log(error);

    }

}

consumePromiseFive()


// Fetch API using async/await-

// async function getAllUsers() {

//     try {

//         // API se data fetch kar rahe hain
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         // Response ko JSON format mein convert kar rahe hain
//         const data = await response.json()

//         console.log(data);

//     } 
//     catch (error) {
//         console.log("E: ", error);  
//     }

// }

// getAllUsers()


// The above work using then and catch-

fetch('https://jsonplaceholder.typicode.com/users')

.then((response) => {

    // API response ko JSON mein convert karta hai
    return response.json()

})
.then((data) => {

    // Converted data yahan receive hoga
    console.log(data);

})
.catch((error) => console.log(error))