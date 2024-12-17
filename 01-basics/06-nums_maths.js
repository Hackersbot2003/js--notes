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



