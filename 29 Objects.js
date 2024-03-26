/* Object in JavaScript:--

• objects reference type  
• arrays are good but not sufficient 
• for real world data 
• objects store key value pairs 
• objects don't have index

--> Kisi object me koi key/property 2 bar nhi aa skti, sari keys unique hoti hai.
--> Agr koi key 2 bar hai kisi object me...to last wali key phle wali key ko override kr deti h
E.g., {
        key1:"mohan",
        key2:"234",
        key1:"ashish" 
    } =>is object me key1 ki value "ashish" hogi.        
*/

// how to create objects
const person1 = { name: "Harshit", age: 22 };

const person2 = {
  name: "harshit",
  age: 22,
  hobbies: ["guitar", "sleeping", "listening music"],
};
console.log(person2);

// how to access data from objects
console.log(person1["name"]);
console.log(person1.age, person1.name);
console.log(person2["hobbies"], person2["name"]);


// how to add key value pair to objects
//method 1:
person1.course = "MCA";
console.log(person1);

//Method 2:
person2["gender"] = "male";
console.log(person2);

