//switch case
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=4
switch (month) {
    case 1:
        console.log("jan");
        break;
    case "feb":
        console.log("feb");
        break;
    case 11:
        console.log("nov");
        break;
    case 12:
        console.log("dec");
        break;
    case 4:                           //if case matches then also switch case executes remaining cases except DEFAULT
        console.log("apr");
        break;            //break yhe control flow

    default:
        console.log("empty");
        
        break;
}