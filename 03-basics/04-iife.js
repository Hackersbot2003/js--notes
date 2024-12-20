//() paranthesis lagane par ek block ban jata hai usspar bhi kaam kia ja sakta hai

//------Imediately Invoked Function Expression (IIFE)   --------as the file starts the function immediately invoked
//example - chai()  ,same as (function)()

//global scope ke pollution ko hatane ke liye iife ka use karte hai
(function chai(){
    //named  IIFE
    console.log("DB connected")
})();             //add ; so that the function which invokes has to stop and also when we define 2nd iife it does not cause error
(()=>{
    console.log("DB conncted twice");
    
});
((name)=>{
    //parameter passed
    console.log(`DB connected.${name}`)        //DB connected.vinay
})("vinay")



// -------refer video 25 for execute code and call stack
