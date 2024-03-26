/*
High order function: a function returning function or taking arguement as function or both, is called HOF.
*/

// function returning function 

const fun4 = () => {
    function fun3() {
      console.log("this is function 2..");
    }
    return fun3;
  };
  const returnedFun = fun4();
  returnedFun();

{
//function accepting function as arguement
    function myFunc2(name) {
        console.log("inside my func 2");
        console.log(`your name is ${name}`);
      }
      
      function myFunc(callback) {
        console.log("hello there I am a func and I can..");
        callback("harshit");
      }
      
      myFunc(myFunc2);
}