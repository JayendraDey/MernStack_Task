// Input number
let n = 153;

// 1. Sum of first n natural numbers
let sumFirstN = 0;
for (let i = 1; i <= n; i++) {
  sumFirstN += i;
}
console.log(`Sum of first ${n} natural numbers: ${sumFirstN}`);

// 2. Print table of n
console.log(`Multiplication Table of ${n}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}

// 3. Check if n is a prime number
let isPrime = true;
if (n <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      
    }
  }
}
console.log(`Is ${n} a prime number? ${isPrime ? 'Yes' : 'No'}`);

// 4. Print all factors of n
let factors = [];
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    factors.push(i);
  }
}
console.log(`Factors of ${n}: ${factors.join(', ')}`);

// 5. Find sum of digits
let sumOfDigits = 0;
let temp = n;
while (temp > 0) {
  sumOfDigits += temp % 10;
  temp = Math.floor(temp / 10);
}
console.log(`Sum of digits of ${n}: ${sumOfDigits}`);

// 6. Check if n is an Armstrong number
let armstrongSum = 0;
temp = n;
while (temp > 0) {
  let digit = temp % 10;
  armstrongSum += digit ** 3;
  temp = Math.floor(temp / 10);
}
let isArmstrong = (armstrongSum === n);
console.log(`Is ${n} an Armstrong number? ${isArmstrong ? 'Yes' : 'No'}`);












