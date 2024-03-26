// truthy and falsy values

//truthy values: "abc", 1, -1, etc


/* falsy values 
    • false
    • ""
    • null 
    • undefined
    • 0
*/

// Use of falsy values:

const firstname = "";
if (firstname) {
  console.log(firstname);
} else {
  console.log("Not a firstname");
}

let firstName = 0;
if (firstName) {
  console.log(firstName);
} else {
  console.log("firstName is kinda empty");
}
