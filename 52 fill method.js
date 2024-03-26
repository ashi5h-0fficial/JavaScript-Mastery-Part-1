/*  fill method:
    syntax: fill(value , start_index , end_index)

    --> Changes all array elements from start to end index with a given static value and returns the modified array

    --> last index is excluded.
*/

const myArray = new Array(10).fill(2);
console.log(myArray);

const myArray1 = [1, 2, 3, 4, 5, 6, 7, 8];
const res=myArray1.fill(9, 2, 5);
console.log(res);
