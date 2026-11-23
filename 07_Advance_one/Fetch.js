// Fetch API ka use server se data receive karne ke liye hota hai
// fetch() ek Promise return karta hai

fetch('https://jsonplaceholder.typicode.com/users')

// Server se response receive hone par .then() execute hota hai
.then((response) => {

    // response mein server ka response object aata hai
    // .json() response body ko JavaScript object/array mein convert karta hai
    // .json() bhi ek Promise return karta hai

    return response.json()

})

// Upar wale .then() se converted data yahan receive hota hai
.then((data) => {

    // API se mila hua complete users data print hoga
    console.log(data);

})

// Agar network request fail hoti hai ya JSON parsing mein error aata hai
// Toh .catch() execute hota hai
.catch((error) => {

    console.log(error);

})