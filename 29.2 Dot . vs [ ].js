// difference between dot and bracket notaion
const key = "email";
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
// if key contains more than 1 word, you have to use " "
}

console.log(person["person hobbies"]);
person[key] = "harshitvashisth@gmail.com";
console.log(person);
