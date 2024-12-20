//for
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let index = 0; index < 10; index++) {
    const element=index;
    console.log(element);
    
    
}

//console.log(element);                 not accessible
//loop in loop
for (let i = 0; i < 10; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 0; j < 10; j++) {
        //console.log(`inner loop value is ${j} , and inner loop is ${i}`);
        //console.log(`${i}*${j}=${i*j}`);         //all tables printed from 0 to 9
        
        
    }
    
    
}

// outer loop 0
// inner loop value is 0 , and inner loop is 0
// inner loop value is 1 , and inner loop is 0
// inner loop value is 2 , and inner loop is 0
// inner loop value is 3 , and inner loop is 0
// inner loop value is 4 , and inner loop is 0
// inner loop value is 5 , and inner loop is 0
// inner loop value is 6 , and inner loop is 0
// inner loop value is 7 , and inner loop is 0
// inner loop value is 8 , and inner loop is 0
// inner loop value is 9 , and inner loop is 0
// outer loop 1
// inner loop value is 0 , and inner loop is 1
// inner loop value is 1 , and inner loop is 1
// inner loop value is 2 , and inner loop is 1
// inner loop value is 3 , and inner loop is 1
// inner loop value is 4 , and inner loop is 1
// inner loop value is 5 , and inner loop is 1
// inner loop value is 6 , and inner loop is 1
// inner loop value is 7 , and inner loop is 1
// inner loop value is 8 , and inner loop is 1
// inner loop value is 9 , and inner loop is 1
// outer loop 2.....................

let myArray =["flash","batman","spider"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
    
}

//--------break and continue
for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log(`${index} detected`);
        break                            //loop ko wahi rok deta hai
        
        
    }
    console.log(`value of i is ${index}`);
    

    
    
}

// value of i is 0
// value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// 5 detected

for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log(`${index} detected`);
        continue                         //ek condition ko maaf kar do
        
        
    }
    console.log(`value of i is ${index}`);
    

    
    
}

// value of i is 0
// value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// 5 detected
// value of i is 6
// value of i is 7
// value of i is 8
// value of i is 9
// value of i is 10
// value of i is 11
// value of i is 12
// value of i is 13
// value of i is 14
// value of i is 15
// value of i is 16
// value of i is 17
// value of i is 18
// value of i is 19
