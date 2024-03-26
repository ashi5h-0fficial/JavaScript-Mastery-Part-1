//How to clone objects

{
  // Method 1: spread operator {...object}

  const obj1 = {
    id: 123,
    username: "Harish",
    add: "2524/1, Nirala nagar",
    age: 23,
  };

  const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4",
  };

  const clone_objct1 = { ...obj1, ...obj2, key69: "value69" };
  const clone_objct2 = { ..."abcdefghijklmnopqrstuvwxyz" };
  const clone_objct3 = { ...["ram", "shyam", "mohan", 23, 56, 1, false, 6.6] };

  console.log(clone_objct1);
  console.log(clone_objct2);
  console.log(clone_objct3);
}

{
  // method 2 (Old method): Objet.assign({}, obj_name)
  const anobj = {
    id: 123,
    username: "Harish",
    add: "2524/1, Nirala nagar",
    age: 23,
  };
  const desOjb = Object.assign({}, anobj);
  console.log(desOjb);

  //We can not use spread operator with integer as {...12533456}, becoz number is not iterable.
}
