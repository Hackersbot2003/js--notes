//while loop

// while (condition) {
    
// }

let i = 0
while (i<=10) {
    console.log(`value of index is ${i}`);
    i+=2;
    
}

// value of index is 0
// value of index is 2
// value of index is 4
// value of index is 6
// value of index is 8
// value of index is 10

let myArray =["flash","batman","spider"]
let arr =0
while (arr<myArray.length) {
    console.log(myArray[arr]);
    arr+=1
    
    
}
// flash
// batman
// spider

//--------------DO WHILE LOOP---------
let score =1
// do {
    
// } while (condition);

do {     
    console.log(`score is ${score}`);
    score++                                //kaam pehle hota hai fir condition check hoti hai
    
} while (score<=2);
// score is 1
// score is 2

do {     
    console.log(`score is ${score}`);
    score++                                //kaam pehle hota hai fir condition check hoti hai
    
} while (score<1);
//score is 1