// function fibonacci(n) {
//     const fib = [0, 1]
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     return fib;
// }

// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(7))

// function factorial(n){
//     let sum = 1
//     for(let i = 2; i <= n; i++){
//         sum = sum * i
//     }
//     return sum
// }
// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(5))


// function isPrime(n) {
//     if (n < 2) {
//         return false
//     }
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// console.log(isPrime(1))
// console.log(isPrime(5))
// console.log(isPrime(4))

// function isPowerOfTwo(n) {
//     if (n < 1) return false
//     while (n > 1) {
//         if (n % 2 !== 0) {
//             return false
//         }
//         n = n / 2
//     }
//     return true
// }

// Another solution
// function isPowerOfTwo(n) {
//     if (n < 1) {
//         return false
//     }
//     return (n & (n - 1)) === 0
// }

// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(2))
// console.log(isPowerOfTwo(5))


// Recursive
// function recursiveFibonacci(n) {
//     if (n < 2) {
//         return n
//     }
//     return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
// }

// console.log(recursiveFibonacci(0))
// console.log(recursiveFibonacci(1))
// console.log(recursiveFibonacci(6))

// function recursiveFactorial(n){
//     if(n <= 0){
//         return 1
//     }
//     return n * recursiveFactorial(n - 1)
// }

// console.log(recursiveFactorial(1))
// console.log(recursiveFactorial(4))
// console.log(recursiveFactorial(5))



// search Algorithms

// const linearSearch = (arr, target) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearSearch([-5, 2, 10, 4, 6], 10))
// console.log(linearSearch([-5, 2, 10, 4, 6], 6))
// console.log(linearSearch([-5, 2, 10, 4, 6], 20))