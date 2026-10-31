//Immediately Invoked Function Expression(IIFE):
//Yeh fucntion ko turant hi call karne ke liye use hota hai, aur yeh function ke andar defined variables ko global context mei leak hone se bachata hai.

//This is named function IIFE:
(function chai() {
    console.log(`DB CONNECTED`);
})(); //Output: DB CONNECTED, Aisa kyu hua? Kyuki kabhi kabaar global scope ke pollution se bachne ke liye hum IIFE ka use karte hai, aur yeh function turant hi call ho jata hai, aur iske andar defined variables global context mei leak nahi hote hai. 

//This is simpler version of IIFE:
(() =>{
    console.log(`DB CONNECTED TWO`);
})(); //Output:DB CONNECTED TWO

//Syntax mei first () mei function define hota hai, aur second () mei function call hota hai.

//Example:
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Umang"); //Output:DB CONNECTED TWO Umang