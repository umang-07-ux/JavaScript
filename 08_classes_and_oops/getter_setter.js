class User {
    constructor(email, password) {

        // Constructor values set karne ke liye hai.
        // this.email aur this.password setters ko call karenge.
        this.email = email;
        this.password = password;
    }

    // GETTER:
    // Jab hum umang.email access karenge, getter execute hoga.
    // Ye email ko uppercase mein return karega.
    get email() {
        return this._email.toUpperCase();
    }

    // SETTER:
    // Jab hum this.email = value likhenge, setter execute hoga.
    // Original value _email mein store hogi.
    set email(value) {
        this._email = value;
    }

    // GETTER:
    // Password ko uppercase karke "umang" add karega.
    get password() {
        return `${this._password.toUpperCase()}umang`;
    }

    // SETTER:
    // Password ki original value _password mein store karega.
    set password(value) {
        this._password = value;
    }
}

const umang = new User("umang@example.com", "123abc");

console.log(umang.password);
// O/P: 123ABCumang

console.log(umang.email);
// O/P: UMANG@EXAMPLE.COM


// IMPORTANT:
// Constructor aur Setter dono value set kar rahe hain,
// lekin koi error nahi aayegi because constructor setter ko call karta hai
// aur setter actual value _email aur _password mein store karta hai.

// Agar setter mein this.email = value likhte,
// toh setter baar-baar khud ko call karta (infinite recursion).
// Isse "Maximum call stack size exceeded" error aati.

// Isliye this.email ki jagah this._email use kiya hai.
// _email actual value store karta hai aur recursion prevent karta hai.