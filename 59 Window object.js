"use strict";
/*
    • Javascript has global object called Window, that contains all the methods, property
    • Everything that we code, it gets embedded into window object.
    • We can see window object by console.log(window) OR console.log(this).
    • If we use "use strict" then we get undefined as value of window object.
*/

console.log(window);
console.log(this);
console.log(this===window);

function myFunc(){
    
    console.log(this);
}
myFunc();