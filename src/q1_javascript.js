// Question 1 - Functions and Conditionals
// Topic: Temperature Converter
//
// Task 1:
// Write a function called convertTemp that accepts two arguments:
//   - value: a numeric temperature value
//   - unit: a string, either "C" for Celsius or "F" for Fahrenheit
//
// The function should:
//   - Convert Celsius to Fahrenheit if unit is "C"  →  Formula: (value × 9/5) + 32
//   - Convert Fahrenheit to Celsius if unit is "F"  →  Formula: (value − 32) × 5/9
//   - Return -1 if unit is neither "C" nor "F"
//   - Round the result to 2 decimal places before returning

function convertTemp(value, unit) {
  // Add your code here
  const converter = {
    C: value => (value * 9 / 5) + 32,
    F: value => (value - 32) * 5 / 9,
  };
  let func = converter[unit];
  return func ? func(value).toFixed(2) : -1;
}


// Task 2:
// Call the function with the following inputs and print each result:
//   convertTemp(100, "C")      → Expected: 212.0
//   convertTemp(32, "F")       → Expected: 0.0
//   convertTemp(37, "C")       → Expected: 98.6
//   convertTemp("invalid","X") → Expected: -1

// Add your code here
console.log('convertTemp(100, "C")      →', convertTemp(100, "C"));
console.log('convertTemp(32, "F")       →', convertTemp(32, "F"));
console.log('convertTemp(37, "C")       →', convertTemp(37, "C"));
console.log('convertTemp("invalid","X") →', convertTemp("invalid", "X"));