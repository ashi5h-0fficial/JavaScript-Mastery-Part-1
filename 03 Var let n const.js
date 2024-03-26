/* var, let and const:
    • Var is globally scoped while let & const are block- scoped.
    • Var can be updated and redeclared.
    • Let can be updated but can’t be redeclared.
    • Const can neither be updated nor redeclared.
    • Const must be initialized during declaration, unlike var & let.
*/

//var
var v1="Rahul";
v1=120;         // var can be updated
var v1="manoj"; // var can be redclared
console.log(v1);

//let
let firstName = "harshit";
firstName = "Mohit";    // let can be updated
// let firstName="rajat";  let can't be redeclared
console.log(firstName); //

//const
const pi = 3.14;
console.log(pi);
//const pi = 22/7 --> it will give error
// Const can neither be updated nor redeclared.