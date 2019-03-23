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