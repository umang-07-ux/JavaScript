// De Structuring of Objects:
//
const course={
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//This is also a way to extract any value from object.
const {courseInstructor}=course
console.log(courseInstructor);
 
//We can also do this.
const {courseInstructor:instructor}=course  //If the name of the key in the obj is long then we can provide it an alternative name also.
console.log(instructor);


//Yaha De-Structuring ki ja rahi hai. ({company})->Object De-Structuring
//Ye concept react mei use hoga.
const navbar =({company}) =>{

}
navbar(company="Umang")


//API calls mostly json format mei hi aati hai.
//Aise hi APIs ki value milti hai and ikso hum object mei change karke apna kaam kar sakte hai.
//JSON-JavaScript Object Notation:
//This is the json format:
// {
//     "name": "Umang",
//     "coursename": "JS in hindi",
//     "price":"free"
// }

//Kabhi kabhi API calls array format mei bhi aati hai jiske andar multiple objects hote hai.
// [
//     {},
//     {},
//     {},
//     {}

// ]  


