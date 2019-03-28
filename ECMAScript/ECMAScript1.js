//Default Parameters
/*Default parameters are parameters which are given by default while declaring a function. But it’s value can be changed when calling the function.*/

let Func = (a, b = 10) => {
    return a + b;
}
Func(20); //20+50=70
Func(20, 50); // 20 + 50 = 70

let NotWorkingFunction = (a = 10, b) => {
    return a + b;
}
NotWorkingFunction(20); // NAN. Not gonna work.
NotWorkingFunction(20, 30); // 50;

