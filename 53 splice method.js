/*  splice method: 
    syntax: splice(start, delete, insert)

    --> It changes original array
    --> splice(start_index, no. of items to be deleted, insert items)
    --> splice() change/mutate the original array.
    --> splice() returns array of deleted item, which can be stored in const/let/var    
*/

const anArray=[1,2,"Rohan",4,"karan", true, 60.5];
console.log(anArray);

//delete
anArray.splice(2,3)
console.log(anArray); // output: [ 1, 2, true, 60.5 ]

// splice() returns array of deleted item, which can be stored in a const/let/var
const deleted_item=anArray.splice(1,2);
console.log(deleted_item); // [ 2, true ]
console.log(anArray); // [ 1, 60.5 ]

//insert
const anArray1=[1,2,"Rohan",4,"karan", true, 60.5];
anArray1.splice(2,0,"inserted1", 30)
console.log(anArray1); //[ 1, 2, 'inserted1', 30, 'Rohan', 4, 'karan', true, 60.5 ]

//delete & insert simultaneously
const anArray2=[1,2,"Rohan",4,"karan", true, 60.5];
anArray2.splice(3,2,90,"inserted_item1", 40);
console.log(anArray2); //[ 1, 2, 'Rohan', 90, 'inserted_item1', 40, true, 60.5 ]

