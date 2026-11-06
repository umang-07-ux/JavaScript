// Use of reduce-
//reduce is used to reduce an array to a single value
//Isme ek accumulator(acc) aur ek current value(currval) hota hai. Accumulator me pehle se hi ek value assign karte hai aur 
//current value me array ke elements hote hai. Ye dono values ko hum function ke andar use karte hai aur fir return karte hai. Isse 
//hum array ke elements ko reduce karke ek single value nikal sakte hai.
const myNums=[1,2,3];
const myTotal=myNums.reduce(function(acc,currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+ currval; //yaha pe task perform ho raha hai.
},0); //Yaha pe humne 0 ko as initial value ke tarah pass kiya hai 'acc' i.e. accumulator mei.
console.log(myTotal); //Output: 6

//Arrow function ke sath reduce-
const myTotal2=myNums.reduce(( acc,currval) => acc+currval,0);
console.log(myTotal2); //Output: 6

//use of reduce in array of objects-
const shoppingCart=[
    {
        itemName: "JS course",
        price:2999
    },
    {
        itemName: "Python course",
        price:1999
    },
    {
        itemName: "Java course",
        price:1499
    }
]
const totalPrice=shoppingCart.reduce((acc,currval) => (acc+currval.price),0);
console.log(totalPrice); //Output: 6497