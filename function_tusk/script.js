// Q1 
const arr = [1,2,3,4,5,6,7,8,9]

let newArr = arr.map((ele)=>{
    return ele*ele
})


//Q2 

const grade = (score)=>{
   if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";

}


//Q3 
const car = {
  company: "Toyota",
  model: "Camry",
  year: 2024
};

function updateYear(newYear) {
  car.year = newYear;
}

const { model, year } = car;


//Q4 
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = num => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const primes = numbers.filter(isPrime);


// Q5 
// map: for traverses and to get new array
// filter: to fiter particular condition
// reduce: to add values.




// Q6 
const fetchData = async (url)=>{
    const data = await fetch(url)
    const finalData = await data.json()

    console.log(finalData);
    

}
// fetchData("https://jsonplaceholder.typicode.com/todos")


//Q7 

const person = {
  name: "jay",
  address: {
    street: "123 Main St",
    city: "Metropolis",
    zip: "12345"
  },
  contact: {
    phone: "555-1234",
    email: "alice@example.com"
  }
};

console.log(newArr);
console.log(grade(80));
updateYear(2025);
console.log(`Model: ${model}, Year: ${year}`); 
console.log(primes); 

const phoneNumber = person.contact?.phone;
console.log(phoneNumber); 