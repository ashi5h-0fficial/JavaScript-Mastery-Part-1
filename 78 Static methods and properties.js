// static methods and properties

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  static classInfo() {
    return "this is person class";
  }
  static desc = "static property";
}


const person1 = new Person("harshit", "sharma", 8);

const info = Person.classInfo();
console.log(info);

console.log(person1.desc); //undefined

