// CHALLENGE #2
// Instructions
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.

//data 1
let heightOfMark = 1.69;
let massOfMark = 78;
let heightOfJohn = 1.95;
let massOfJohn = 92;

//result 1
let bmiOfMark = massOfMark / heightOfMark ** 2;
let bmiOfJohn = massOfJohn / heightOfJohn ** 2;
console.log("TEST DATA 1 Results:");

if (bmiOfMark > bmiOfJohn) {
  console.log(
    `Mark's BMI (${bmiOfMark}) is higher than John's (${bmiOfJohn})!`,
  );
} else {
  console.log(
    `John's BMI (${bmiOfJohn}) is higher than Mark's (${bmiOfMark})!`,
  );
}

//data 2
heightOfMark = 1.88;
massOfMark = 95;
heightOfJohn = 1.76;
massOfJohn = 85;

// result 2: need to recalculate
bmiOfMark = massOfMark / heightOfMark ** 2;
bmiOfJohn = massOfJohn / heightOfJohn ** 2;
console.log("--------------------");
console.log("TEST DATA 2 Results:");

if (bmiOfMark > bmiOfJohn) {
  console.log(
    `Mark's BMI (${bmiOfMark}) is higher than John's (${bmiOfJohn})!`,
  );
} else {
  console.log(
    `John's BMI (${bmiOfJohn}) is higher than Mark's (${bmiOfMark})!`,
  );
}
