
// __proto__: it is a reference of object that is passed while creating empty object, which contains all key-value pair of Object that is passed as --Proto--

// offical ecmascript documentation: [[prototype]]

// __proto__ , [[prototype]] are same

// prototype is different from __proto__

const obj1 = {
    key1: "value1",
    key2: "value2"
}

// there is one more way to create empty object
const obj2 = Object.create(obj1); // here proto of obj2 is obj1, obj2 has all key-value pair of obj1 as proto.

obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2);

console.log(obj2.__proto__);

