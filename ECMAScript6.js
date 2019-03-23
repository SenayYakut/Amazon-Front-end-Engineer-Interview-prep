//New String Functions
/* startsWith
   endsWith
   includes
   repeat*/

const str = 'Rachna';
str.startsWith('Rad') //false
str.startsWith('ra') //false as it is case sensitive
str.startsWith('Ra') //true
str.startsWith('ch', 2) //true as we are searching from the second position
str.startsWith('ch', 3) //false

//endsWith
const city = 'Delhi';
city.endsWith('Hi'); //false as it is case sensitive
city.endsWith('hi');//true
city.endsWith('l', 3);//true - include only first three characters before searching
city.endsWith('l', 4);//false

//includes
const name = 'John Doe';
name.includes('do'); //false
name.includes('D'); //true
name.includes('Do'); //true

//repeat
const str = 'This is repeated';
str.repeat(3); //"This is repeatedThis is repeatedThis is repeated"
//repeat function can be used to pad a string from Left with a number of spaces.