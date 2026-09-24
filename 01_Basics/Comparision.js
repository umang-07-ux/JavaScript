// console.log(2>1)  //Output: true
// console.log(2<1)  //Output: false
// console.log(2>=3)  //Output: false
// console.log(2<=3)  //Output: true
// console.log(2==2)  //Output: true
// console.log(2!=2)  //Output: false
// console.log(2===2)  //Output: true , '===' is strict equality operator which checks both value and
//                     //data type.
// console.log(2!==2)  //Output: false , '!==' is strict inequality operator which checks both value and 
//                     //data type.
// console.log(2==="2")  //Output: false

console.log("2">1);  //Output: true , here string is converted to number and then comparison is done.
console.log(null>0); //Output: false
console.log(null>=0); //Output: true , why? because null is converted to 0 and then comparison is done.
console.log(null==0); /*Output: false , why? null == 0 isliye false hai kyunki JS ka rule hai — null sirf undefined 
                        se loosely equal hota hai, == mein usko number mein convert hi nahi kiya jaata 
                       (jabki <, > jaise relational operators mein convert hota hai, isliye null < 1 true hai).*/

//The reason is that an equality check == and comparisons > < >= <= work differently.
//Comparisons convert null to a number, treating it as 0.
//That's why null >= 0 is true and (1) null > 0 is false.

console.log(undefined==0); //Output:false
console.log(undefined<0);  //Output:false
console.log(undefined>0);  //Output:false
//These type of conversion from line 13 will give the answers but they are inconsistant so you should avoid it.
