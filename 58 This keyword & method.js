// methods: function inside object
// This keyword: Kisi method me This ki value wo Object hota hai, jo object us method ko call kre..

//Example.
{
  const person = {
    firstName: "harsh",
    age: 8,
    about: function personInfo() {
      console.log(`person name is ${this.firstName} and age is ${this.age}`);
      //this about method can also be written as:
      // about() {
      //   console.log(`person name is ${this.firstName} and age is ${this.age}`);
      // },
    },
  };

  console.log(person.about());
  //here person object is calling about(), so value of This = person Object.
}

// //Creating method outside of object--
function personInfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
  firstName: "harsh",
  age: 8,
  about: personInfo,
};

const person2 = {
  firstName: "mohit",
  age: 18,
  about: personInfo,
};

const person3 = {
  firstName: "nitish",
  age: 17,
  about: personInfo,
};

person1.about();
person2.about();
person3.about();
