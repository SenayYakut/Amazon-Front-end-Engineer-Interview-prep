//Destructuring Assignment
//Destructuring Assignment syntax is a Javascript expression that makes it possible to unpack values or properties from arrays or objects.

// ES5 Destructing
var fullName = ["John", "Smith"];
var firstName = fullName[0];
var lastName = fullName[1];

console.log(firstName, lastName); // John Smith

//ES6 Destructing
const fullName = ["John", "Smith"];
const [firstName, lastName] = fullName;

console.log(firstName, lastName); // John Smith

//You can also use Destructuring on objects using a similar syntax
const fullName = { first: "John", last: "Smith" };
const { first, last } = fullName;

console.log(first, last); // John Smith

const fullName = { first: "John", last: "Smith" };
const { firstName, lastName } = fullName;

console.log(firstName, lastName); // undefined undefined

//previous example would be rewritten as follows:
const fullName = { first: "John", last: "Smith" };
const { first: firstName, last: lastName } = fullName;

console.log(firstName, lastName); // John Smith