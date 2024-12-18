const score =400
console.log(score);        //400

//define anything uskig {new} keyword
const balance = new Number(100)
console.log(balance);                  //[Number: 100]
console.log(balance.toString());      //100=>string            now we can use strings properties
console.log(balance.toString().length); //3
console.log(balance.toFixed(2));          //100.00

const otherNumber =123.987764
console.log(otherNumber.toPrecision(4));          //124.0

const hundereds =100000000000000
console.log(hundereds.toLocaleString());            //100,000,000,000,000         according to us standards
console.log(hundereds.toLocaleString("en-In"));         //10,00,00,00,00,00,000


//**********math*************************
console.log(Math);
console.log(Math.abs(-4));         //4
console.log(Math.round(2.998));    //3
console.log(Math.ceil(3.889));         //next high value   4
console.log(Math.floor(3.99));            //low value    3

console.log(Math.random());         //random value between 0 and 1
console.log(Math.random()*10);     //between 0 and 10
console.log(Math.floor(Math.random()*10));  //if value is 0.004 it returns 0 ,to avoid it
console.log((Math.random()*10 )+1);    //min value is 1

const min =10
const max = 20
 
//formula  (math.random()*(max-min+1)) +min
console.log(Math.floor( (Math.random()*(max-min+1)))+min);                    //formula        learn it


