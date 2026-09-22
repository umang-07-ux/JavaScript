const name="Umang"
const repoCount=50
console.log(name+repoCount+" Value"); //This method of concatination is not good and outdated.


// Backticks (` `) ka use Template Literals ke liye hota hai,
// jisme hum ${} ki help se string ke andar variables ki value directly use kar sakte hain.
// Template Literals are strings written using backticks ( ) that allow us to directly insert variables or 
// expressions using ${}.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); /*We will use backticks(` `) for any 
                                                                            addition or concatination.
                                                                            */
//Declaring String
const gameName=new String("Pubg-mobile-game")
console.log(gameName); //Here inside , String's characters are in key,value pairs.
                       /*
                       0:'P'
                       1:'u'
                       2:'b'
                       3:'g'
                       */
console.log(gameName[0]); //You can also get the value for the key

console.log(gameName.__proto__);

console.log(gameName.length); //to find length

console.log(gameName.toUpperCase()); //to convert string in upper case but it does not affect the original string

console.log(gameName.charAt(2));  //get the particular element the the string

console.log(gameName.indexOf('u')); //get the index of the particular character

const newString=gameName.substring(3,7) //get the part of the string
console.log(newString);

const anotherString=gameName.slice(-6,9) //same as substring but can also use negative numbers
console.log(anotherString);

const newString1="     umang     "
console.log(newString1);
console.log(newString1.trim()); //removes spaces from start and end.

const url="htttps://umang.com/umang%20srivatava"
console.log(url.replace('%20','-'));

console.log(url.includes("umang"));

console.log(gameName.split('-')); //split() convert string into array on the basis of space,-,etc.















                                                                            


