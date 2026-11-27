// Parent Class
class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // static keyword ka use static method banane ke liye hota hai.
    // Static methods ko directly object ke through access nahi kar sakte.
    static createId() {
        return `123`;
    }
}

const newUser = new User("Umang");

// Error dega kyunki createId() ek static method hai.
// Static method ko object ke through call nahi kar sakte.

// console.log(newUser.createId());

// Static method ko class ke naam se directly call kar sakte hain.
console.log(User.createId());
// O/P: 123


// Child Class
// extends ka use User class ki properties aur methods inherit karne ke liye hota hai.
class Teacher extends User {

    constructor(username, email) {

        // super() Parent Class ke constructor ko call karta hai.
        // username Parent Class ko pass kiya ja raha hai.
        super(username);

        this.email = email;
    }
}

const iPhone = new Teacher("IPhone", "iphone@example.com");

// Teacher class ne User class ko inherit kiya hai.
// Isliye Teacher ka object User ka logMe() method use kar sakta hai.
iPhone.logMe();
// O/P: Username: IPhone


// Static method ko Child Class ke naam se bhi call kar sakte hain.
console.log(Teacher.createId());
// O/P: 123

// Lekin Teacher ke object se call nahi kar sakte.
// console.log(iPhone.createId()); // Error
