const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
//callback function allows us to create abstraction

// A "Hilda" Bonus Challenge 🎮
// If you want to apply this to your game knowledge, try this:
// Create a function checkHP that takes a number and returns "Low Health!" if it's below 30.
// Create a function checkRole that takes a string and returns "Tanky!" if the string is "Roamer".
// Create a Higher-Order Function analyzeHero that takes a hero object and a "checker" function.

function checkHP(health) {
  if (health.hp < 30) return 'Low Health!'; // Added return
  return 'Healthy'; // Added a fallback so it doesn't return undefined if HP is high
}

function checkRole(str) {
  if (str.role === 'Roamer') return 'Tanky'; // Added return
  return 'Not a Roamer';
}

const hilda = { name: 'Hilda', hp: 25, role: 'Roamer' };

const analyzeHero = function (hero, fn) {
  // Abstraction: We don't care what 'fn' does, we just run it!
  // We pass the property the function needs (like hero.hp or hero.role)
  const result = fn(hero);

  console.log(`--- Hero Analysis: ${hero.name} ---`);
  console.log(`Analysis Result: ${result}`);
  console.log(`Checked by function: ${fn.name}`);
};

analyzeHero(hilda, checkHP);
analyzeHero(hilda, checkRole);
