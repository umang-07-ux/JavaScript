class User {

    // 'constructor' ka class mei bahut important role hai kyuki jaise hi hum class se ek obj initalize karenge with the help of 'new' keyword 
    // waise hi 'constructor' call ho jata hai.
    constructor(username, email, password) {
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const newUser=new User("umang", "umang@example.com", "123") // Yaha constructor call ho raha hai.

console.log(newUser.encryptPassword()); // O/P-123abc
console.log(newUser.changeUsername()); //O/P-UMANG

// Behind the scene aise kaam karta hai class-
function User2(username, email, password) {
    this.username=username;
    this.email=email;
    this.password=password;
}

User2.prototype.encryptPassword=function() {
    return `${this.password}abc`
}

User2.prototype.changeUsername=function() {
    return `${this.username.toUpperCase()}`
}

const newUser2=new User2("ujjwal", "ujjwal@example.com", "1234")

console.log(newUser2.encryptPassword());
console.log(newUser2.changeUsername());


