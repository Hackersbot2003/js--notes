//declaring objects
const tinderUse= new Object()          //singelton objects
const tinderUser = {}                  //non singleton

tinderUser.id="1245"
tinderUser.name ="vinay"
tinderUser.isLoggedIn = false
console.log(tinderUser)               //{ id: '1245', name: 'vinay', isLoggedIn: false }

//objects ke andar ojects
const regularUse ={
    email:"abc@gmail.com",
fullName:{
    userFullNmae:{
        firstName:"vinay",
        lastName:"patidar"
    }
}
}
console.log(regularUse.fullName.userFullNmae.firstName);


//combine/merge objects
const obj1={1:"a",2:"b"}
const obj2 ={2:"c",4:"d"}

const obj3 = {obj1,obj2}  //problem -object ke andar object
console.log(obj3);               //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'c', '4': 'd' } }

const obj4 = Object.assign({},obj1,obj2)          //Object.assign(target,value)
console.log(obj4);                                //{ '1': 'a', '2': 'c', '4': 'd' }

const obj5 ={...obj1,...obj2}                 //spread method max use
console.log(obj5);                          //{ '1': 'a', '2': 'c', '4': 'd' }


//*************database se jab value aati hai iss format me */
const users =[
    {
        id:1,
        emal:"vinay@gmail"
    },{                                           //csv-comma seprated values

    },
    {

    }
]

 console.log(users[0].emal)                 //vinay@gmail.com

 console.log(tinderUser)
 console.log(Object.keys(tinderUser));               //[ 'id', 'name', 'isLoggedIn' ]
 console.log(Object.values(tinderUser));             //[ '1245', 'vinay', false ]
 //gives result in form of array
 console.log(Object.entries(tinderUser));           //[ [ 'id', '1245' ], [ 'name', 'vinay' ], [ 'isLoggedIn', false ] ]


 //if value does not exist then it crashes
 //always ask about value
 console.log(tinderUser.hasOwnProperty("isLoggedIn"));         //true 
 


 //********destructuring */
 const course ={
    courseName:"js in hindi",
    price:"333",
    courseInstructuor:"hitesh"

 }
 //course.courseInstructuor
 //if we want to extract mulltiple values

 const {courseInstructuor} =course
 console.log(courseInstructuor);                 //hitesh

 //if we want to assign our own modified name
 const {courseInstructuor:instructor} =course
 console.log(instructor);                        //hitesh


// in react we destructure
// const navbar =({company}) =>{              //(props.company) == ({company})
    
// }
// navbar(company="hitesh")


//api gives value in form of json
 //json data
//  {
//     "name":"vinay",
//     "coursename":"js in hindi",
//     "price":"100"
//  }

//api in form of array
// [
//     {},
//     {},
//     {}
// ]

//random user generator         //json formatter