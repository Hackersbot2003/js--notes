const userEmail ="vinay@gmail"
if (userEmail){
    console.log("got email");
    
}else{console.log("not get email");
}


//---------falsy value-----------
// false,0,-0,BigInt 0n , "", null , undefined ,NaN
//except all are TRUTHY value
//these are also truthy values
// "0" ,"false" ," ",[],{}, function(){}

//for checking array
const myArr=[]
if (myArr.length  === 0){
    console.log("array is empty");
    
}

//for objects
const myObj ={}
if (Object.keys(myObj).length === 0){

}

//  false == 0                   true
//  false == ""                  true

//  0 == ""                       true


//----nullish coalescing operator (??) : null ,undefined

let val1 ;
val1 =5 ?? 10                      //ya to 5 ya to 10
console.log(val1);            //5
val2 =null??10
console.log(val2);             //10
val3 =undefined??15
console.log(val3);           //15

val4 = null ?? 10??20
console.log(val4);                  //10

//---------terniary operator------
// condition ? true :false
const price =100
price >80 ? console.log("greater than 80"):console.log("less than 80");             //greater than 80





