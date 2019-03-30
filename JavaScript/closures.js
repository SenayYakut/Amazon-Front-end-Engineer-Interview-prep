//“A closure is a special kind of object that combines two things: a function, and the environment in which that function was created. The environment consists of any local variables that were in-scope at the time that the closure was created.”
var cat = {

    name: "Gus",
    color: "gray",
    age: 15,

    printInfo: function () {
        console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //line 1, prints correctly

        nestedFunction = function () {
            console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //line 2, loses cat scope
        }

        nestedFunction();
    }
}
cat.printInfo(); //prints Name: window Color: undefined Age: undefined

//Why are color and age undefined in line 2? You might be thinking, “the cat object properties are clearly defined above and are in an outer more global scope aren’t they?” More importantly, where did “window” come from?
//JavaScript loses scope of this when used inside of a function that is contained inside of another function.When it is lost, by default, this will be bound to the global window object.In our example, it just so happens that the window object also has a “name” property with a value of “window”.