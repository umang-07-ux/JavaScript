//EXECUTION CONTEXT-
let val1=10
let val2=5
function addNum(num1,num2) {
    let total =num1+num2
    return total
}
let result1= addNum(val1,val2)
let result2= addNum(10,2)

//Toh yaha par Execution context kaise ban raha hai woh dekhna hai-
//1. Global Execution Context banega, jisme this sabse pehle window object ko point karega, aur phir global memory creation phase mei 
//   val1->undefined, val2->undefined, addNum->defination(kyuki abhi function sirf declare hua hai), result1->undefined, result2->undefined jata hai.

//2. Phir Memory Creation phase mei val1->undefined, val2->undefined, addNum->defination(kyuki abhi function sirf declare hua hai), 
//   result1->undefined, result2->undefined jata hai.

//3. Phir Execution pase mei val1<-10,val2<-5, ab addNum mei phir Execution context banega jisme new variable environment aur execution thread 
//   banega.Ab addNum ke andar phir se memory creation phase mei val1->undefined, val2->undefined,total->undefined hoga aur phir execution phase 
//   mei val1<-10,val2<-5,total<-15 hoga aur return total hoga, aur result1 mei 15 assign ho jayega.Aur har bar function call hone par purana 
//   execution context destroy ho jata hai aur naya execution context create hota hai.

