//var c = 300
let a = 300
if (true) {   //This is block scope
    let a = 10
    const b = 20
    // console.log("INNER- ", a); //Output:INNER- 10
}

//var keyword's values comes out of the scope.
// console.log(a); //Yeh dono error denge as 'a' and 'b' defined inside the above scope.
// console.log(b);
// console.log(c); //Output:300


//Nested Scope:
function one(){
    const username = "Umang"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  //Error as website is inside scope of 'two'.

    two()  //This will get executed

}

one() //This will going to call the function 'one' and in function 'one' 'two()' will get executed

if (true) {
    const username = "Umang"
    if (username === "Umang") {
        const website = " youtube"
        // console.log(username + website);  //Output:Uamng youtube
    }
    // console.log(website);  //this will give error as we are trying to print the value of the variable which is inside the scope outside of the scope 
}

// console.log(username); //this will also going to give the same error


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //Output:6
                       //This will not going to give any error as the function is declare independently, so we can call function before making of the function.

function addone(num){
    return num + 1
}



addTwo(5)  //This will give error as here the function is declared inside a variable.This concept is known as hoisting which we will learn in the future.
//Another way of making functions:
const addTwo = function(num){
    return num + 2
}