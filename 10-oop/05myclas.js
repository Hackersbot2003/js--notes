// ES6

class user {
    constructor(username,email,passwd){
        this.username =username,
        this.email=email,
        this.passwd=passwd
    }
    encryptPassword(){
        return `${this.passwd}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }

}
const chai = new user("chai","234@gami","0987")
console.log(chai.encryptPassword());
console.log(chai.changeusername());

//behind the scenes
function user1(username,email,passwd){
        this.username =username,
        this.email=email,
        this.passwd=passwd
    }
user1.prototype.encryptPassword = function(){
     return `${this.passwd}abc`
}
const tea = new user1("tea","asdf@gami","vinay")
console.log(tea.encryptPassword());