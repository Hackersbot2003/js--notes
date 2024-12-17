// //we dont know the type of value while working on backend
// let score=33
// console.log(typeof score);
// console.log(typeof(score));            //like a method
//               //output-number

// let score1="33"
// console.log(typeof score1)

// let valueInNumber = Number(score1)              //number
// console.log(typeof valueInNumber)
  
//    //what if 
//    let score2 = "33abc"        //can it be coonverted to number and what is its value 
//    console.log(typeof score2)
//    console.log(typeof Number(score2))        //hence it is converted to number ,what is its value??
//    console.log(Number(score2))                 //NaN
// console.log(Number(score))               //33

// let score3 = 33
// let score4 = "33abc"
// let score5 = true
// let score6 = null
// let score7 = undefined
// console.table([typeof score3,typeof score4,typeof score5,typeof score6,typeof score7])
// console.table([Number(score3),Number(score4),Number(score5),Number(score6),Number(score7)])
       
// // │ (index) │ Values      │
// // ├─────────┼─────────────┤
// // │ 0       │ 'number'    │
// // │ 1       │ 'string'    │
// // │ 2       │ 'boolean'   │
// // │ 3       │ 'object'    │
// // │ 4       │ 'undefined' │
// // └─────────┴─────────────┘
// // ┌─────────┬────────┐
// // │ (index) │ Values │
// // ├─────────┼────────┤
// // │ 0       │ 33     │
// // │ 1       │ NaN    │
// // │ 2       │ 1      │
// // │ 3       │ 0      │
// // │ 4       │ NaN    │
// // └─────────┴────────┘        




// //"33 " = 33
// //"33abc"=> NaN
// // true =>1 ;fale=>0
            


          //convert to boolean
    let num=1
    let num1="abh"
    let num2=true
    let num3=""
    let num4=null 
    let num5=undefined
    console.table([Boolean(num),Boolean(num1),Boolean(num2),Boolean(num3),Boolean(num4),Boolean(num5)])
    // ┌─────────┬────────┐
    // │ (index) │ Values │
    // ├─────────┼────────┤
    // │ 0       │ true   │
    // │ 1       │ true   │
    // │ 2       │ true   │
    // │ 3       │ false  │
    // │ 4       │ false  │
    // │ 5       │ false  │
    // └─────────┴────────┘


          //convert to string

          let str=3
          console.log(typeof str)                         //number
          console.log(typeof String(str))                    //string