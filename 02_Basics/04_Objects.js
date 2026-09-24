// How to make object singleton or declare objects using constructors.

const tinderUser2={} //It gives an empty object but this is a non singleton object.


const tinderUser=new Object()  //This is a singleton object
console.log(tinderUser); //Output:{}(This is an emoty object).

tinderUser.id="123abc"
tinderUser.name="Umang"
tinderUser.isLoggedIn=false
console.log(tinderUser);


//Declaring objects inside object:
const regularUser={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Umang",
            lastname: "Srivastava"
        }
    }
}
console.log(regularUser);  //Output:{ email: 'some@gmail.com', fullname: { userfullname: { firstname: 'Umang', lastname: 'Srivastava' } } }
console.log(regularUser.fullname.userfullname); //Output:{ firstname: 'Umang', lastname: 'Srivastava' }


//Combining of objects:
const obj1={1: "a" , 2: "b"}
const obj2={3: "c" , 4: "d"}

const obj3={obj1 , obj2}  //This will going to merge both obj but it will create objects inside object.
console.log(obj3); //Output: obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4=Object.assign(obj1 , obj2)  //This will merge the objects without making objects inside object.
console.log(obj4);  //Output:{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5=Object.assign({}, obj1 , obj2) //Giving {} in the function is a good practice as it will guaranteed that the answer should be in object.
                                          // {} → empty object jisme obj1 aur obj2 ki properties copy hongi.
                                          // {} is the target where other objects gets copied.
console.log(obj5); //Output:{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj6={...obj1 , ...obj2}  //Spread operator,just like in array here also it combines all the objs together.
console.log(obj6); //Output:{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


//When values database se aaya ho toh:
//Array of objects aayega database se.
const users=[
    {
        user1:1,
        email:"u@gmail.com"
    },
    {
        user2:2,
        email:"m@gmail.com"
    },
    {
        user3:3,
        email:"a@gmail.com"
    },
    {
        user4:4,
        email:"n@gmail.com"
    },
    {
        user5:5,
        email:"g@gmail.com"
    }
]
console.log(users[1].email); //OUtput:m@gmail.com
                             //Here you can access the objects inside the array and also can assess things inside the individual objects also.
console.log(Object.keys(tinderUser));  //Output:[ 'id', 'name', 'isLoggedIn' ]
                                       //This will give me all the keys of the particular object and it is provided in thr form of array.
console.log(Object.values(tinderUser)); //Output:[ '123abc', 'Umang', false ]
console.log(Object.entries(tinderUser));  //Output:[ [ 'id', '123abc' ], [ 'name', 'Umang' ], [ 'isLoggedIn', false ] ]
                                          //It will provide me arrays for each key:value pair inside the array.
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //Output:true
                                                      //It tells whether the object has the property or not.





