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

## project 4  guess number
```javascript
let randomNumber=parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#subt')
const userInput =document.querySelector('#guessField')
const guessSlot =document.querySelector('.guesses')
const remaining =document.querySelector('.lastResult')
const lowOrHi =document.querySelector('.lowOrHi')
const startOver =document.querySelector('.resultParas')

const p = document.createElement("p");

let prevGuess =[]
let numGuess =1;

let playGame = true

if (playGame){
  submit.addEventListener("click",function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value);
    console.log(guess)
    validateGuess(guess)



  })
}
function validateGuess(guess){
  if (isNaN(guess)){
    alert('please enter a valid number')

  }else if (guess <1 ){
    alert("please enter number greater than 1")
  }else if(guess>100){
    alert("please enter a number less than 100")
  }else {
    prevGuess.push(guess)
    if (numGuess ==11){
      displayGuess(guess)
      displayMessage(`game over the random number was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}

function checkGuess(guess){
  if (guess == randomNumber){
    
    displayMessage("you guessed it right")
    endGame()
  }else if (guess> randomNumber){
    displayMessage("you guessed it too HIGH")
  }else if (guess <randomNumber){
    displayMessage("you guessed it too LOW")
  }
}

function displayGuess(guess){
  userInput.value=""
  guessSlot.innerHTML += `${guess},`
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `${message}`
}
function endGame(){
  userInput.value=""
  userInput.setAttribute("disable","")               //we have to give key value pair
  p.classList.add("button")
  p.innerHTML =`<h2 id="newGame">start new game</h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()
}
function newGame(){
   const newGameButton = document.querySelector("#newGame")
   newGameButton.addEventListener("click",function(e){
    randomNumber=parseInt(Math.random()*100 + 1)
    prevGuess =[]
    numGuess =1;
    guessSlot.innerHTML=""
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute("disable")  
    startOver.removeChild(p)  



     playGame = true

   })
}
```