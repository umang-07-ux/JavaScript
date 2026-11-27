// Parent Class
class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

// Child Class
// 'extends' keyword ka use Parent Class (User) ki properties
// aur methods ko Child Class (Teacher) mein inherit karne ke liye hota hai.
class Teacher extends User {

    constructor(username, email, password) {

        // 'super()' Parent Class ke constructor ko call karta hai.
        // super(username) Parent Class ko username pass karta hai.
        // Isse Parent Class ki properties initialize ho jaati hain.
        super(username);

        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

// Teacher class ka object create karna
const chai = new Teacher("shivang", "shivang@example.com", "123456");

chai.addCourse();
// O/P: A new course was added by shivang

// Teacher class ne User class ko inherit kiya hai,
// isliye Teacher ka object Parent Class ka method bhi access kar sakta hai.
chai.logMe();
// O/P: USERNAME is shivang


// Parent Class ka direct object create karna
const masalaChai = new User("Umang");

masalaChai.logMe();
// O/P: USERNAME is Umang


// 'instanceof' operator check karta hai ki koi object
// given class ya constructor ke instance se related hai ya nahi.

// Teacher, User ko extend karta hai.
// Isliye chai instanceof User ka result true hai.
console.log(chai instanceof User);
// O/P: true

console.log(chai instanceof Teacher);
// O/P: true

console.log(masalaChai instanceof User);
// O/P: true

console.log(masalaChai instanceof Teacher);
// O/P: false
