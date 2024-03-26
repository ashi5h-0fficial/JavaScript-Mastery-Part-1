//Template string ${}
// Used to write the value of variable within string.

let age = 22;
let firstName = "harshit";

let aboutMe = `my name is ${firstName} and my age is ${age}`
console.log(aboutMe);

const str2 = "RahulSoni";
for (let i = 0; i < str2.length; i++) {
  console.log(`index is ${i} value is ${str2[i]}`);
}

console.log(`last index is: ${str2.length - 1}`);