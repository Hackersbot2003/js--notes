//arrays
// collection of multiple items inside an a variable

//defining array
const MyArr =[1,2,3,4]
const myHero =["spide","panther"]
const myarr2 = new Array(1,2,3,"vinay","palash")

//access myarr[index]
console.log(MyArr[1]);

//array makes shallow copy =>share same refrence point   ,,change in original copy
//not a deep copy


//array methods
myarr2.push(6)      // add at last
console.log(myarr2);         //[ 1, 2, 3, 'vinay', 'palash', 6 ]
myarr2.pop()               //delete from last
console.log(myarr2);          //[ 1, 2, 3, 'vinay', 'palash' ]

myarr2.unshift(9)
console.log(myarr2);          //[ 9, 1, 2, 3, 'vinay', 'palash' ]  
//unshift add elements at start  ,it changes thhhhhhhhindex of all elments ,better optimisation nahi hai

myarr2.shift()           //remove first element
console.log(myarr2);

console.log(myarr2.includes(5));         //boolean value - false
console.log(myarr2.indexOf(5));            //- 1  value not exists

const newArr = MyArr.join()                      //convert array to string
console.log(MyArr);
console.log(newArr,typeof newArr);         //1,2,3,4 string


//slice and splice
 
console.log("a",MyArr);
const myn1 =MyArr.slice(1,3)        //starts from 1 upto 3 but 3 not included
console.log(myn1);
console.log("b",MyArr);
// a [ 1, 2, 3, 4 ]
// [ 2, 3 ]
// b [ 1, 2, 3, 4 ]


console.log("a",MyArr);
const myn2 =MyArr.splice(1,3)        //starts from 1 upto 3 but 3  included  ,changes original array
console.log(myn2);
console.log("b",MyArr);
// a [ 1, 2, 3, 4 ]
// [ 2, 3, 4 ]
// b [ 1 ]
//manipulates original array
