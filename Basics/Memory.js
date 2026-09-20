//There are two types of memory:
//Stack Memory and Heap Memory
//Stack (Primitive) , Heap (Non-Primitive)
//Jab bhi stack memory declare hoti hai toh iska mtlb ki hume copy milta hai joh variable humne declare kiya hai.
//Heap mei original value milti hai toh jo bhi hum change karenge woh original value mei bhi change hogi.

//Exmaple:
//Stack Memory:
let myName="Umang Srivastava"
let anotherName=myName
console.log(anotherName);
anotherName="Ujjwal Srivastava"
console.log(myName);
console.log(anotherName);

//Heap Memory:
let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
console.log(userOne);
let userTwo=userOne
userTwo.email="umang@google.com"
console.log(userOne);
console.log(userTwo);
