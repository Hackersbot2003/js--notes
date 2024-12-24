const user ={
    username: "vinay",
    logincount:2,
    signedIn :true,

    getusersdetails:function(){
        console.log("got value from user");
        //console.log(`${username}`)                //error
        console.log(`${this.username}`);

        console.log(this);
        // {
        //     username: 'vinay',
        //     logincount: 2,
        //     signedIn: true,
        //     getusersdetails: [Function: getusersdetails]
        //   }
        

        
    }
}
console.log(user.username);
console.log(user.getusersdetails());
console.log(this);          //{}
//in browser we have window object in global scope but here we hav nothing therefor here the result is empty array



//const promiseone = new Promise()
//new keyword is actually a constructor function ,it allows to make multiple instances from a single object

function user1(username,logincount,isLoggedIn){
     this.username= username;
     this.logincount = logincount;
     this.isLoggedIn = isLoggedIn;

     return this
}

// const userone = user1("vinay",5,true)
// const usertwo =user1("chaii",3,false)
// console.log(userone);
//the code overwrites
// username: 'chaii',
// logincount: 3,
// isLoggedIn: false

          //after writing NEW keyword
const userone = new user1("vinay",5,true)
const usertwo =new user1("chaii",3,false)
console.log(userone);
 console.log(usertwo);
// user1 { username: 'vinay', logincount: 5, isLoggedIn: true }
// user1 { username: 'chaii', logincount: 3, isLoggedIn: false }

//first new object is created known as instance
//cnstructor function is called due to new keyword
//it packsthe object and return it ,this keyword injects inside it

console.log(userone.constructor);
//[Function: user1]
