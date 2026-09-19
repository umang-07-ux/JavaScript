let score=33
console.log(typeof score)  //Output: number
console.log(typeof (score)) //Output: number
/*
  Difference between 'score' and '(score)' is 'score' ek variable hai jiska data type number hai,aur '(score)' 
  ek expression hai jiska data type bhi number hi hai.

  '(score)' ko hum ek expression isliye bolte hai kyuki ye ek value return karta hai,aur 'score' ko hum 
   variable isliye bolte hai kyuki ye ek value store karta hai.
 */


//CONVERSION OF DIFFERENT DATA TYPES TO NUMBER DATA TYPE:
let score1="33"
console.log(typeof score1)  //Output: string

let valueInNumber=Number(score1) //Number() is a function which converts string to number.
console.log(typeof valueInNumber)  //Output: number
console.log(valueInNumber)  //Output: 33

//But if we try to convert a string which is not a number,then it will give us NaN(Not a Number).
//So always make sure that the string you are trying to convert to number is a valid number.
let score2="123Umang"
console.log(typeof score2)  //Output: string
let valueInNumber1=Number(score2) //Number() is a function which converts string to number.
console.log(typeof valueInNumber1)  //Output: number
console.log(valueInNumber1)  //Output: NaN

//If we convert null to number,then it will give us 0.
let score3=null
console.log(typeof score3)  //Output: object
let valueInNumber2=Number(score3) //Number() is a function which converts null to number.
console.log(typeof valueInNumber2)  //Output: number
console.log(valueInNumber2)  //Output: 0

//If we convert undefined to number,then it will give us NaN.
let score4=undefined
console.log(typeof score4)  //Output: undefined
let valueInNumber3=Number(score4) //Number() is a function which converts undefined to number.
console.log(typeof valueInNumber3)  //Output: number
console.log(valueInNumber3)  //Output: NaN

//For boolean value,true ke liye 1 aur false ke liye 0 return karega.
let score5=true
console.log(typeof score5)  //Output: boolean
let valueInNumber4=Number(score5) //Number() is a function which converts boolean to number.
console.log(typeof valueInNumber4)  //Output: number
console.log(valueInNumber4)  //Output: 1

//Similarly hum sab data types ko dusre data types mei convert kar sakte hai.

//Like Conversion to boolean data type:
let isLoggedIn=1
let isBooleanLoggedIn=Boolean(isLoggedIn) //Boolean() is a function which converts number to boolean.
console.log(typeof isBooleanLoggedIn)  //Output: boolean
console.log(isBooleanLoggedIn)  //Output: true

let isLoggedIn1=""
let isBooleanLoggedIn1=Boolean(isLoggedIn1) //Boolean() is a function which converts string to boolean.
console.log(typeof isBooleanLoggedIn1)  //Output: boolean
console.log(isBooleanLoggedIn1)  //Output: false
//1 -> true
//0 -> false
//"" -> false
//"Umang" -> true

//Like Conversion to string data type:
let someNumber=33
let stringNumber=String(someNumber) //String() is a function which converts number to string.
console.log(typeof stringNumber)  //Output: string
console.log(stringNumber)  //Output: "33"


//************************************ OPERATIONS  ******************************************** 
let value=3
let negValue=-value
console.log(negValue)  //Output: -3

// console.log(3+2)  //Output: 5
// console.log(3-2)  //Output: 1
// console.log(2*3)  //Output: 6
// console.log(2**4)  //Output: 16
// console.log(3/2)  //Output: 1.5
// console.log(9%5)  //Output: 4

let str1="Hello"
let str2=" Umang"
let str3=str1+str2
console.log(str3)  //Output: Hello Umang

// console.log("1"+2)  //Output: 12
// console.log(1+"2")  //Output: 12
// console.log("1"+2+2) //Output: 122
// console.log(1+2+"2")  //Output: 32

// These are some type of tricky conversions,but we should always avoid these type of conversions.
// console.log(+true)  //Output: 1
// console.log(+"")  //Output: 0

// Always use paranthesis for these type of conversions so that it should be clear which operation has 
// to be perfromed first.
console.log((3+4)*(5%3)) //Output: 2

// We can also assign the same value to multiple variables in a single line.But we should avoid this type 
// of assignment because it is not a good practice.
let num1,num2,num3
num1=num2=num3=2+2

//Prefix and Postfix Increment and Decrement Operators:
let gameCounter=100
gameCounter++  //Increment by 1 , but it will return the value before incrementing.
console.log(gameCounter)  //Output: 101 
++gameCounter  //Increment by 1 , but it will return the value after incrementing.
console.log(gameCounter)  //Output: 102
--gameCounter  //Decrement by 1 , but it will return the value before decrementing.
console.log(gameCounter)  //Output: 101
gameCounter--  //Decrement by 1 , but it will return the value after decrementing.
console.log(gameCounter)  //Output: 100

