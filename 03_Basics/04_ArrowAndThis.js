//this keyword:
//this keyword ka use current context ko refer karne ke liye hota hai.
const user={
    username:"Umang",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this); //yeh this keyword current context ko refer kar raha hai, yaha par current context user object hai.
    }
}

user.welcomeMessage(); //Output: Umang, welcome to website
user.username="Rohit"; //Ab yaha par change isliye hua kyuki this keyword current context ko refer karta hai
user.welcomeMessage(); //Output: Rohit, welcome to website
console.log(this); //Output:{}, yaha this refer kar raha hai global context ko, aur node mei yeh empty object return karega, aur browser mei yeh window object return karega.

function chai() {
    console.log(this); //isme kaafi saari cheeze milti hai output mei, jaise ki global object, aur kaafi saari properties aur methods milti hai.Aisa kyu ki yeh function global context mei hai, aur isliye this keyword global context ko refer kar raha hai.
    let username="Umang";
    console.log(this.username); //Output: undefined, yaha par this keyword global context ko refer kar raha hai, aur global context mei username property defined nahi hai isliye undefined return hoga.
}

chai();


//Arrow Function: Syntax: () => {}
const user1 =() => {
    let username="Umang";
    console.log(username); //Output: Umang
    console.log(this); //Output: undefined, yaha par this keyword undefined return karega kyuki arrow function mei this keyword define nahi hota.
}

const addTwo= (num1,num2) => {
    return num1+num2;
}
console.log(addTwo(2,3)); //Output: 5

//We can also write it like this (known as implicit return):
const addTwo1=(num1,num2) => (num1+num2); //curlybraces hai sath mei toh return likhna padega aur nhi hai toh nhi likhna padega.
console.log(addTwo1(2,3)); //Output: 5

