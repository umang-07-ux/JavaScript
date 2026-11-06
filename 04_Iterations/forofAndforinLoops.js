//'for of' LOOP-
//'for of' loop used hota hai iterable objects ke liye, jaise ki arrays, strings, maps, sets etc. Iska use karne se hume index ki zarurat nahi hoti hai, aur yeh directly values ko iterate karta hai.But 'for of' loop ka use objects ke liye nahi hota hai, kyuki objects iterable nahi hote hai. Iska use karne se hume index ki zarurat nahi hoti hai, aur yeh directly values ko iterate karta hai. 
const arr=[1,2,3,4,5];
for(const num of arr) {
    console.log(num); //Output: 1,2,3,4,5
}

const greetings="Hello World";
for(const greet of greetings) {
    console.log(greet); //Output: H,e,l,l,o, ,W,o,r,l,d
}

//Map-
//Map ek iterable object hai, jisme key-value pairs hote hai. Iska use karne se hume index ki zarurat nahi hoti hai, aur yeh directly values ko iterate karta hai.
const map=new Map();
map.set('name','Umang');
map.set('age',22);
map.set('city','Delhi');
map.set('name','Umang'); //Duplicate key will be ignored
console.log(map); //Output: Map(3) { 'name' => 'Umang', 'age' => 22, 'city' => 'Delhi' }

//'for of' loop with Map-
for(const key of map) {
    console.log(key); //Output: [ 'name', 'Umang' ], [ 'age', 22 ], [ 'city', 'Delhi' ]
}

//'for of' loop with Map using destructuring-(destructuring ka matlab hai ki hum array ke elements ko alag alag variables mei assign kar sakte hai)
for(const [key,value] of map) {
    console.log(key, ':-', value); //Output: name :- Umang, age :- 22, city :- Delhi
}

//-------------------------------------------------------------------------------------------------------------

//'for in' LOOP-

const myObject={
    js:"javascript",
    cpp:"C++",
    py:"python",
    rb:"ruby"
}

//only printing keys of object using 'for in' loop-
for(const key in myObject) {
    console.log(key); //Output: js, cpp, py, rb
}

//printing values of object using 'for in' loop-
for(const key in myObject) {
    console.log(myObject[key]); //Output: javascript, C++, python, ruby
}

//printing both together using 'for in' loop-
for(const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`); //Output: js shortcut is for javascript, cpp shortcut is for C++, py shortcut is for python, rb shortcut is for ruby
}

//'for in' loop with array-
const programming=["JavaScript","C++","Python","Ruby"];
for(const key in programming) {
    console.log(key); //Output: 0, 1, 2, 3 .This prints the indexes.
    console.log(programming[key]); //Output: JavaScript, C++, Python, Ruby.This prints the values.
}

//'for in' loop in Map is not recommended because it will iterate over the properties of the Map object itself, not the key-value pairs. Instead, use 'for of' loop for Maps as shown above.


