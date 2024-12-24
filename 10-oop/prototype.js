let myname ="vinay           "
console.log(myname.length);

//myname.trim().length  == true length


let myhero = ["thor","spiderman"]
let heropower = { 
    thor:'hammer',
    spiderman:'sling',

    getSpiderPower: function(){
        console.log(`spier power is ${this.spiderman}`);
        
    }
}
//object ke andar agarkuch superpower daal di to wo array ,string,aur functions me bhi add ho jayegi



//heropower.vinay()         //heropower.vinay is not a function

Object.prototype.vinay = function(){
    console.log("vinay is present in al objects");
    
}
heropower.vinay()
//to fir to myhero ke pass bhi ye power honi chaiye
myhero.vinay()

//all ok agar power object ko di to wo sab ke pass chali jati hai
//what if agar power kisi ek ko de to kya wo object ko bhi milegi

 Array.prototype.heyhitesh = function(){
    console.log("prototype provided in array");
    
 }
 myhero.heyhitesh()
 //heropower.heyhitesh()       power sirf array me hi crete hui hai object me nahi





const user ={
    name:"chaii",
    email:"123@gamil"
}

 //-----------------INHERITENCE
 const teeacher =  function(){ 
    makeVideo:true
 }
 const TeachUpsupport = {
    inVisible: false
 }
 const TASupport = {
    makeAssign:"js assignment",
    fullTime:true,
   __proto__ :TeachUpsupport            //prototype refrence to teachupsupport

}
//direct giving prototype
teeacher.__proto__= user
//old methos

//----------------NEW Methods
//kiski property kiske andar inject karni hai
Object.setPrototypeOf(TeachUpsupport,teeacher)                 //teacher ki teachupsupport me


let anotherusername = "chaiaurcode                     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    
    console.log(`true length is ${this.trim().length}`);
    
    
    
}
console.log(anotherusername.length);
anotherusername.trueLength()
// 32
// chaiaurcode
// true length is 11

"hitesh".trueLength()
"h                    ".trueLength()

