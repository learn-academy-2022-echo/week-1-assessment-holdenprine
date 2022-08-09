# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer: A conditional statement is a block of code that can be used to compare data. With the ones we've learned so far there are if statements; statements that declare the first condition, else if statements; statements that offer another condition when the if statements condition isnt met, and lastly an else statement; meant to be a catch all that will run when none of the other conditions are met

Researched answer: A logical path in which computers make decisions based on conditions is the direct definition of conditional statements. At its most basic; conditional statements simulate human choice in computers.

1. What is git? What is the difference between git and Github?

Your answer: The acronym git stands for global information tracker and is a useful tool in dividing work in development while tracking different teams using branches. The specific difference between git and github is that git is the protocol and github hosts that protocol

Researched answer: Git is a version control system that helps manage and track source code history. Github on the other hand is a cloud-based hosting service that exists to manage git repositories.

2. Which JavaScript operators will return a Boolean value?

Your answer: The operators that will return boolean values are AND(&&), OR(||), NOT(! or !==), strict equality(===), loose equality(==),less than or greater than(<,>, or >=, <=). These will all return boolean values when comparing data in conditional statements.

Researched answer: The operators that will return a boolean value are the same as the ones listed in the previous answer with one extra. When using NOT you can use it to as follows to convert a value to a boolean type; console.log(!!"some string") // returns true.

3. What is an index? What is the difference between index and value?

Your answer: An index is a location in which a value is stored inside of an array. Indexes start at 0 where as values will start at 1. An example would be as follows: var array = [0,2] -> the first value 0 is stored at index 0.

Researched answer: An index is used as a reference to the place holder of an elements value in an array. The value itself is whats being stored in the array at the given index.

4. What is iteration?

Your answer: An iteration is a single top to bottom flow of an executable piece of code. Iterations are commonly refered to when dealing with loops as they perform multiple iterations to provide a variety of results.

Researched answer: An iteration is a process that is contextualized to multiple processes of the same nature that work in a design in which there is improvement in functionality over the course of those iterations. Each iteration is the same set of operations within a program that once one instance is complete, a single iteration has taken place.

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: Pair Programming involves two people who act in two distinct roles; as the navagator and driver. The navagator is the person responsible for directing the driver on what code to write and how to proceed through a problem while the driver writes the code out in the editor. Regardless of the role its up to both in the pair to step through the logic of the code being written to arrive at the correct solution

Researched answer: Pair programming is the product of Agile software development principles in which two people will switch rolls periodically as either a navagator or driver. The navagator will deal in strategic and architectural elements while the driver deals in mechanical; doing the actual coding. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: A function that accepts other functions as parameters or returns an actual function. These can be built in as well with some examples like filter(), map(), reduce(), and some()

2. Jest: Jest is a support and testing framework for JavaScript maintained by Meta. Its used to debug and support large web applications.

3. Objects: Objects are variables with properties that include many different values that can be accessed later. An example might be the concept of a car -> const car ={type: "Toyota", model: "Prius",color: "white" }

4. Method: Methods are actions that can be performed on methods. In short its a property containing a function definition that can be accessed to use the data stored within the object. For example -> objectName.methodName()

5. Classes: When defining classes, you can think of them as templates for defining objects. They can declaired similiarily to functions but dont take any arguements, instead they take attributes like constructors which build out how the class structure will function and attributes will be accessed within the code
