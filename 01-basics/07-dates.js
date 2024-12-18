//dates 
let myDate =new Date()
console.log(myDate);               //2024-12-18T03:22:48.904Z
console.log(myDate.toString());     //Wed Dec 18 2024 03:22:48 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());    //Wed Dec 18 2024
console.log(myDate.toLocaleString());     //12/18/2024, 3:26:17 AM


console.log(typeof myDate);            //object


//defining dates
let myCreatedDate = new Date(2023,0,23)           // month starts from 0
let myCreatedDate1 = new Date(2023,0,23 ,5,3)
console.log(myCreatedDate1.toLocaleString());           //1/23/2023, 5:03:00 AM
 

console.log(myCreatedDate.toDateString());     //Mon Jan 23 2023

let myCreatedDate2 = new Date("2023-01-14")       //yy-mm-dd   
console.log(myCreatedDate2.toLocaleString()); 
let myCreatedDate3 = new Date("10-01-2023")         //dd-mm-yy


//++++++++++++++++++++timestamp++++++++++++++++++
let myTimeStamp = Date.now()
console.log(myTimeStamp);                 //it gives time in  milisecond 1734493066956
//date is an object so we can fetch out time from it
console.log(myCreatedDate.getTime());       //1674432000000
 

//converting to seconds
console.log(Math.floor(Date.now()/1000));      //1734493330

console.log(myDate.getHours());            //3

 
//getting multiple property and customize it
console.log(myDate.toLocaleString('default',{
    weekday:"long",                                 //wednesday
    
}));
