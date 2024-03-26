/* Bind():

    • bind() is different from call() & apply().
    • It binds a method to specified object and returns a function, that can be call for getting result wrt to specified object.
*/

function about(hobby, favMusician) {
  console.log(
    `FirstName is: ${this.firstName}, Age: ${this.age}, Hobby: ${hobby}, Fav singer: ${favMusician}`
  );
}

const user1 = {
  firstName: "harshit",
  age: 8,
};
const user2 = {
  firstName: "mohit",
  age: 9,
};

const returnedFunc = about.bind(user2, "guitar", "bach");
returnedFunc();
