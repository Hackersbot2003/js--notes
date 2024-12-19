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
    if (username == undefined)                        //if ke andar jayega hi nahi
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
 function calculateCartPrice(num1){
    return num1
 }

 function calculateCartPrice(...num1){                   //rest operator =>packs all item in a bundle(array)
   return num1                                   //[100,200,300,400]
}

function calculateCartPrice(val1,val2,...num1){                   //rest operator =>packs all item in a bundle(array)
   return num1                                    //[300,400]
}

 console.log(calculateCartPrice(100,200,300,400));
 //----------------------------------------------------------------------
 //defining objects

 const user ={
   name:'vinay',
   price:99
 }

 function handleObject(anyobject){
   console.log(`username is ${anyobject.name} and the price is ${anyobject.price}`)
 }
 handleObject(user)                   //username is vinay and the price is 99
 handleObject({name:"sam",
   pric:100
 })                                      //username is sam and the price is undefined
 //check typesafety        ,easy in typescript
 //------------------------------------define array-----------
 const myArr =[200,300,400,500]
 function handleArray(getArray){
   return getArray[1]
 }

console.log( handleArray(myArr));                    //300
