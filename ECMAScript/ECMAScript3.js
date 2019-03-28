//for-of loop
//for-of loop can be used to iterate over the things which are not arrays but are iterable like a DOM collection, string, set, arguments or map.

const fruits = ['Orange', 'Apple', 'Grapes', 'Banana'];
for (const fruit of fruits) {
    console.log(fruit);
}

//for-of loop in knowing index
//which gives us the ArrayIterator.
for (const fruit of fruits.entries()) {
    console.log(fruit);
}/*
[0, "Orange"]

[1, "Apple"]

[2, "Grapes"]

[3, "Banana"]*/

for (const [index, fruit] of fruits.entries()) {
    console.log(index, fruit);
}

//for-of loop in iterating over unknown number of arguments
//for-of loop is very helpful in iterating over the unknown number of arguments to a function.
//‘arguments’ is a special keyword in javascript which gives us the Array-ish (not array) type and gives us all of the arguments.
function addNumbers() {
    let sum = 0;
    for (const num of arguments)
        sum += num;
    return sum;
}
addNumbers(1, 2, 3, 4, 5); // 15

//for-of loop to iterate over string
const name = 'John Doe';
for (const char of name)
    console.log(char); 
    //‘J’ ,‘o’,‘h’,‘n’,’ ’,‘D’,‘o’,‘e’

//for-of loop to iterate over DOM collection
//DOM collections are not the true array type.They are usually NodeList for most of the browsers.If we create a number of paragraphs and want to iterate over them to assign some event on each of paragraph, we can make use of for-of loop.
const paragraphs = document.querySelectorAll('p');
for (const para of paragraphs) {
    console.log(para);
    // We can add event listeners to each para here
}