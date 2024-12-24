// for browser this=window
//in node  this={}
  function setUserName(username){
   //complex db calls
    this.username=username         //ye wala this gayab ho jayega
      console.log("called");
        
}

  function createUser(username,email,passwd){
    this.email=email
    this.passwd=passwd
    //setUserName(username)       function call hua tha but variables jithe bhi declare hue the vo sab gayab function call ke baad function execute hone ke baad saari values gayab
    //setUserName.call(username)     //.call for holding the refrence of all holding variables declares ,function call,execution
     setUserName.call(this,username)         //createUser { email: '12@gmai', passwd: 'weqd', username: 'chaii' }   
  }

  const chaai = new createUser("chaii","12@gmai","weqd")
  console.log(chaai);
  //createUser { email: '12@gmai', passwd: 'weqd' }
  