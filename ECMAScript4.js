//Let and Const
//Let
//let is similar to var but let has scope. let is only accessible in the block level it is defined.

if (true) {
    let a = 40;
    console.log(a); //40
}
console.log(a); // undefined

let a = 50;
let b = 100;
if (true) {
    let a = 60;
    var c = 10;
    console.log(a / c); // 6
    console.log(b / c); // 10
}
console.log(c); // 10
console.log(a); // 50

//Const
//Const is used to assign a constant value to the variable. And the value cannot be changed. It’s fixed.
const a = 50;
a = 60; // shows error. You cannot change the value of const.
const b = "Constant variable";
b = "Assigning new value"; // shows error.

const LANGUAGES = ['Js', 'Ruby', 'Python', 'Go'];
LANGUAGES = "Javascript"; // shows error.
LANGUAGES.push('Java'); // Works fine.
console.log(LANGUAGES); // ['Js', 'Ruby', 'Python', 'Go', 'Java']