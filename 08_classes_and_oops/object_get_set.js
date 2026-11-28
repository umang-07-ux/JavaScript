const User = {
    _email: "umang@example.com",
    _password: "abc",

    // Getter: email access karne par uppercase mein return karega
    get email() {
        return `${this._email.toUpperCase()}`;
    },

    // Setter: email ki value update karega
    set email(value) {
        this._email = value;
    }
}

// Object.create(User) ek new empty object create karega
// aur User ko us new object ka prototype bana dega.
const tea = Object.create(User);

// tea ke andar directly email property nahi hai,
// isliye JavaScript prototype chain mein User object ko search karega.
// Wahan email getter mil jayega.
console.log(tea.email);

// O/P: UMANG@EXAMPLE.COM


// FACTORY FUNCTION:
// Factory Function ek normal function hota hai jo 'objects' create karke return karta hai.Like yaha par 'const tea = Object.create(User);' jo kiya hai.
// Iska use same structure ke multiple objects create karne ke liye hota hai.
// Ismein objects create karne ke liye 'new' keyword ki zaroorat nahi hoti.
