//It is also know as ES2015.
//The changes add a lot of syntactic sugar that allow developers to create applications in an object oriented style.

/*A lot of new syntax features were introduced including:
    classes,
    modules,
    templating,
    for/of loops,
    generator expressions,
    arrow functions,
    collections,
    promises.*/
/*Frequently new features arrive that are part of the successor ES7. A common way is to translate modern JavaScript (ES6, ES7 and other experimental proposals) to ES5. This makes sure that also old browsers can execute the code. There are tools like Babel that transforms new JavaScript to ES5.*/
/*Besides syntactic sugar coming from ECMAScript standards there are features that require a Polyfill. Usually they are necessary because whole class/method implementations were added to the standard.*/

// JavaScript ecmascript6 Arrow Functions

//OLD Syntax
function oldOne() {
    console.log("Hello World..!");
}
oldOne();

// NEW Syntax
var newOne = () => {
    console.log("Hello World..!");
}
newOne();

//Another example with parameters:
let NewOneWithParameters = (a, b) => {
    console.log(a + b); // 30
}
NewOneWithParameters(10, 20);

//Parentheses are optional when there’s only one parameter name:
let newOneWithOneParam = a => {
    console.log(a);
}
newOneWithOneParam(a);

/*An incredible advantage of the arrows function is that you can not rebind an arrow function. It will always be called with the context in which it was defined. Just use a normal function.*/
// Old Syntax
axios.get(url).then(function (response) {
    this.data = response.data;
}).bind(this);

// New Syntax
axios.get(url).then(response => {
    this.data = response.data;
});



