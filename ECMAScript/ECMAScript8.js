//spread operator
//The spread operator (...), allows to get the elements of a collection.
//One of the most commom uses is for Node Objects, when using query selectors in the browser, in order to make them iterable Array Objects:
const paragraphs = document.querySelectorAll('p.paragraph');
const arr = [...paragraphs];

const arr_1 = [1, 2, 3, 4]
const arr_2 = [5, 6, 7, 8]
const arr_final = [...arr_1, ...arr_2]
// arr_final = [1, 2, 3, 4, 5, 6, 7, 8]
