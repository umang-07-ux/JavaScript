const score=400
console.log(score);


const balance=new Number(100) // Output:[Number: 100]
console.log(balance);

console.log(balance.toString());  // Convert number into string.
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // Output:100.00
                                 // It gives me decimal value jisme decimal ke baad 2 hi value tak answer hoga.

const otherNumber=12.8966
console.log(otherNumber.toPrecision(3)); //Output:12.9
                                         //Return the precise value 
                                         //Returns a string containing a number represented either in exponential 
                                         //or fixed-point notation with a specified number of digits.
const number2=123.8966
console.log(number2.toPrecision(3)); //Output:124
             
const number3=1123.8966
console.log(number3.toPrecision(3)); //Output:1.12e+3

const number4=1000000
console.log(number4.toLocaleString()); //Output:1,000,000
                                       //Used to provide commas in the number but using it alone will give answer 
                                       //in US standards.
console.log(number4.toLocaleString('en-IN')); //Output:10,00,000
                                              //This will going to give answer according to INDIAN standard.

const number5=Number.MAX_VALUE
console.log(number5); //Gives max value.

const number6=Number.MIN_VALUE
console.log(number6); //Gives min value.

//++++++++++++++++++++++++++++++Maths +++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math.abs(-4));

console.log(Math.round(4.3));

console.log(Math.ceil(4.2));

console.log(Math.floor(4.6));

console.log(Math.sqrt(5));

console.log(Math.pow(5,3));

console.log(Math.min(2,3,4,5));

console.log(Math.max(2,3,4,5));

console.log(Math.random()); //Always gives random values between 0 and 1.
console.log((Math.random()*10)+1); //This will give any random number between 0 and 10.'1' is added at the last to
                                   //avoid '0' as we want random number between 0 and 9.
console.log((Math.floor(Math.random()*10)+1));

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min)); //This will going to give me the floor vlaue between 10 
                                                        //and 20 


















                                              



