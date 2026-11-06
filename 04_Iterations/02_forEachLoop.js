//'forEach' Loop-
//'forEach' loop is higher order function, matlab ki yeh function ko as an argument accept karta hai. Iska use karne se hume index ki zarurat nahi hoti hai, aur yeh directly values ko iterate karta hai.
const coding=["JavaScript","C++","Python","Ruby"];
coding.forEach( function(item) {
    console.log(item); //Output: JavaScript, C++, Python, Ruby
} )

//Using arrow function in forEach loop-
coding.forEach( (item) => {
    console.log(item); //Output: JavaScript, C++, Python, Ruby
} )

//calling function inside forEach loop-
function printMe(item) {
    console.log(item); //Output: JavaScript, C++, Python, Ruby
}
coding.forEach(printMe); //Here we are passing the function name as an argument to forEach loop, and forEach loop will call the function for each item in the array.

//'forEach' loop can also print index and the whole array.
coding.forEach( (item,index,arr) => {
    console.log(item,"-", index, "-", arr); //Output: JavaScript - 0 - [ 'JavaScript', 'C++', 'Python', 'Ruby' ], C++ - 1 - [ 'JavaScript', 'C++', 'Python', 'Ruby' ], Python - 2 - [ 'JavaScript', 'C++', 'Python', 'Ruby' ], Ruby - 3 - [ 'JavaScript', 'C++', 'Python', 'Ruby' ] 
} )

//'forEach' loop in array of objects-
const myCoding=[
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"C++",
        languageFileName:"cpp"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName, "-", item.languageFileName); //Output: JavaScript - js, C++ - cpp, Python - py
})