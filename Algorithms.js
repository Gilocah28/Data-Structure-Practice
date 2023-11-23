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

// binary Search
// const binarySearch = (arr, target) => {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1

//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//         if (target === arr[middleIndex]) {
//             return middleIndex
//         }
//         if (target < arr[middleIndex]) {
//             rightIndex = middleIndex - 1
//         } else {
//             leftIndex = middleIndex + 1
//         }
//     }
//     return -1
// }

// console.log(binarySearch([-5, 2, 4, 6, 10], 10))
// console.log(binarySearch([-5, 2, 4, 6, 10], 6))
// console.log(binarySearch([-5, 2, 4, 6, 10], 20))

// Recursive Binary Search
// const recursiveBinarySearch = (arr, target) => {
//     return search(arr, target, 0, arr.length - 1)
// }

// function search(arr, target, leftIndex, rightIndex) {
//     if (leftIndex > rightIndex) {
//         return -1
//     }
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//     if (target === arr[middleIndex]) {
//         return middleIndex
//     }
//     if (target < arr[middleIndex]) {
//         return search(arr, target, leftIndex, middleIndex - 1)
//     } else {
//        return search(arr, target, middleIndex + 1, rightIndex)
//     }
// }

// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10))
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6))
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20))

// JavaScript Algorithms - 19 - Sorting Algorithms

// -----Bubble Sort ----
// const bubbleSort = (arr) => {
//     let swapped

//     do {
//         swapped = false;
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped)
// }
// const arr = [8, 20, -2, 5, -6]
// bubbleSort(arr)
// console.log(arr)

// -----Insertion Sort ----
// const insertionSort = (arr) => {
//     for (let i = 1; i < arr.length; i++) {
//         let numberToInsert = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > numberToInsert) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = numberToInsert;
//     }
// };

// const arr = [8, 20, -2, 5, -6];
// insertionSort(arr);
// console.log(arr);
