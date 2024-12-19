const user = {
    username: "vinay",
    price:33,

    //this keyword for current context
    WelcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
    },

    
    

}
user.WelcomeMessage()           //vinay,welcome to website
user.username="sam"            //context value changed
user.WelcomeMessage()           //sam,welcome to website 

console.log(this);           // {}       because here global scope is empty
//in console "this" returns =>window object ,because there window is global variable

//----------------------------------------------------------------

function chai(){
    console.log(this); //gives multipe values/props
    let username ="hitesh"
    console.log(this.username);       //undefined
    
    
}
chai()

//----------------declaring arrow function--------
const chai1 =function(){
    let username ="vinay"
    console.log(this.username); //undefined
    
}
const chai2 = ()=>{
    let username ="patidar"
    console.log(this.username);
    console.log(this);                //undefined
    
}
//diffrence between arrow and normal function
//basic arrow function
const addTwo =(num1,num2) =>{
    return num1 +num2
}
console.log(addTwo(10,20));

//implicit return
const addTwo1 =(num1,num2)=> num1+num2 
console.log(addTwo1(1,2));                         //3
const addTwo2 =(num1,num2)=> (num1+num2 )
// {} curly bracket ke andar "return" keyword dena padega
//() bracket me return ki jarurat nahi
//object ko bhi return karne ke liye ()use kare
const addTwo3 =(num1,num2)=> ({name:"hii"} )