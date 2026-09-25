//Function mtlb ki package of code jiska jaha cahe use kar sakte hai.

//Syntax of Function:
function sayMyName(){
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("G");    
}
//Function ka reference hum without braces likhte hai 'sayMyName' and 'sayMyName()' ye execution hai.
sayMyName()  //Calling of the function.

//passing 'number1 and number2',here 'number1 and number2' are parameters.
function addTwoNumbers(number1 , number2){
    console.log(number1+number2);
}

//Here '3 , 4' are arguments.
addTwoNumbers(3,4)  //Output:7
addTwoNumbers(3,"4") //Output:34
addTwoNumbers(3,"a") //Output:3a

const result=addTwoNumbers(2,4)  //function call toh ho raha hai par result mei store nhi ho raha hai tabhi output of 'result' 'undefined' hai. 
console.log("Result:",result);  //Output:undefined


//Agar hum return ke baad koi bhi code likhenge toh woh kabhi bhi print nhi hone wala hai.
function addTwoNumbers2(number1 , number2){
    let result=number1+number2
    return result
}
const result2=addTwoNumbers2(3,5)  //Now i will get the answer which will be going to get stored in 'result2' 
console.log("Result:",result2); //Output:8
