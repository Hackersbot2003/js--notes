const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter);



// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

const chai = {
    name:"ginger chai",
    price:"250",
    isAvaliable:true,

    orderchai:function(){
        console.log("chai nahi bani");
        
    }

}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
Object.defineProperty(chai,"name",{
    writable: false,
   enumerable: true,
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// {
//     value: 'ginger chai',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }

for (let [key,value] of Object.entries(chai)){
       console.log(`${key},${value}`);
       
}
// price,250
// isAvaliable,true
// orderchai,function(){
//         console.log("chai nahi bani");

//     }
// code fatt gaya hai hume sirf key value pair hi chaiye tha

for (let [key,value] of Object.entries(chai)){
   if (typeof value!== "function") {
    console.log(`${key},${value}`);
    
    
   }
}
//     when enumerable:true
// name,ginger chai
// price,250
// isAvaliable,true

//when enumerable is false
// price,250
// isAvaliable,true