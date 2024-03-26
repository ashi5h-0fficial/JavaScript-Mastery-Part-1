// how to clone array
// how to concatenate two arrays

{
  //Method 1: [].concat
  const myarr1 = [2, 3, "ashish", true, null, 3.56];
  console.log(myarr1);
  const myarr2 = [].concat(myarr1, 10, 20, "rahul", [100, 200]);
  console.log(myarr2);
}

{
  //Method 2: array.slice(0)
  const myarr1 = [2, 3, "ashish", true, null, 3.56];
  console.log(myarr1);
  const myarr2 = myarr1.slice(0).concat(myarr1, 10, 20, "rahul", [100, 200]);
  console.log(myarr2);
}

{
  //Method 3: spread operator [...array] New method
  const myarr1 = [2, 3, "ashish", true, null, 3.56];
  const myarr2 = ["item1", "item2"];
  const myArray = ["sohan", "pappu", 234, undefined, NaN];

  const myarr3 = [...myarr1, ...myarr2].concat(
    myArray,
    10,
    20,
    "rahul",
    [100, 200]
  );
  console.log(myarr3);
}

{
  //Method 4: push() using loop
  const myarr1 = [2, 3, "ashish", true, null, 3.56];
  const myarr2 = [];
  for (let i = 0; i < myarr1.length; i++) {
    myarr2.push(myarr1[i]);
  }
  console.log(myarr2);
}
