//most used loop in arrays

//for of 
// ["","",""]
// [{},{},{}]

const arr =[1,2,3,4,5]
// for (const element of object) {
    
// }
for (const num of arr) {
    console.log(num);
    
    
}

const greeting = "hello"
for (const greet of greeting) {
    console.log(`each char is ${greet}`);
    
    
}
// each char is h
// each char is e
// each char is l
// each char is l
// each char is o

//----------maps-------------
const map =  new Map()                       //key value pair
map.set("in","india")
map.set("usa","usa")
map.set("uk","uk")
map.set("in","india")
console.log(map);
//Map(3) { 'in' => 'india', 'usa' => 'usa', 'uk' => 'uk' }
// maps => unique values and in fixed order
for (const key of map) {
    console.log(key);
    
    
}
// [ 'in', 'india' ]
// [ 'usa', 'usa' ]
// [ 'uk', 'uk' ]

for (const [key,value] of map) {
    console.log(key , ":-",value);
    
    
}
// in :- india
// usa :- usa
// uk :- uk

//------in objects
const myObjec ={
    "game1":"nfs",
    "game2":"spider"

}
//--objectss are non iteratable
// for (const [key,value] of myObjec) {
//     console.log(key , ":-",value);
    
    
// }