// Array of URLs to the external JS files
const functionUrls = [
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/factorial.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/factorize.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/fibonacci.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/gcd.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/gcdextended.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/isabundant.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/isarmstrong.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/isdeficient.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/isodd.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/ispalindrome.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/isperfect.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/isperfectsquare.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/ispoweroftwo.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/isprime.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/lcm.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/median.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/mode.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/nextprime.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/previousprime.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/product.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/sumofcubes.js",
  "https://raw.githubusercontent.com/0mgRod/math-functions/main/functions/sumofsquares.js"
];

// Array to hold the loaded function objects
const functionObjects = [];

// Load the external JS files and store the function objects in the array
functionUrls.forEach(url => {
  fetch(url)
    .then(response => response.text())
    .then(text => {
      // Evaluate the JS code to create the function object
      const func = eval(text);
      // Add the function object to the array
      functionObjects.push(func);
    })
    .catch(error => console.error(error));
});

// Call one of the loaded functions as an example
const result = functionObjects[0](5); // Computes 5!
console.log(result);
