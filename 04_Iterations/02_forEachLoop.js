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

//--------------------------------------------------------------------------------------------------
const nums=[1,2,3,4,5,6,7,8,9,10];
const newNums1=nums.forEach( (num) => {
    console.log(num); //Output: 1,2,3,4,5,6,7,8,9,10
} )
console.log(newNums1); //Output: undefined. Aisa isliye ho raha hai kyuki 'forEach' loop koi value return nahi karta hai, yeh sirf array ke 
                       //elements ko iterate karta hai aur unhe print karta hai.


