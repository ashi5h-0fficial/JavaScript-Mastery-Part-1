// switch statement
//Example 1:
{
  console.log(`
  1. Addition\n
  2. Subtraction\n
  3. Multiplicaton\n
  4. division\n
  `);

  while (true) {
    const choice = Number(prompt("enter your choice: "));

    const num1 = Number(prompt("enter 1st number: "));
    const num2 = Number(prompt("enter 2nd number: "));

    switch (choice) {
      case 1:
        console.log(`${num1} + ${num2} = ${num1 + num2}\n`);
        break;
      case 2:
        console.log(`${num1} - ${num2} = ${num1 - num2}\n`);
        break;
      case 3:
        console.log(`${num1} * ${num2} = ${num1 * num2}\n`);
        break;
      case 4:
        console.log(`${num1} / ${num2} = ${num1 / num2}\n`);
        break;
      default:
        console.log("Invalid choice\n");
    }
  }
}

{
  let day = 9;

  switch (day) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thrusday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    default:
      console.log("Invalid Day");
  }
}

//the above can be written using if-else ladder
{
  let day = 7;

  if (day === 0) {
    console.log("Sunday");
  } else if (day === 1) {
    console.log("Monday");
  } else if (day === 2) {
    console.log("Tuesday");
  } else if (day === 3) {
    console.log("Wednesday");
  } else if (day === 4) {
    console.log("Thrusday");
  } else if (day === 5) {
    console.log("Friday");
  } else if (day === 6) {
    console.log("Saturday");
  } else {
    console.log("Invalid Day");
  }
}
