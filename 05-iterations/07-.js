const myNums = [1,2,3,4,5,6,7,8,9]


const newNums =myNums.map((num)=>num +10)     //map returns value
console.log(newNums);
  
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19
//   ]

const newNum1s =myNums.map((num)=>{num +10}) 
console.log(newNum1s);
// [
//     undefined, undefined,
//     undefined, undefined,
//     undefined, undefined,
//     undefined, undefined,
//     undefined
//   ] 
const newNum2 =myNums.map((num)=>{ return num +10}) 
console.log(newNum2);
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19
//   ]

//----------------------chaining--------------
const newnum3 = myNums
                  .map((num)=>num*10)         //[10,20,30,40,50,.....]
                  .map((num)=>num+1)           //[11,21,31,41,..........]
                  .filter((num)=>num>=40)         //[ 41, 51, 61, 71, 81, 91 ]
console.log(newnum3);
