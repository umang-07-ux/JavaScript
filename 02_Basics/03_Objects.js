//Jab hum 'literals' ki tarah declare karte hai toh 'singleton' nhi banta hai 'constructor' se banega toh 'singleton' banega.

//OJECT LITERALS:
//Objects is type of DataType jisme hum 'key:value' pair store kar sakte hai.

//Yaha pe keys bhi string ki tarah treat hoti hai.Toh phir hum chahe toh "name" aise likhe ya name aise likhe dono
// sahi hai inside the object as js dono accept karta hai.

//Agar hum koi bhi key likhte hai jisme agar space use hua hai like in 'full name' tab usko object ke andar double
//quotes mei hi likhna hoga.

//Humlog 'Symbol' ko bhi declare kar sakte hai inside object but usko '[]' ke andar hi declare karna hota hai 
//varna uss key ka DataType String batane lagta hai.
const mySym=Symbol("key1")

const JsUser={
    name: "Umang",
    "full name": "Umang Srivastava",
    [mySym]: "mykey1",
    age: 22,
    location: "Lucknow",
    email: "umang@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}
console.log(JsUser.email);  //Output:umang@google.com

console.log(JsUser["email"]); //Output:umang@google.com
                              //But yaha pe "email" aise hi access ho payega.

console.log(JsUser["full name"]); //Output:Umang Srivastava
                                  //Ab yaha pe hum 'JsUser.full name' ki madat se access nhi kar sakte kyuki ab 
                                  //"full name" mei full and name ke beech mei space hai.

console.log(JsUser[mySym]); //Output:mykey1

//Changing is object:
JsUser.email="umangsrivastava@gmail.com"
console.log(JsUser);  /*Output:
                        {
                          name: 'Umang',
                          'full name': 'Umang Srivastava',
                          age: 22,
                          location: 'Lucknow',
                          email: 'umangsrivastava@gmail.com',
                          isLoggedIn: false,
                          lastLoginDays: [ 'Monday', 'Saturday' ],
                          Symbol(key1): 'mykey1'
                        }
                      */


//Freezing the object:
Object.freeze(JsUser) //This will freeze my obj and then we can not change anything inside the object.
JsUser.email="umangsrivastava@chatgpt.com" //This will not goinh to give me error but there will not going to 
                                           //have any change in the object also.
console.log(JsUser);


//Storing function as a property inside the object:
const JsUser2={
    name: "Umang",
    "full name": "Umang Srivastava",
    [mySym]: "mykey1",
    age: 22,
    location: "Lucknow",
    email: "umang@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}

// Object ke andar function ko bhi property ki tarah store kar sakte hain.
JsUser2.greeting=function(){
    console.log("Hello JS user"); // Function call hone par ye message print hoga.
    
}

console.log(JsUser2.greeting); //Output:[Function (anonymous)]
// Sirf function ko access kar rahe hain, function ko call nahi kar rahe.
// Isliye function ka reference/output milega.


console.log(JsUser2.greeting()); /*Output:
                                        Hello JS user 
                                        undefined
                                 */
// greeting() function ko call karega.
// Function ke andar "Hello JS user" print hoga.
// Function mein koi return statement nahi hai, isliye undefined return hoga.
// Outer console.log() us undefined ko print karega.



// Object ke andar ek aur function add kar rahe hain.
JsUser2.greeting2=function(){
    console.log(`Hello JS user, ${this["full name"]}`);
    // "this" current object JsUser2 ko refer karta hai.
    // this["full name"] se object ki "full name" property ki value milegi.
    // Isliye output hoga: Hello JS user, Umang Srivastava
    
}

console.log(JsUser2.greeting2());
// greeting2() function ko call kar raha hai.
// Function ke andar "Hello JS user, Umang Srivastava" print hoga.




