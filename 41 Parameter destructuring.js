// param destructuring

// object
// react

const person = {
  firstName: "harshit",
  gender: "male",
  age: 500,
};

function printDetails({ firstName, gender, age }) {
  console.log(firstName, gender, age);
}

printDetails(person);

{
  // Accessing object's values using function
  function printDetails(obj) {
    console.log(obj.firstName);
    console.log(obj.gender);
  }
}
