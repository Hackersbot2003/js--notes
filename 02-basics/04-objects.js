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
 