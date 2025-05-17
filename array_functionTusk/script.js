const arr = [4, 8, 2, 11, 6, 7, 10];
//1
const findMax = (arr) => {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log( "maximum number",max);
};
//2
const sumOfArray = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
   
      total += arr[i];
    
  }

  console.log("toltal of array element",total);
};



//3 
const countOdd = (arr)=> {
    let total = 0;
  for (let i = 0; i < arr.length; i++) {
   
    if(arr[i] % 2 !== 0) {
        total += 1
    }
    
  }

  console.log( "how many odds number present in the given array",total);

}

countOdd(arr)