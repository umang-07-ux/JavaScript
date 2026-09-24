// Dates:

let myDate=new Date() // Current date aur time ka Date object create karta hai.

// console.log(myDate); //Output:2026-09-24T09:12:48.406Z
// ISO format mein date aur time deta hai. Ye UTC time hota hai.

// console.log(myDate.toString());  //Output:Thu Sep 24 2026 14:42:48 GMT+0530 (India Standard Time)
// Date ko readable string format mein convert karta hai.

// console.log(myDate.toTimeString());  //Output:14:42:48 GMT+0530 (India Standard Time)
// Sirf local time aur timezone deta hai.

// console.log(myDate.toDateString());  //Output:Thu Sep 24 2026
// Sirf date ko readable format mein deta hai.

// console.log(myDate.toISOString());  //Output:2026-09-24T09:12:48.406Z
// Date ko ISO format mein return karta hai. Ye UTC mein hota hai.

// console.log(myDate.toJSON());  //Output:2026-09-24T09:12:48.406Z
// Date ko JSON/ISO string format mein return karta hai.

// console.log(myDate.toLocaleString());  //Output:9/24/2026, 2:42:48 PM
// Local system ke according date aur time return karta hai.

// console.log(myDate.toLocaleDateString());  //Output:9/24/2026
// Local format mein sirf date return karta hai.

// console.log(myDate.toLocaleTimeString());  //Output:2:42:48 PM
// Local format mein sirf time return karta hai.

// console.log(typeof myDate);  //Output:object
// Date ka typeof "object" hota hai.



let myCreatedDate=new Date(2023,0,25) //In JavaScript months start with '0'.
// JavaScript mein January = 0, February = 1 ... December = 11.

console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toLocaleString()); //If you don't give time in the function it will give 12:00:00 AM by default.
// Agar time nahi dete, to default time 12:00:00 AM hota hai.



let myCreatedDate2=new Date(2024,2,24,5,9,5)
// Format: year, month, date, hours, minutes, seconds
console.log(myCreatedDate2.toLocaleString());  //Output:3/24/2024, 5:09:05 AM



let myCreatedDate3=new Date("01-14-2026")
// String ke through bhi specific date create kar sakte hain.
console.log(myCreatedDate3.toLocaleString());



let myTimeStamp=Date.now()  //Provide you time in milliseconds
// Date.now() current time ka timestamp milliseconds mein deta hai.
console.log(myTimeStamp);  //Output:1790241644102



console.log(myCreatedDate3.getTime());  //Output:1768329000000
                                        //Provide you time on milliseconds.
// getTime() given Date ka timestamp milliseconds mein deta hai.



console.log(Math.floor(Date.now()/1000)); //Output:1790241644
                                          //to get time in seconds.
// Date.now() milliseconds mein deta hai, /1000 karke seconds mein convert karte hain.
// Math.floor() decimal value hata deta hai.



let newDate=new Date()

console.log(newDate.getMonth()+1); //we do plus one as in js month start with '0'
// getMonth() 0-11 return karta hai, isliye normal month number ke liye +1 karte hain.

console.log(`Today the date is ${newDate.getDate()} and the time is ${newDate.toLocaleTimeString()}`); //Output:Today the date is 24 and the time is 2:50:44 PM
// getDate() current month ki date return karta hai.
// Template literal ${} ke through values ko directly string mein insert kar sakte hain.



console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))
// weekday: "long" se weekday ka full name milega.
// Example: Thursday






