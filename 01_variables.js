//value written in constant cant be changed one written
const accoundId = 14253
let accountEmail = "prince@998"
var accountPassword = "1234"
accountCity = "jaipur"
let accountstate;
/*prefer not to use var
because of issue in block scope and functional scope
*/


// accoundId = 2 //not allowed
accountEmail = "raju@998"
accountPassword = "8"
accountCity = "faridabad"

console.log(accoundId);
console.table([accoundId,accountEmail,accountPassword,accountCity,accountstate])

