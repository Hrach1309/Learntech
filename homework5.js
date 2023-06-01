//1. Write a function to determine if number prime.

function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

//2. Write a function to console.log all prime numbers before the given number. 

  function consolePrimesBefore(num) {
    for (let i = 2; i < num; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        console.log(i);
      }
    }
  }

//3. Write a function, which receives a string, finds possible largest numbers in the string and returns their sum.

function sumOnlyDigits(string) {
    let sum = 0
    for (let i=0; i<string.length; i++){
        if(+string[i] === +string[i] && typeof+string[i] ==='number'){
        sum += +string[i]
        } 
    }
    return sum
}

//4. & 5. missed 

