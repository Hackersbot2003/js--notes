const coading =["js","python","ruby","cpp"]

//storing in variable
const values =coading.forEach((item)=>{
    console.log(item);
    return item
    
})
console.log(values);        //undefined
//foreach does not return any value

//-----------------FILTER--------------------
const mynums =[1,2,3,4,5,6,7,8,9]
const newnums = mynums.filter((num)=>num>4)      //filter returns the values 
console.log(newnums);
//[ 5, 6, 7, 8, 9 ]

const newnums1 = mynums.filter((num)=>{          
     num>4
    
}) 
console.log(newnums1);
//[]
//use return keyword  ;return num>4                                  //jab scope start kar dete hai to return dena padata hai
//[ 5, 6, 7, 8, 9 ]

// method two
const newnumss =[]
mynums.forEach((nums)=>{
    if (nums>4){
        newnumss.push(nums)
    }
})
console.log(newnumss);
//[ 5, 6, 7, 8, 9 ]


