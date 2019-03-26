# Goals
## Learn about essential React concepts and related terms
 * Babel
 * Webpack
 * JSX
 * Components
 * Props
 * State
 * Lifecycle

# What Is React?
* React is a JavaScript Library.
* React is not a framework
 * **_Software Framework vs library:_** 
 * **_Library_** A library provides a set of helper functions/objects/modules which your application code calls for specific functionality. Libraries typically focus on a narrow scope (e.g., strings, IO, sockets), so their API’s also tend to be smaller and require fewer dependencies. It is just a collection of class definitions. Why we need them? The reason being very simple i.e. code reuse, use the code which has already been written by other developers. Example, some library has a method named findLastIndex(char) to find the last index of a particular character in a string.
 * **_Framework_**
 “In computer programming, a software framework is an abstraction in which software providing generic functionality can be selectively changed by additional user-written code, thus providing application-specific software”

 * **_Inversion of control_**
 When we call a method from a library, we are in control. But in framework, the control is inverted i.e. the framework calls us.
  
* React is an open-source project created by Facebook.
* React is used to user interfaces (UI) on the front end.
* React is the view layer of an MVC application (model view controller)
  ** MVC(MODEL, VIEW, CONTROLLER) The big idea behind MVC is that each section of your code has a purpose, and those purposes are different. Some of your code holds the data of your app, some of your code makes your app look nice, and some of your code controls how your app functions.
  * **Model:** _Model code typically reflects real-world things. This code can hold raw data, or it will define the essential components of your app. For instance, if you were building a To-do app, the model code would define what a “task” is and what a “list” is – since those are the main components of a todo app._
  * **View:**_View code is made up of all the functions that directly interact with the user. This is the code that makes your app look nice, and otherwise defines how your user sees and interacts with it._
  * **Controller:** _Controller code acts as a liaison between the Model and the View, receiving user input and deciding what to do with it. It’s the brains of the application, and ties together the model and the view._
MVC is a framework for thinking about programming, and for organizing your program’s files. To signify the idea that your code should be organized by its function, developers will create folders for each part of MVC. (The idea that aps should be divided based on the function of each part of the code is sometimes referred to as separation of concerns.)
