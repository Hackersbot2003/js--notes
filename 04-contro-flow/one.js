//if

if(true){

}
const isUserloggedIN =true
if (isUserloggedIN){

}
//comparision operator
// <, >, <= ,>= ,== ,!= ,===, !==
// =(assigns value),   ==(compare value) , ===(strict check it checks type also)

// if () {

// }else{

// }

//implicit scope
const balance =2000
if (balance<40) console.log("test"),console.log("test2");
//immature code


//nesting
if (balance<500){
    console.log("less than 500");
    
}else if (balance<100){
    console.log("less than 100");
    
}else if (balance <0){
    console.log("nil");
    
}else{
    console.log("paise wale log");
    
}

//logical operator --> and ,or

// and ->  &&
if (2==3 && 3<=4){console.log("truee");
}

// or -> ||
if (2==3 || 3<=4){console.log("truee");
}