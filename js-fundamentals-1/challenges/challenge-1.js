// CHALLENGE #1
// Instructions
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

// TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

//data 1
let heightOfMark = 1.69;
let massOfMark = 78;
let heightOfJohn = 1.95;
let massOfJohn = 92;

//result 1
let bmiOfMark = massOfMark / heightOfMark ** 2;
let bmiOfJohn = massOfJohn / heightOfJohn ** 2;
let markHigherBMI = bmiOfMark > bmiOfJohn;
console.log("TEST DATA 1 Results:");
console.log("Mark BMI:", bmiOfMark, "John BMI:", bmiOfJohn);
console.log("Is Mark's BMI higher?", markHigherBMI);

//data 2
heightOfMark = 1.88;
massOfMark = 95;
heightOfJohn = 1.76;
massOfJohn = 85;

// result 2: need to recalculate
bmiOfMark = massOfMark / heightOfMark ** 2;
bmiOfJohn = massOfJohn / heightOfJohn ** 2;
markHigherBMI = bmiOfMark > bmiOfJohn;
console.log("--------------------");
console.log("TEST DATA 2 Results:");
console.log(`Mark BMI: ${bmiOfMark} John BMI: ${bmiOfJohn}`);
console.log(`Is Mark's BMI higher? ${markHigherBMI}`);
