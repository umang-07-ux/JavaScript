//Agar humko multiple values use karni ho function mei toh hum rest operator ka use karte hai'...'
//Agar hum rest operator ka use nhi karte toh sirf console.log ki pehli value hi print hoti.
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400));  //Output:[ 200, 300, 400 
                                               //We are getting the output in the form of array.

function cartPrices(val1, val2, ...nums1){
    return nums1
}               
console.log(cartPrices(200 ,300 ,400 ,500 ,600));  //Output:[ 400, 500, 600 ]
                                                   //Ab yaha par o/p mei first do values isliye nih print hui kyuki woh values val1 and val2 le gaye.
                                
//Passing Object inside the function:
const user={
    username: "Umang",
    age: 22
}          
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);

}                
handleObject(user)   //Passing object here.

//We can also pass object directly in the in function here.
handleObject({
    username: "sam",
    age: 50
})

//Passing Array in the function:
const myNewArray= [200, 400, 500, 100]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));  //Output:400
//We can also pass direct array.
console.log(returnSecondValue([200, 300, 400, 500]));  //Output:300

