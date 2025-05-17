// Arrow function that performs division using Promises
const divide = (a, b) => {
  return new Promise((resolve, reject) => {
    console.log(`Dividing ${a} by ${b}...`);
    if (b === 0) {
      reject("Error: Division by zero is not allowed.");
    } else {
      resolve(a / b);
    }
  });
};

// Test cases
const testCases = [
  [10, 2],
  [20, 4],
  [15, 0],
  [9, 3],
  [7, 0],
];

// Run and handle each test case
testCases.forEach(([a, b]) => {
  divide(a, b)
    .then(result => {
      console.log(`Result: ${result}`);
    })
    .catch(error => {
      console.log(error);
    });
});









