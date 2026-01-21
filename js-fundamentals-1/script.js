// let js = "amazing";
// if (js === "amazing") alert("JS IS FUN!");

// console.log(40 + 8 + 23 + 10);

// console.log("Allyn");
// console.log(23);

// let firstName = "Allyn Joshua";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let myFirstJob = "Site Engineer Intern";
// let myCurrentJob = "Web Developer";

// true;
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof `javascriptIsFun`);
// console.log(typeof 23);
// console.log(typeof "Allyn");

// javascriptIsFun = "YES!";
// console.log(typeof `javascriptIsFun`);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;
// const job;

// var job = "programmer";
// job = "teacher";

//Math Operators
// const now = 2026;
// const ageAllyn = now - 2002;
// const ageAngel = now - 2004;
// displays in one line of console
// console.log(ageAllyn, ageAngel);

// console.log(ageAllyn * 2, ageAllyn / 10, 2 ** 3);

// const firstName = "Allyn Joshua";
// const lastName = "Nieva";
// console.log(firstName + " " + lastName);
// console.log(`${firstName} ${lastName}`);

//Assignment Operators
// let x = 10 + 5; //15
// x += 10; // x = x + 10
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

//comparison operator
// console.log(ageAllyn > ageAngel);
// console.log(ageAngel >= 18);

// const isLegalAge = ageAngel >= 18;

// console.log(now - 2002 > now - 2004);

// const now = 2026;
// const ageAllyn = now - 2002;
// const ageAngel = now - 2004;
// console.log(now - 2002 > now - 2004);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageAllyn + ageAngel) / 2;
// console.log(ageAllyn, ageAngel, averageAge);

// const firstName = "Allyn Joshua";
// const job = "developer";
// const birthYear = 2002;
// const year = 2026;

// const allyn =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(allyn);

// const allynNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(allynNew);

// console.log(`Just a regular string.`);
// console.log("String with\nmultiple\nlines");
// console.log(`String with
// multiple
// lines.`);

// const age = 15;

// if (age >= 18) {
//   console.log("Angel can start her driving license 🚗!");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :>`);
// }

// const birthYear = 2002;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

//type conversion
// const inputYear = "2002";
// console.log(Number(inputYear) + 18);
// console.log(Number("Allyn"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercion
// console.log("I am " + 23 + " years old.");
// console.log("23" - "10" - 3);
// console.log("23" / "2");

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); //false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); //false
// console.log(Boolean("")); //false
// console.log(Boolean({})); //true

// const money = 100;
// if (money) {
//   console.log(`Don't spend it all.`);
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// const age = "18";
// if (age === 18) console.log("You just became an adult(strict)");
// if (age == 18) console.log("You just became an adult(loose)");

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7.");
// }
// if (favourite !== 23) console.log("Why not 23?");

// const hasDriversLicense = true; //A
// const hasGoodVision = false; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const isTired = true;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }
// const day = "monday";

// switch (day) {
//   case "monday": //day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to coding metup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record Videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding metup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record Videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a valid day");
// }

const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine🍷";
} else {
  drink2 = "water💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water💧"}`);

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive");

const interface = "Audio";
