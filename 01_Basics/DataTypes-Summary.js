/*
JavaScript is a dynamically typed language. This means that you do not need to explicitly declare the data type
 of a variable when you create it. Instead, the type is automatically determined by the JavaScript engine at 
 runtime.
*/

//PRIMITIVE DATATYPES:
//They are of 7 types:
//String,Number,Boolean,null,undefined,Symbol,BigInt
//Examples:
const score=100  //Number
const scoreValue=100.3 //Number

const isLoggedIn=false  //Boolean
const outsideTemp=null  //null
let userEmail;  //undefined

const id=Symbol('123') //Symbol
const anotherId=Symbol('123')  //Symbol
console.log(id===anotherId);  //Output:false,there value might be same but they are not equal.

const bigNumber=3456543576654356754n //BigInt


//REFERENCE(NON-PRIMITIVE) DATATYPES:
//Array,Objects,Functions 
//Examples:
const heros=["IronMan","SpiderMan","ShaktiMan"] //Array

let myObj={               //Object
    name:"Umang",
    age:22
}

const myFunction=function(){   //Function
    console.log("Hello World")
}

//'typeof' of different datatypes:
console.log(typeof score);  //Number
console.log(typeof scoreValue);  //Number
console.log(typeof isLoggedIn);  //Boolean
console.log(typeof outsideTemp);  //Object
console.log(typeof userEmail);  //Undefined
console.log(typeof id);  //Symbol
console.log(typeof bigNumber);  //BigInt
console.log(typeof heros);  //Object
console.log(typeof myObj);  //Object
console.log(typeof myFunction);  //Function

//All Non-Primitive DataTypes are of 'Object' DataType and 'function' is function object.
