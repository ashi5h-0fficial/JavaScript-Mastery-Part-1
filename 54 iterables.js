/*  iterables: 
    --> jispe hum for of loop laga sakein
        Examples: string, array, sets, Map are iterable  

    array like object: 
    --> jinke pas length property hoti hai aur jiko hum index se access kar sakte hai
        example : string 
*/

// string " "
const firstName = "Harshit";
for(let char of firstName){
    console.log(char);
}

// array []
const items = ['item1', 'item2', 'item3'];
for(let item of items){
    console.log(item);
}

// Set {}
const set_Of_Numbers=new Set([1,2,3,4,5]);
console.log(set_Of_Numbers);

// array like object 
const HfirstName = "harshit";
console.log(HfirstName.length);
console.log(HfirstName[2]);
