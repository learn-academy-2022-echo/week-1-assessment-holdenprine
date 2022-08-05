// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10 
// b) Verify and explain: The answer is ten because .length starts from the first value (as apposed to index starting at 0) and will count through to the end of the string. This includes spaces as they are also qualified as characters/ values


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: This will log o because the fourth index of the string (which is basically an array of characters) will be o.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: For the same reasoning as the question before, Ruby will be displayed because element at languages[1] will be "Ruby". Because the variable index is set to 1, this will determine the statement made in the sentance before.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: Some Error will be thrown
// b) Verify and explain: The exact error is a type error because toUpperCase cannot be performed on arrays, only on strings. Just because there are strings inside the array doesnt mean the built-in method can be executed


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: will not run
// b) Verify and explain: In actuality, the typeof keyword took the operation of .length and took its data type; in this case logging number because .length returns a number
