//major use -------------foreach
const coading =["js","python","ruby","cpp"]
coading.forEach(function(val){                     //used callback function
    console.log(val);
    
})

//use arrow function
coading.forEach((item)=>{
    console.log(item);
    
})

//giving refrence

function printme(item){
    console.log(item);
    
}
coading.forEach(printme)

//giving multiple parameters
coading.forEach((item,index,arr) =>{
    console.log(item,index,arr);
    
}
)
// js 0 [ 'js', 'python', 'ruby', 'cpp' ]
// python 1 [ 'js', 'python', 'ruby', 'cpp' ]
// ruby 2 [ 'js', 'python', 'ruby', 'cpp' ]
// cpp 3 [ 'js', 'python', 'ruby', 'cpp' ]

//objects inside array
const myObj =[
    {languagename:"javascript",
        filename:"js"
    },
    {languagename:"python",
        filename:".py"
    },
    {languagename:"c++",
        filename:".cpp"
    }
]

myObj.forEach((item)=>{
      console.log(item.filename);
      
})
//mainly used to fetch out values which come from databases
