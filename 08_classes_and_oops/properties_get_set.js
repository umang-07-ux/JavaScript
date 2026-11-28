// Getter and Setter ka use bina class ke-
function User(email, password) {

    this._email = email;
    this._password = password;

    // Object.defineProperty() kisi object ki property define karta hai.
    // Iske through hum property ke read aur write behaviour ko customize kar sakte hain.
    //
    // Syntax: Object.defineProperty(object, propertyName, descriptor)

    // Yahan 'this' current User object ko refer kar raha hai.
    // 'email' property ke liye getter aur setter define kar rahe hain.
    Object.defineProperty(this, 'email', {

        // GETTER:
        // Jab hum umang.email access karenge,
        // toh ye function execute hoga aur email uppercase mein return karega.
        get: function() {
            return this._email.toUpperCase();
        },

        // SETTER:
        // Jab hum umang.email = value karenge,
        // toh ye function execute hoga aur value _email mein store hogi.
        set: function(value) {
            this._email = value;
        }
    });

    // Password property ke liye bhi getter aur setter define kar rahe hain.
    Object.defineProperty(this, 'password', {

        // Password access karne par uppercase mein return hoga.
        get: function() {
            return this._password.toUpperCase();
        },

        // Password ki new value _password mein store hogi.
        set: function(value) {
            this._password = value;
        }
    });
}

const umang = new User("umang@example.com", "123abc");

console.log(umang.email);
// O/P: UMANG@EXAMPLE.COM

console.log(umang.password);
// O/P: 123ABC