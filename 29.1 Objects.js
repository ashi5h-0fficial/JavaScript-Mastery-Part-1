// how to iterate object
const person1 = {
  name: "harshit",
  age: 22,
  "person hobbies": ["guitar", "sleeping", "listening music"],
};

// Method (1) for-in loop
for (let key in person1) {
  console.log(person1[key]);
}

//Method (2) Object.keys
for (let key of Object.keys(person2)) {
  console.log(person2[key]);
}

// example of template use case: 
{
  const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"],
  };

  for (let key in person) {
    console.log(`${key} : ${person[key]}`);
    console.log(key, " : ", person[key]);
  }

  console.log(typeof Object.keys(person));
  const val = Array.isArray(Object.keys(person));
  console.log(val);
}
