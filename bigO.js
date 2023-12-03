function factorial(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = i ** n;
  }
  return sum;
}

console.log(factorial(5));
