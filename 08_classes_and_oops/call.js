// call() function-
// JavaScript mein .call() ek method hai jo kisi function ko immediately execute karta hai aur uske this ki value set karta hai.


// Username set karne ke liye function
function setUsername(username) {

    // this us object ko refer karega jo .call() se pass hua hai
    this.username = username;

    console.log("called");
}

function createUser(username, email, password) {

    // call() setUsername function ko execute karta hai
    // First argument (this) = current createUser object,yeh this 'chai' ko refer kar raha hai.
    // Second argument (username) = setUsername function ka parameter

    setUsername.call(this, username);   // this is like (chai, "newChai") ,bina 'call' ke bhi function call to hota hai par calling ke baad uska refer hold karne ke liye hum 'call' ko use karte hai.

    // Current object mein email aur password add kar rahe hain
    this.email = email;
    this.password = password;
}

// new keyword ek naya object create karega
const chai = new createUser("newChai", "chai@example.com", "123");

console.log(chai);

// Output:
// called
// createUser {
//     username: 'newChai',
//     email: 'chai@example.com',
//     password: '123'
// }
