//  function  name(){

//  }
 
 
 function sayMyName(){
    console.log("v");
    console.log("i");
    console.log("n");  
 }

 sayMyName         //function refrence
 sayMyName()         //function executes



//------------------------------------------------------------

 function addTwoNumbers(number1,number2){                            //number 1&2 are =>parameters
    console.log(number1+number2);
    
 }

 addTwoNumbers()                       //NaN
 addTwoNumbers(3,4)                    //7
 addTwoNumbers(3,"4")                   //34                       //3&4 are arguments 
 const result = addTwoNumbers(3,"a")                  //3a
 addTwoNumbers(3, null)               //3   

 console.log(result);                      //undefined
 
 //------------------------------------------

 function addTwoNumbers(number1,number2){   
    let result1 = number1+number2
    return result1;
    //method-2     return number1+number2


    console.log("hi");           //unreachebale code , return ke baad function koi kaam nahi karega
    
 }
 console.log(addTwoNumbers(1,1));       //directly retunr ko print karwaya
 
 const newresult = addTwoNumbers(3,4)        //return karne ke bad aap kisi variable me store kar sakte ho
 console.log(newresult);

 //------------------------------------------
 function loginUserMessge(username){
    return`${username} has logged in`
 }
 loginUserMessge("vinay")                   //print nothing
console.log( loginUserMessge("patidar"));   //prints
name =  loginUserMessge("vinaypatidar")       //store in variable
console.log(name);           

console.log(loginUserMessge());             //undefined has logged in
//if no argumnet => undefined
//----------------------------------
function loginUserMessge(username){
    if (username== undefined)
        {
            console.log("enter username");
    }
    return`${username} has logged in`
 }
 console.log(loginUserMessge());
 
//  enter username
// undefined has logged in

function loginUserMessge(username){
    if (username == undefined)
        {
            console.log("enter username");
            return
    }
    return`${username} has logged in`
 }
 console.log(loginUserMessge());
//  enter username
// undefined
//----------predefined value ------------------
function loginUserMessge(username ="vinay"){
    if (username == undefined)
        {
            console.log("enter username");
            return
    }
    return`${username} has logged in`
 }
 console.log(loginUserMessge());
 //vinay has logged in
 //---------------------giving values in predefined------------
 function loginUserMessge(username ="vinay"){
    if (username == undefined)
        {
            console.log("enter username");
            return
    }
    return`${username} has logged in`
 }
 console.log(loginUserMessge("sam"));
 //sam has logged in

 //---------------------------------------------shooping cart-------------------
 function calculateCartPrice(...num1){
    return num1
 }

 console.log(calculateCartPrice(100,200,300,400));
 