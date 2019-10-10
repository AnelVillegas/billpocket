let a = 100;
let x = 2;
let primeNum = [];

for (; x < a; x++) {

  if (prime(x)) {
    primeNum.push(x);
  }
  
}

console.log(primeNum);

function prime(number) {

  for (var i = 2; i < number; i++) {

    if (number % i === 0) {
      return false;
    }

  }

  return number !== 1;
}