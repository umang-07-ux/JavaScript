//Methods in array:
const marvel_heros=["thor","Ironman","Spiderman"]
const dc_heros=["superman","flash","batman"]
marvel_heros.push(dc_heros) //push function merge two array but it make array inside the array
console.log(marvel_heros); //Output:[ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]
                           //Which means it put array inside the array
console.log(marvel_heros[3][1]); /*So if i want to access the element like"flash" it is in the array inside 
                                   array the and the array is the 3rd indexed element in the array and "flash" is 
                                   the 1st indexed element in that 3rd indexed array.
                                */


const marvel_heros1=["thor","Ironman","Spiderman"]
const dc_heros1=["superman","flash","batman"]
const allheros=marvel_heros1.concat(dc_heros1) //concat function merge the arrays and store it in new array as 1D array only.
console.log(allheros); //Output:[ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]


const marvel_heros2=["thor","Ironman","Spiderman"]
const dc_heros2=["superman","flash","batman"]
const all_new_heros=[...marvel_heros2,...dc_heros2] //it spread both array and combine it, it is the mosr used operator for merging the arrays.
console.log(all_new_heros); //Output:[ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]


const anotherArray=[1,2,3,[4,5,6],7,[8,9,[10,11]]]
const realAnotherArray=anotherArray.flat(Infinity)  /*Here flat is used to make N-D array into 1D array and 
                                                    'infinity' in it means to converet it fully into 1D.
                                                    */
console.log(anotherArray);
console.log(realAnotherArray);


console.log(Array.isArray("Umang")); //Tells whether it is array or not.
console.log(Array.from("Umang"));  //Output:[ 'U', 'm', 'a', 'n', 'g' ]
                                   //Converts it into array.

console.log(Array.from({name:"Uamng"})); //Output:[]
                                         //interesting
    

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));  //Output:[ 100, 200, 300 ]
                                              //Returns array from set of elements.




