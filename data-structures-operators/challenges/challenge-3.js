// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
// just get the values of the map
// put them in a set to have unique values
// spread operator to be in an array
const events = [...new Set(gameEvents.values())];

//2
//use method that deletes from a map more modern so delete
gameEvents.delete(64);

//3
//An event happened, on average, every 9 minutes
// unit is minutes/event
console.log(
  `An event happened, on average every ${90 / gameEventes.size} minutes`,
);

//4
// for (const [time, event] of gameEvents) {
//   if (time <= 45) {
//     console.log(`[FIRST HALF] ${time}: ${event}`);
//   } else if (time > 45) {
//     console.log(`[SECOND HALF] ${time}: ${event}`);
//   }
// }

//other way using ternary
for (const [time, event] of gameEvents) {
  const half = time <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${half} ${time}: ${event}`);
}
