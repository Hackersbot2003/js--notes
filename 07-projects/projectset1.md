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