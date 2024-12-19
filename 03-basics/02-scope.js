//global scope  ,{block scope}

//---------block scope
let a = 300;
const b = 100;
//-----------global scope
var c = 200;
d = 400;

if (true) {
  let a = 3;
  var c = 2;
  const b = 1;
  d = 10;
}

console.log(a); //300
console.log(b); //100
console.log(c); //2
console.log(d); //10

//---------------------nested scope------------
function one(){
    const username="hitesh"
    function  two(){
        const website ="youtube";
        console.log(username);
    }
    //console.log(website);                      error  not accessible

    two()                //hitesh
    
}

one()

//=======================
if (true){
    const person ="vinay"
    if (person==="vinay"){
        const surname = "patidar"
        console.log(person+surname);                 //vinaypatidar
        
    }
    //console.log(surname);                //scope not accessible
    
}
//console.log(person);                 //scope not accessible

//++++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++

function addOne(num){
    return num+1
}
addOne(5)


const addTwo =function(num){                         //function as expression
    return num+2
}
addTwo(10)


//addTwo1(10)
const addTwo1 =function(num){                         //Cannot access 'addTwo1' before initialization
    return num+2
}
