//find method(): It takes callback() and return first occurence of array element, that fulfill condition of callback function.

//--> In filter(): it returns all the elements of array that fulfill callback condition.

const myArray = ["Hello", "catt", "dog", "lion"];

const found = myArray.find((arr_string) => {
        // if(arr_string.length===3){
        //     return arr_string;
        // }

        // if(arr_string==="dog"){
        //     return arr_string;
        // }

  return arr_string.length === 3;
});

const users = [
  { userId: 1, userName: "harshit" },
  { userId: 2, userName: "harsh" },
  { userId: 3, userName: "nitish" },
  { userId: 4, userName: "mohit" },
  { userId: 5, userName: "aaditya" },
];

const myUser = users.find((user) => user.userId === 3);
console.log(myUser);
