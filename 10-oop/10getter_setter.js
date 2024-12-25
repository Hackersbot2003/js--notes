class user {
    constructor(email,password){
        this.email=email;
        this.password=password
    }
get email(){
    return this.email1.toUpperCase()
}
set email(value){
    this.email1=value
}

    get password(){
        return this.password1.toUpperCase()
    }
    set password(value){
        this.password1=value

    }
}

const hitesh = new user("hutesh@123","abcdse")
console.log(hitesh.email);

