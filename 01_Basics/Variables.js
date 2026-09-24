
/*'const' is a keyword jisko hum variable ko declare karne ke liye use karte hai. 
   const se declare kiye gaye variable ko dobara assign nahi kar sakte.
  Example:
  accountId=2, yeh code error dega kyuki accountId ko 'const' se declare kiya gaya hai aur iska value 
  change nahi ho sakta.
*/
const accountId=144553

/*
  'let' is a keyword jisko hum variable ko declare karne ke liye use karte hai.
  'let' se declare kiya gaya variable ka value change ho sakta hai.
    Example: 
    accountEmail="umang@gmail.com" se accountEmail="us@gmail.com" me change ho sakta hai.
*/
let accountEmail="umang@gmail.com"

/*
  'var' is a keyword jisko hum variable ko declare karne ke liye use karte hai.
  'var' se declare kiya gaya variable ka value change ho sakta hai.
    Example: 
    accountPassword="123456" se accountPassword="121212121" me change ho sakta hai.
*/
var accountPassword="123456"

/* 
  'let' ko hum generally 'var' ki jagah use karte hain.

  'var' ka scope function level hota hai,
   matlab var se banaya variable poore function ke andar
   access kiya ja sakta hai.

   'let' ka scope block level hota hai,
   matlab let se banaya variable sirf us block { } ke andar
   access kiya ja sakta hai.

   Scope ka simple meaning:
   Variable ko program ke kis area tak access kar sakte hain.

   Isliye modern JavaScript mein generally 'let' aur 'const'
   ko 'var' ke comparison mein prefer kiya jata hai.

   Prefer not to use 'var' because of issue in block scope and functional scope.
*/

/* 
  yaha par 'accountCity' variable ko bina kisi keyword ke declare kiya gaya hai.Aisa kaise ho sakta hai? 
  Kyunki JavaScript mein agar hum variable ko bina kisi keyword ke declare karte hain to wo automatically 
  global variable ban jata hai. Iska matlab hai ki ye variable poore program mein kahin bhi access kiya 
  ja sakta hai. Lekin ye practice generally recommend nahi ki jati kyunki isse code ka scope aur 
  maintainability affect ho sakta hai.
*/  
accountCity="Lucknow"


/*
  Yaha humne 'accountState' mei koi bhi value assign nahi kiya hai. Iska matlab hai ki ye variable 
  undefined hai.Aur output mei undefined print hoga.
*/
let accountState;

console.log(accountId);  //Output: 144553

/*
  changed the values of 'let' and 'var' variables and also changed the value of accountCity variable which
  is declared without any keyword.
*/
accountEmail="us@gmail.com"
accountPassword="121212121"
accountCity="Delhi"

/*
  'console.table' ek function hai jisko hum console me table format me output print karne ke liye use 
   karte hai
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
