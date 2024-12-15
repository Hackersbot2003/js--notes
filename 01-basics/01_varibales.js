const accountId = 1
let accountEmail ="vinay@gma000il"
var accountPasswd ="vinay"
accountCity ="mds"         // its also possible
let accountState;            //if we did not give value its considered as undefined

//   accountId= 2         //not allowed
accountEmail="patidar2gmail"
accountPasswd="1234"
accountCity="jbp"


console.log(accountId)
console.table([accountEmail,accountId,accountPasswd,accountCity,accountState])
// const will not change
// for variable declaring - var and let
// we use let due to scope problem
/*
prefer not to use var
because of issue in block scope and functional scope

*/