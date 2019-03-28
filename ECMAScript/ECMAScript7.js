//The Some Function
arr.some(function callback(currentValue, index, array) {
    // Do some stuff with currentValue (index and array are optionals)
}, [thisArg]);

const arr = [1, 4, 5, 11];
if (arr.some(el => el % 2 == 0)) {
    console.log("There's at least one even number");
}
