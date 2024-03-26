/* --: arrow functions and this :--
    • arrow fun() ka this normal fun() se different behave krta hai.
    • arrow function ke pas koi this nhi hota.
    • Ye apne surrounding se this ki value leta hai.
    • This of arrow fun() can't be changed.
*/
const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    } 
// In this case this of about() is not user1, arrow fun() me this ki value 1 level up hoti hai. Here this is window Object.  
}

user1.about();