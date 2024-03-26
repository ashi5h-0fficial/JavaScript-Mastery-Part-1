// getter and setters in JS

//Example 1:
{
  class person {
    constructor(pname, age) {
      this.pname = pname;
      this.age = age;
    }

    //Getter

    get fullname() {
      return `${this.pname}`;
    }

    //Setter
    set fullname(fname) {
      this.pname = fname;
    }
  }

  const p1 = new person("rahul", 45);
  console.log(p1.fullname);

  p1.fullname = "Ashish";
  console.log(p1.fullname);
}

//Example 2:
{
  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName) {
      const [firstName, lastName] = fullName.split(" ");
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const person1 = new Person("harshit", "sharma", 5);
  //console.log(person1.fullName());
  console.log(person1.fullName);
  person1.fullName = "mohit vashistha";
  console.log(person1);xxx
}
