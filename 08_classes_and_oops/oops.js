// Object Literal-
// JavaScript mein Object Literal ek simple way hai object create karne ka.
// Matlab {} curly braces ke andar directly properties aur methods define karke object banana.

const user= {
    username:"Umang",
    loginCount:8,
    signedIn:true,

    getUserDetails: function() {
        console.log("Got user details from database"); 
        console.log(`Username:${this.username}`);
        console.log(this); // this keyword current context ko point karta hai.Toh pura current obj hi print hoga
        
         
    }
}

console.log(user.username); // O/P-Umang
console.log(user.getUserDetails()); // O/P-Got user details from database
                                        // Username:Umang
                                        /* {
                                             username: 'Umang',
                                             loginCount: 8,
                                             signedIn: true,
                                             getUserDetails: [Function: getUserDetails]
                                            }
                                        */
                                        // undefined

// -------------------------------------------------------------------------------------------
// Constructor function-
// JavaScript mein Constructor Function ek normal function hota hai jiska use multiple objects create karne ke liye kiya jata hai.
// Iska main purpose ek hi structure ke multiple objects banana hota hai, bina baar-baar properties define kiye.

function User(username, loginCount, isLoggedIn) {
    this.username=username;  //on the left side are the variables and they are freshly made here and on the right side calling is done.
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    return this  //Yaha return this karte hi jo object tha upar usse yaha passon kar diya.
}

/* We have to use 'new' keyword because without using it agar hum dusra user banayenge toh woh pehle user ki values ko overwrite kar dega toh 
   usse bachne ke liye hum 'new' keyword ka use karte hai jisse ki humesha new instance/empty obj milta hai.*/
// 'new' keyword ke kaaran ek constructor function call hota hai.
const userOne=new User("Ujjwal", 12, true)
const userTwo=new User("Saksham", 13, false)

console.log(userOne); // O/P-User { username: 'Ujjwal', loginCount: 12, isLoggedIn: true }

console.log(userTwo); // O/P-User { username: 'Saksham', loginCount: 13, isLoggedIn: false }

// 'constructor' property reference hoti hai khudi ke baare mei.
console.log(userOne.constructor); // O/P-[Function: User]









