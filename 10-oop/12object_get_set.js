//geters and setters in objects

//private properties  _ underscore like _email
const user ={
    _email:"abgsc@123",
    _password:"asdc",

   get email(){                              //email is a property 
    return this._email.toUpperCase( )
    },
   set email(value){
    this._email=value

   }

}

const tea = Object.create(user)
console.log(tea.email);
