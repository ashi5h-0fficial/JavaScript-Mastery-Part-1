/*if-else ladder:
    syntax: if(){}
            else if(){}
            else if(){}
            .
            .
            .
            else()
*/

let tempInDegree = 50;

if (tempInDegree < 0) {
  console.log("extremely cold outside");
} else if (tempInDegree < 16) {
  console.log("It is cold outside");
} else if (tempInDegree < 25) {
  console.log("wheather is okay ");
} else if (tempInDegree < 35) {
  console.log("lets go for swim");
} else if (tempInDegree < 45) {
  console.log("turn on AC");
} else {
  console.log("too hot!!");
}

console.log("hello");


let tempInDegree1 = 4;

if (tempInDegree1 > 40) {
  console.log("too hot");
} else if (tempInDegree1 > 30) {
  console.log("lets go for swim");
} else if (tempInDegree1 > 20) {
  console.log("weather is cool");
} else if (tempInDegree1 > 10) {
  console.log("it is very cold outside");
} else {
  console.log("extremely cold");
}

console.log("hello");
