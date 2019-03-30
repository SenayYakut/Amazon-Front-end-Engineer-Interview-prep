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

var cat = {
    name: "Gus",
    color: "gray",
    age: 15,

    printInfo: function () {
        var that = this;
        console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //prints correctly

        nestedFunction = function () {
            console.log("Name:", that.name, "Color:", that.color, "Age:", that.age); //prints correctly
        }
        nestedFunction();
    }
}
cat.printInfo();
//Because we bound this to a variable that, it will be available just like any other variable

var cat = {
    name: "Gus",
    color: "gray",
    age: 15,

    printInfo: function () {
        console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);
        nestedFunction = function () {
            console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);
        }
        nestedFunction.call(this);
        nestedFunction.apply(this);

        var storeFunction = nestedFunction.bind(this);
        storeFunction();
    }
}
cat.printInfo();
