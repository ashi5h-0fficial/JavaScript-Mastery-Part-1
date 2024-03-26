/*Apply(): 
    Syntax: method.apply(obj, [arguements...])
    • There is no difference in working of Call() and Apply(). 
    • Only difference in passing arguement. 

*/
//Example 1:
const user1 = {
    firstName: "harshit",
    age: 8,
  };
  
  const user2 = {
    firstName: "mohit",
    age: 9,
    about: function personInfo() {
      console.log(`person name is ${this.firstName} and age is ${this.age}`);
    },
  };
  user2.about.apply(user1);

//Example 2:
const about= function(id,course) {
    console.log(`person name is ${this.firstName} and age is ${this.age}`,`id= ${id}, course= ${course}`);
  }
  const person1 = {
    firstName: "harsh",
    age: 8,

  };

  const person2 = {
    firstName: "mohit",
    age: 18,
  };
about.apply(person2,[12, "MCA"])
about.apply(person1,[10, "BCA"])