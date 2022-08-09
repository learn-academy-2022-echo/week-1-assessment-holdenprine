// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code: as a user I need a function that will use a conditional statement to check whether the given temps are at, above or below boiling point and then display it in the console
                // function boiler plate -> const boilCheck = (temp) => {}
                // will use string interpolation to display the output statements 

const temp1 = 42
const temp2 = 350
const temp3 = 212

//function declaration
const boilCheck = (temp) => {
    
    // conditional statements to check based on 212. Will return string with temps value interpolated
    if(temp > 212) {
        return `${temp} is above boiling point`
    } else if(temp < 212) {
        return `${temp} is above boiling point`
    } else {
        return `${temp} is at boiling point`
    }
}

//invoked
console.log(boilCheck(temp1))
console.log(boilCheck(temp2))
console.log(boilCheck(temp3))

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code: Will write a function to simplify the statements needed
                // function boiler plate -> const combineArr = () => {}
                // wont need to take a parameter, just return the length of the new array
                // will use .concat() to create a new combined array and display the length using .length

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

//function declaration
const arrCombiner = () => {
    // stores concatinated arrays in newArray to be returned and logged
    var newArray = myNumbers1.concat(myNumbers2)

    return newArray.length
}

//invoked
console.log(arrCombiner())

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code: goal is to create a reversed string out of currentCohort
                // will need to use a combination of three methods: .split, .reverse, and .join
                // can apply to one variable all at the same time and step through each
                

const currentCohort = "Echo 2022"

// currentCohort is split into individula characters, the order of the characters is reversed, then the characters are joined into the same string again stored in reversedString to be logged
var reversedString = currentCohort.split("").reverse().join("")
console.log(reversedString)

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code: will need to use a for loop -> for(let i = 0; i < myArray.length; i++)
                // will need to step through each element of the array and determine if the element has a remainder of zero with a conditional statement -> if so they are even and the other numbers can be assumed odd
                // will output each element as either "even" or "odd" to console

const myArray = [13, 34, 5, 10, 27, 42]

//steps through each element and mods by 2, if equal to zero will log even, otherwise will log odd
for(let i = 0; i < myArray.length; i++) {
    if(myArray[i] % 2 === 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code: will need to write a function with conditional statements to check which number is smaller
                // function boiler plate -> const subtractor = (num1, num2) => {}
                // once determined the subtracted result will be stored in a variable that will then be returned and logged

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

//function declaration
const subtractor = (num1, num2) => {

    //if else statements check which is bigger, subtracts numbers, then stores in variable to be logged
    if(num1 < num2) {
        var solution = num2 - num1
        return solution
    } else if(num1 > num2) {
        var solution2 = num1 - num2
        return solution2
    } else { // operates as a catch - all incase numbers are replaced with user input values
        return "These numbers are the same and will equal zero"
    }
}

//invoked
console.log(subtractor(number1, number2))
console.log(subtractor(number3, number4))