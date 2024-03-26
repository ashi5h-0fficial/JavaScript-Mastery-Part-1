//Binding mistake

const user1 = {
  firstName: "harshit",
  age: 8,
  about: function () {
    console.log(this.firstName, this.age);
  },
};

// don't do this mistake
const myFunc = user1.about; //This is wrong
myFunc();

const myFunc1 = user1.about.bind(user1);
myFunc1();
