//Using 'map' -
const arr=[1,2,3,4,5];
const myNums=arr.map((num) => num+10);
console.log(myNums); //Output: [11, 12, 13, 14, 15]

//Chaining 'map' with 'map' -
const newNums=[1,2,3,4,5];
const myNewNums=newNums
                .map((num) => num*3)    
                .map((num) => num+1)
                .filter((num) => num >=10)   //Yaha pe pehle map method me humne array ke elements ko 3 se multiply kiya, fir dusre map method me humne unhe 1 add kiya aur fir filter method me humne unhe filter kiya jisme sirf unhi elements ko rakha jo 10 ya usse bade the.
console.log(myNewNums); //Output: [10, 13, 16] 
