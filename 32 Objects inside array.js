// objects inside array
// very useful in real world applications

const users = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { "userId": 2, "firstName": "mohit"," gender": "male" },
  { userId: 3, firstName: "nitish", gender: "male" },
];
for (let user of users) {
  console.log(`first name: ${user.firstName}`);
  console.log(`Gender: ${user.gender}`);
}

{
//Extracting values of object into array
  const users = [
    { uname: "rohan", age: 34, hobby: "sleeping" },
    { uname: "ravi", age: 33, hobby: "jumping" },
    { uname: "rahat", age: 35, hobby: "eating" },
  ];
  
  const username = [];
  const userage = [];
  for (let i of users) {
    username.push(i.uname);
    userage.push(i.age);
  }
  console.log(username);
  console.log(userage);
}
