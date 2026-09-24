"use strict"; //Treat all JS code as newer version of JS.

/*
  alert(3+3) --> ye ek function hai jisko hum browser me output print karne ke liye use karte hai.But ye 
  function sirf browser me hi kaam karta hai, Node.js me nahi.
*/

console.log(3
    + 3)  // Aise code ki readabiltiy achi nhi hoti hai,so code readability should be good.

console.log("Uamng")


//DATATYPES:(Primitive data types)
//Examples:
let name="Umang"  //String data type

let age=21  //Number data type

let isLoggedIn=true  //Boolean data type

//number -> range -2^53 to 2^53
//string -> "" or '' or ``
//boolean -> true or false
//null -> null,it is standalone value
//undefined -> undefined,which means variable is declared but not assigned any value.
/*Example: let name="", it will give me null value as there is no value in the double quotes. 
         But let name; it will give me undefined value as there is no value assigned till now.
*/         
//symbol ->Used to create unique identifiers for objects.


//Examples for different data types:
let city;                        // Undefined

let account = null;              // Null

let bigNumber = 123456789n;      // BigInt

let id = Symbol("id");           // Symbol


//'typeof' is used to check the data type of a variable or value.
console.log(typeof "Umang")  //Output: string
console.log(typeof age)  //Output: number
console.log(typeof null)  //Output: object ,'null' is a tpye of object because of a bug in JavaScript which is 
                          //not fixed till now.
console.log(typeof undefined)  //Output: undefined ,'undefined' is a datatype.
