/*  Set
    syntax: new Set()

    --> const aSet=new Set([2,3,4,67,8])
    --> const aSet=new Set("ASHISH")

    --> Sets (it is iterable)
    --> stores unique items only (no duplicates allowed)
    --> set also have its own methods: add(), delete(), has(), clear(), forEach() ..
    --> No index-based access, so Order of elements are not guaranteed
*/

// How to create a set:
// method 1: 
const set_Of_Numbers=new Set([2, 3, NaN,"ashish", true, null, 3.56, undefined]);
console.log(set_Of_Numbers);

//method 2:
const set_OF_Numbers=new Set();
set_OF_Numbers.add(12); 
set_OF_Numbers.add(15.43); 
set_OF_Numbers.add("13"); 
set_OF_Numbers.add("rajat"); 
console.log(set_OF_Numbers);

//We can't create set like const aset=new Set(1,3,5,7) or const aset=new Set({2,3,4,7})

// has method: to check a value present in set or not
const num_set=new Set([1,2,3,4,5]);
num_set.has(4)?console.log("4 is present"):console.log("4 isn't present");

//Set can be used to extract Unique values from iterables like array, strings
const array_values=[2,5,4,4,5,9,7,9,1,8];
const unique_values=new Set(array_values);
console.log(array_values);
console.log(unique_values);

//Set doesn't have length & index property.
// Question: Find length of set {1,2,3,4,5}
const num_set1=new Set([1,2,3,4,5]);

//Solution:
let length=0;
for(let i of num_set1){
    length++;
}
console.log(num_set1);
console.log(`length of set is ${length}`);

// Important: we can't store same values in a set
const num_set2=new Set();
num_set2.add("Rahul");
// num_set2.add("Rahul"); -->here we can't add "Rahul" again in set num_set2.
num_set2.add([1,2,4]);
num_set2.add([1,2,4]);// here we can add [1,2,4] in set, as both [1,2,4] are unique in memory.

