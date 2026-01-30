// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 23;

const calcAge = birthYear => 2026 - birthYear;

console.log(calcAge(2002));

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do? Answer: when the data in array is a string saying error

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  //place holders of max and min and assume max and min is the max or min
  let max = temps[0];
  let min = temps[0];

  //for loop to determine the max and min in the array
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue; //skips if it is not a number

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);

  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

//merging two arrays
const calcTempAmplitudeNew = function (t1, t2) {
  // const temps = t1.concat(t2);
  const temps = [...t1, ...t2];
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// Debugging with the Console and Breakpoints
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // C) FIX
    // value: Number(prompt("Degrees celsius:")),
    value: 10,
  };

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);

// Coding Challenge #1
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

//  1) Understanding the problem
// with an array display the number temperature per day, the first value of the array is in 1 days

// 2) Breaking up into sub-problems
// -transform array to string
// -transform eacch element string wth Celsius
// - Strings need to contain date
// -add ...between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
function printForecast(arr) {
  let weatherMessage = "... ";
  for (let i = 0; i < arr.length; i++) {
    weatherMessage += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log(weatherMessage);
}
printForecast(data1);
printForecast(data2);

// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/
function analyzeWorkWeek(hours) {
  // 1. Total hours worked
  const totalHours = hours.reduce((acc, current) => acc + current, 0);

  // 4. Number of days worked (days where hours > 0)
  const daysWorked = hours.filter(h => h > 0).length;

  // 2. Average daily hours (only based on days actually worked)
  const averageHours = daysWorked > 0 ? totalHours / daysWorked : 0;

  // 3. The day with the most hours worked
  const maxHours = Math.max(...hours);
  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const bestDay = dayNames[hours.indexOf(maxHours)];

  // 5. Whether the week was full-time (35 hours or more)
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours: averageHours.toFixed(2), // Rounds to 2 decimal places
    bestDay,
    daysWorked,
    isFullTime,
  };
}

const testData = [7.5, 8, 6.5, 0, 8.5, 4, 0];
console.log(analyzeWorkWeek(testData));
