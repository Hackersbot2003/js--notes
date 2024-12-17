//    >,<,>+,<=,==,!=
     //make sure dataypeshould be same before comparision
//typescript doesnot allow the number of two different datatype to be compared
console.log("2">1);    //true
             //unpredictable result
console.log(null>0)     //false
console.log(null>=0)     //true     0>=0
console.log(null==0)     //false


//the reason is that an equality checks == and comparision ><,<=>= works diffrently
//comparisins converts null to a nmber ,treating it as 0.that's why null>=0 is true and null>0 is false
//false
console.log(null>=1)     //false  0>=1


console.log(undefined>0)     //false
console.log(undefined>=0)     //false    0>=0
console.log(undefined==0)   //false


//strict check     - checks values with its  datatypes
// ===
console.log("2"===2)       //false