class user {
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username is ${this.username}`);
        
    }
}
 class teacher extends user{
    constructor(username,email,password){
        super(username)            //it automatically do all the work inside users
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`a new course was add by ${this.username}`);
        
    }

 }

 const chai = new teacher("chai","chai@teacher","123")
 chai.addCourse()
 const masalachaii = new user("masalachai")
 //masalachaii.addCourse()
 masalachaii.logMe()
 //masalachaii did not have access to add course but have access to log in
 console.log(chai instanceof user);              //true
 console.log(chai instanceof teacher);            //true
 console.log(chai instanceof user);
 