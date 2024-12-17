const name ="vinay"
const repoCount =50

console.log(name+repoCount+"value")  //did not preferrable

//use backtics
console.log(`my name is ${name},and my repocount is ${repoCount}`);      //string interpolation

//new way of declaring string
const gameName = new String("vinaypatidar")
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf("t"));
//go through strings methods on browser

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

//trim

const newStringOne = "    vinay      "
console.log(newStringOne.length);
console.log(newStringOne.trim().length);


//replace
const url = "https://vinaypatidar%20123/gmail.com"
console.log(url.replace("%20","-"));

console.log(url.includes("vinay"));  

console.log(gameName.split("a",2) );     //[ 'vin', 'yp' ]
console.log(gameName.split("a" ))  //[ 'vin', 'yp', 'tid', 'r' ]
 //split("seperator","limit")
  







