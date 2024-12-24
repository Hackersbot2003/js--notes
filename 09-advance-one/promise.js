//promise as a object

//creating promise
const promiseone = new Promise(function (resolve, reject) {
  //do asnc task
  //DB calls,cryptography,network
  setTimeout(function () {
    console.log("async taskis completed");
    resolve(); //resolve and .then have direct connection so we have to connect them
  }, 1000);
});
//consuming promise
promiseone.then(function () {
  console.log("promise consumed");
});

//firt it is resolved and then consumed afterwards

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  });
}).then(function () {
  console.log("async 2 resolved");
});
//jaise hi resolve hoga fir .then evaluate hoga

const promisethree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chaii", email: "123@gmail" }); //providing values to .then
  }, 1000);
});

promisethree.then(function (user) {
  //fetching values of resolve
  console.log(user.username);
});

const promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "vinay", email: "123@gamil" });
    } else {
      reject("ERROE : something went wrong");
    }
  }, 1000);
});
promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    //chaining rule .then jo value return kar raha tha v second vala then use kar raha hai
    console.log(username);
  })
  .catch(function (error) {
    //.catch is for rejection
    console.log(error);
  })
  .finally(() =>
    console.log("finally the error is either resolved or rejected")
  );

// sync task 2
// async 2 resolved
// async taskis completed
// promise consumed
// chaii
// { username: 'vinay', email: '123@gamil' }
// vinay
// finally the error is either resolved or rejected

const promisefive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;

    if (!error) {
      resolve({ username: "javascript", email: "098@gmail" });
    } else {
      reject("ERROR: js  error");
    }
  }, 1000);
});
//lets handle it in new way in async and await
 //they wait for some time forwork to be done and if not they ive error

async function consumePromisFive(){
   try {
    constresponse= await promisefive
    console.log(Response);
   } catch (error) {
    console.log("henceERROr");
    
   }
    
}
consumePromisFive()




// async function getallusrs(){
//     try {
//         const response = await fetch("https://api.github.com/users/hiteshchoudhary")
//     const data = await response.json()
//     console.log(data);
    
//     } catch (error) {
//       console.log("e",error);
          
//     }
// }
// getallusrs()
// koi bhi data nahi aaay ,try and catch se bhi nah aaya
//response.json ko bhi await karana padega due to heavy data
//hence we get it and also method 2

fetch("https://api.github.com/users/hiteshchoudhary").then((response)=>{
    return response.json()
})
.then((data)=>{
      console.log(data);
      
}).catch((error)=>{
    console.log("error caused in fetch");
    
})
//fetch makes priority task queue
//fetch queue-microtask queue-prorityqueue
