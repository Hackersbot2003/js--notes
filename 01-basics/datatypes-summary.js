 //primitive  - call by value (changs made in copy)
 //7 types : sting ,number ,boolean,null,undefined,symbol,BigInt
 
 const score=100
 const scoreValue=100.3


 const isloggedIn = false
 const outsideTemp = null             //empty
 let userEmail;                //undefined

const id = Symbol("132")
const anotherId = Symbol("132")
console. log(id===anotherId)   //false

const bigNumber =124578854556n


 //refrence type  - non prmitive
 //array,objects,functions


 const heros=["viny","abd","vasu"]
let myObj ={
    name:"vinay",
    age:16,
}
const myFunctions = function(){
    console.log("hello world")
}

console.log(typeof myFunctions)        //function
console.log(typeof myObj)   //object
console.log(typeof heros)  //object

console.log(typeof bigNumber)  //bigint