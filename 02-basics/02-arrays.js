const marvelHeros  = ['thor',"ironama","spiderman"]
const dcHeros = ["superman","flash","batman"]

// marvelHeros.push(dcHeros)               //[ 'thor', 'ironama', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// //it pushes array inside array
// console.log(marvelHeros);       
// console.log(marvelHeros[3][2]);    //batman

//othermethod
const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros);             //[ 'thor', 'ironama', 'spiderman', 'superman', 'flash', 'batman' ]
//it creates new array


//spread mehod  -creates new array   ,prefferable
const allNewHeros =[...marvelHeros,...dcHeros]       //spread method
console.log(allNewHeros);          //[ 'thor', 'ironama', 'spiderman', 'superman', 'flash', 'batman' ]

const anotherArray =[1,2,3,[4,5,6],7,[8,9,[10,11]]]
const real_another_array =anotherArray.flat(Infinity)
console.log(real_another_array);         
// [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10,
//    11
//  ]


//asking and converting to array
console.log(Array.isArray('vinay'));         //false
console.log(Array.from("vinay"));           //[ 'v', 'i', 'n', 'a', 'y' ]
//we can convert anything like string object to array


//console.log(Array.from{name:"vinay"}); //[] return empty array
//interesting case ,we have to give which array to make array of keys or values

let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3));     //[ 100, 200, 300 ]


//leern isarray ,from,of in detail


