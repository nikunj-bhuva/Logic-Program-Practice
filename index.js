// Factorial Sum //

let userNumber = parseInt(prompt("enter your Number"));

const factorialNumber = (number) => {
  let factorial = number;
  for (let i = number - 1; i >= 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
};

const result = factorialNumber(userNumber);
console.log(result);
