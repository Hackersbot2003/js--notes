//markdownfile
 # project related to 
 
 ## project link
 [click here](https://stackblitz.com/edit/dom-project-chaiaurcode-jtaazhha?file=1-colorChanger%2Fchaiaurcode.js)

 ## project 1 color changer

 ```javascript
 const button = document.querySelectorAll(".button")
const body = document.querySelector("body")

button.forEach(function(button){
  console.log(button)
  button.addEventListener("click",function(e){
         console.log(e)
         console.log(e.target)
         switch (e.target.id){
           
           case "grey":
               body.style.backgroundColor ="grey"
               break
           case "yellow":
               body.style.backgroundColor ="yellow"
               break
           case "white":
               body.style.backgroundColor =e.target.id
               break
           case "blue":
               body.style.backgroundColor =e.target.id
               break
              
         }


  })
})
 ```

 ## project 2 - BMI calculate
 ```javascript
 const form = document.querySelector("form")
//this usecase will give you empty
//const height =parseInt(document.querySelector("#height"))
form.addEventListener("submit",function(e){
  e.preventDefault();
  //The preventDefault() method in JavaScript is used to stop the default action of an event from occurring. It is commonly used to override the browser's default behavior in response to specific events like form submissions, link clicks, or key presses.


  const height =parseInt(document.querySelector("#height"). value)
  //parseInt -parse a string and convert it into an integer
  const weight =parseInt(document.querySelector("#weight").value)
  const result =document.querySelector("#results");

  if (height=="" ||height<0 || isNaN(height)){
    result.innerHTML=`please enter valid height ${height}`
  }else if (weight=="" ||weight<0 || isNaN(weight)){
    result.innerHTML=`please enter valid weight ${weight}`
  }else {
    const bmi=(weight/((height*height)/10000)).toFixed(2)
      
    //result.innerHTML=`<span>${bmi}</span>`
    
      if (bmi< 18.6){
          result.innerHTML=`<span>${bmi} underweignt </span>`
      }else if (bmi>24.9){
          result.innerHTML=`<span>${bmi} overweignt </span>`
      }else (
     
          result.innerHTML=`<span>${bmi} all ok</span>`
      )
      

           
           
    
    
  }



})
 ```


 ## project 3 digital clock
 ```javascript
 const clock =document.getElementById("clock")
//const clock=document.querySelector("#clock")



setInterval(function(){
  let date = new Date()
  //console.log(date)
  clock.innerHTML=date.toLocaleTimeString()
},1000)

//setInterval(function(){},1000)
```

## project 4 