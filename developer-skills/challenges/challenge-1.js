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
