// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);


//ARRAY METHODS:

// myArr.push(6)  //Add the elements.
// console.log(myArr);

// myArr.push(7)
// console.log(myArr);

// myArr.pop()   //Removes the last value of the array.
// console.log(myArr);

// myArr.unshift(9) //Use to add value at the starting of the array , but it is insufficient as we have to shift the whole array to insert the element in the starting and it might be a very time consuming process.
// console.log(myArr);

// myArr.shift() //Removes the first element of the array.
// console.log(myArr);

// console.log(myArr.includes(9)); //Tells whether the element exist in the array.Gives the answer in true/false. 
// console.log(myArr.indexOf(3)); //Gives the index of the element.

// const newArr = myArr.join() //Adds all the elements of an array into a string.

// console.log(myArr);
// console.log( newArr);
// console.log(typeof newArr);


// slice, splice

const myArr3=[1, 2, 3, 4, 5, 6]
console.log("A ", myArr3);

const myn1 = myArr3.slice(1, 3) //Gives a copy of particular section of array but does not include the end index given in function.

console.log(myn1);
console.log("B ", myArr3);


const myn2 = myArr3.splice(1, 3) //splice manipulates the original array 
console.log("C ", myArr3); //ThereFore: here output is [1, 5, 6]
console.log(myn2); //And Here it will print the array from the myArr3 that has been spliced in myn2 i.e.[2, 3, 4]