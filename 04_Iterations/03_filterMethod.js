//Use of 'filter' method-
//'filter' method use hota hai array ke elements ko filter karne ke liye, aur yeh ek naya array return karta hai jisme filtered elements hote hain. 
// Iska use karne ke liye hume ek callback function provide karna padta hai jo har element ke liye true ya false return karta hai.
const myNums=[1,2,3,4,5,6,7,8,9,10];
const newNums=myNums.filter((num) => num > 4);
console.log(newNums); //Output: [ 5, 6, 7, 8, 9, 10 ].Aisa isliye ho raha hai kyuki filter 4 se bade numbers ko filter kar raha hai aur unhe nayi array me store kar raha hai.

const newNums2=myNums.filter((num) => {
    num >4
})
console.log(newNums2); //Output:[],yaha pe agar arrow function me curly braces use karte hain i.e. agar scope open karte hai to hume return statement ka use karna padta hai, warna yeh undefined return karega.

const newNums3=myNums.filter((num) => {
    return num >4
})
console.log(newNums3); //Output: [ 5, 6, 7, 8, 9, 10 ]

//Condition in 'forEach' loop-
const newNums4=[]
myNums.forEach((num) => {
    if(num > 4) {
        newNums4.push(num)
    }
})
console.log(newNums4); //Output: [ 5, 6, 7, 8, 9, 10 ]

//'filter' used in array of objects-
const books=[
    { title:'Book One' , genre:'Fiction' , publish:1981 , edition:2004},
    { title:'Book Two' , genre:'Non-Fiction' , publish:1999 , edition:2008},
    { title:'Book Three' , genre:'History' , publish:2008 , edition:2016},
    { title:'Book Four' , genre:'Non-Fiction' , publish:2011 , edition:2016},
    { title:'Book Five' , genre:'Science' , publish:1989 , edition:2014},
    { title:'Book Six' , genre:'Fiction' , publish:1981 , edition:1989},
    { title:'Book Seven' , genre:'History' , publish:1996 , edition:2003},
    { title:'Book Eight' , genre:'Science' , publish:2011 , edition:2016},
    { title:'Book Nine' , genre:'Non-Fiction' , publish:1981 , edition:1989}
]
const userBooks=books.filter((bk) => bk.genre==="History")
console.log(userBooks); //Output: [ { title: 'Book Three', genre: 'History', publish: 2008, edition: 2016 }, { title: 'Book Seven', genre: 'History', publish: 1996, edition: 2003 } ].Yaha pe humne filter method ka use karke books array me se sirf unhi books ko filter kiya jinka genre "History" hai.

const userBooks2=books.filter((bk) => bk.publish>2000)
console.log(userBooks2); //Output: [ { title: 'Book Three', genre: 'History', publish: 2008, edition: 2016 }, { title: 'Book Four', genre: 'Non-Fiction', publish: 2011, edition: 2016 }, { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 } ]
const userBooks3=books.filter((bk) => bk.genre==="Non-Fiction" && bk.publish>=1995)
console.log(userBooks3); //Output: [ { title: 'Book Two', genre: 'Non-Fiction', publish: 1999, edition: 2008 }, { title: 'Book Four', genre: 'Non-Fiction', publish: 2011, edition: 2016 } ]