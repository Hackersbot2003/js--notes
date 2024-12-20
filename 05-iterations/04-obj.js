const myObj ={
    js:"javascript",
    rb:"ruby",
    cpp:"c++",
    swift:"apple"

}
//forof loop not working in objects

//----------forin
// for (const key in object) {
   
// }
for (const key in myObj) {
           console.log(`${key} shortcur is for ${myObj[key]}`);
           
}

// js shortcur is for javascript
// rb shortcur is for ruby
// cpp shortcur is for c++
// swift shortcur is for apple

//  --- for in arrays
const arr =[1,2,3,4,5]
for (const num in arr) {
    console.log(arr[num]);
    
    
}
// 1
// 2
// 3
// 4
// 5

//---------in maps
const map =  new Map()                       //key value pair
map.set("in","india")
map.set("usa","usa")
map.set("uk","uk")
map.set("in","india")
console.log(map);
for (const key in map) {
    console.log(key);
    
    
}
// maps are not iteratable
