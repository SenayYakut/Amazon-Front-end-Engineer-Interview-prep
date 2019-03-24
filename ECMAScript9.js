//template literal
//Now with ES6,We can make string using backticks and using placeholders which are indicated with dollar sign and curly braces, like ${expression } .

const name="John";
const city="London";

Older Style:
const sentence =" My name is "+ name +". I live in "+city.

//ES6 Way
const sentence = `My name is ${name}. I live in ${city}`;

//MultiLine Strings:
//When we wanted to span our string into multiple lines, we had to use backslashes.

const multipleLineString = "We have \
multiple lines \
here";

const htmlMarkup = `
<html>
<head></head>
<title>Template string</title>
<body>Hello World</body>
</html>`;

//Nesting of Template Strings:
const cities = [
    { name: 'Delhi', year: 2010 },
    { name: 'Mumbai', year: 2015 },
    { name: 'Kolkata', year: 2017 }];

const markup = `
<ul>
${cities.map(city => `<li>I lived in ${city.name} in the year ${city.year}</li>`).join('')}
</ul>`;   

//If statements and Functions
const data = { name: 'John', city: 'London', birthyear: 1900 };
const markup = `<div>${data.name} lives in ${data.city}. ${data.birthyear ? `<div>He was born in the year ${data.birthyear}</div>` : ''}</div>`;