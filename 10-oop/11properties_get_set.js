function user(email,password){
    this._email=email;
    this._password=password

    Object.defineProperty(this,"email",{
        get: function(){
            return this._email.toUpperCase()
        },
        Set: function(value){
            this._email=value
        }
    })

    Object.defineProperty(this,"password",{
        get: function(){
            return this._password.toUpperCase()
        },
        Set: function(value){
            this._password=value
        }
    })
}

const chai = new user("chai2@sad","asdfwe231")
console.log(chai.email);
