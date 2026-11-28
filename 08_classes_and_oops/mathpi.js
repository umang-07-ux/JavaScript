const descripter=Object.getOwnPropertyDescriptor(Math, "PI")

// Inside JS, value of PI connat be changed kyuki usko backend mei kaafi security se unchangable rakha hai.
console.log(descripter); 
/*O/P-{
        value: 3.141592653589793,
        writable: false,
        enumerable: false,
        configurable: false
      }
*/

// Kaise apne code ki properties ko control kare-
const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));  
/*O/P-{
        value: 'ginger chai',
        writable: true,
        enumerable: true,
        configurable: true
      }
*/

// abhi kyuki 'enumerable: true' hai toh 'name par iteration ho raha hai-
for (let [key,value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);  
    /*O/P-name : ginger chai
                price : 250
                isAvailable : true
    */                                        
}                                                                    
// now we can define the properties of our own object-
Object.defineProperty(chai, "name" , {
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name")); 
/*O/P-{
        value: 'ginger chai',
        writable: false,
        enumerable: false,
        configurable: true
      }
*/ 

// Ab yaha par baaki key,value pair par iteration ho raha hai par 'name' par nhi ho raha kyuki humne uska 'enumerable: false' kar diya hai-
for (let [key,value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);  
    /*O/P-name :price : 250
                isAvailable : true
    */                                        
}  
                                                            


