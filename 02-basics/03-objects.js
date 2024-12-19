//singelton
//object create =
//object.create              constructer method



//object literals
const jsUser ={
    name:'vinay',
    "full-name":"patidar",
    age:18,
    location:"jaipur",
    email:"vinay@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["mon","tue","wed"],
    mySym:"key1"

}
//array can be accessed through index only but object can be accesed through both key and value

//accesiing objects           acess through . ans [] ,symbol can only be accesed through []
console.log(jsUser.name)
//console.log(jsuser[name]);      we have to define it in string
console.log(jsUser["name"]);

console.log(jsUser["full-name"]);          //only one way if we predefined it string
//console.log(jsUser."full-name");        cannot use it


const mySym = Symbol("key1")
console.log(jsUser.mySym,typeof jsUser.mySym);     //key1 string
console.log(jsUser);
//   mySym: 'key1'
const newjsUser = {
[mySym]:"key1"
}
console.log(newjsUser[mySym],typeof newjsUser[mySym]);        //key1 string
console.log(newjsUser);
//{ [Symbol(key1)]: 'key1' }

//changing objects value
jsUser.email="patidar@gmail.yahoo"
//freezing=>fixing
//Object.freeze(jsUser)
jsUser.email="jec@gmail"
console.log(jsUser.email);          //patidar@gmail.yahoo

//in js functions can be treated as variables
jsUser.greetings= function(){
console.log("hello js user");

}
console.log(jsUser.greetings);         //undefined   because of object is freeze
//[Function (anonymous)]
jsUser.greetings2= function(){
console.log(`hello js user,${this.name}`);      //string interpolation

}
console.log(jsUser.greetings()); 
console.log(jsUser.greetings2()); 
//  hello js user
//  undefined
//  hello js user,vinay
//  undefined