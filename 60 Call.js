/*Call():
    Syntax: Object.method.call(obj ,arguements..) OR method.call(obj, arguements)
    • It is used to call a method.
    • Using call(), method of one object can be used to call for another object.
    • We have to pass object in call(), we can't leave  it empty.  
*/

{
  //Example (1)
  const person1 = {
    firstName: "harsh",
    age: 8,
    about: function personInfo() {
      console.log(`person name is ${this.firstName} and age is ${this.age}`);
    },
  };

  const person2 = {
    firstName: "mohit",
    age: 18,
  };

  person1.about.call(person2);
  person1.about.call(person1);
}

//Example (2)
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

about.call(user1, "Dancing", "Jubin");
// apply
// about.apply(user1, ["guitar", "bach"]);
// const func = about.bind(user2, "guitar", "bach");
// func();
