/*  Map() Data structure:
    syntax: const map_name = new Map();

    --> map is an iterable
    --> store data in ordered fashion
    --> store key value pair (like object)
    -->duplicate keys are not allowed like objects

    -:Difference between maps and objects:-

    --> objects can only have "string" or "symbol" as key 
    --> in maps you can use anything as key like array, number, string, object 
*/

// objects are also known as object literal; order isn't guaranteed.
const person = {
  firstName: "harshit",
  age: 7,
  1: "one",
};

for (let key of Object.keys(person)) {
  console.log(`${key}: ${typeof key}`);
}

//Map: key-value pairs
//How to create Map:
// method 1:-
const person1 = new Map();
person1.set("Uname", "Ashish");
person1.set("Age", 35); //For using string as key, we have to use " " unlike object
person1.set(1, "One");
person1.set([1, 2, 3], "OneTwoThree");
console.log(person1);
//method 2:-
const users = new Map([
  ["usrId", 1],
  ["usrName", "Rahul"],
  ["age", 66],
]);
console.log(users);

//How to access key-value pairs

for (let keyValue of person1) {
  console.log(keyValue);
}

const usrname = person1.get("Uname");
const ek = person1.get(1);
const ek23 = person1.get([1, 2, 3]);
console.log(usrname, ek, ek23);
//Or
console.log(person1.get("Age"));

//How to access keys of Map
for (let key of person1.keys()) {
  console.log(key, typeof key);
}


//key-value pairs of Map are in array format:
for(let i of perSon1){
  console.log(i)
} //here i respresent [key-value pair] of person1

// Destructuring key-value pairs of Map:
for (let [key, value] of person1) {
  console.log(key, value);
}

// key-value pair as Object=>object
const perSon1 = {
    id: 1,
    firstName: "harshit"
}
const person2 = {
    id: 2,
    firstName: "harshta"
}

const extraInfo = new Map();
extraInfo.set(perSon1, {age: 8, gender: "male"});
extraInfo.set(person2, {age: 9, gender: "female"});
// console.log(userInfo);
console.log(perSon1.id);
console.log(extraInfo.get(perSon1).gender);
console.log(extraInfo.get(person2).gender);