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

// // Another solution
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

// // search Algorithms

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

// // binary Search
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

// // Recursive Binary Search
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

// // JavaScript Algorithms - 19 - Sorting Algorithms

// // -----Bubble Sort ----
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

// // -----Insertion Sort ----
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

// // const arr = [8, 20, -2, 5, -6];
// insertionSort(arr);
// console.log(arr);



// // -----Quick Sort ----
// const quickSort = (arr) => {
//     if(arr.length < 2){
//         return arr
//     }
//     let pivot = arr[arr.length - 1]
//     let left = []
//     let rigth = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             rigth.push(arr[i])
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(rigth)]
// }




// // const arr = [8, 20, -2, 5, -6];
// console.log(quickSort(arr))


// Reverse String V1
// const strReverse = (str) => {
//     let res = ''
//     for(let i = 0; i < str.length; i++){
//         const everyLetters = str[i]
//         res = everyLetters + res
//     }
//     return res

// }
// // console.log(strReverse('hello'))

// console.log(strReverse('Hello Gibermar'))

// Palindrome Version 1
// const palindrome = str => {
//     str = str.toLowerCase()
//     const reversed = str.split('').reverse().join('')
//     if(str === reversed){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(palindrome('Madam'))

// Palindrome Version 2
// const palindrome = str => {
//     str = str.toLowerCase()
//     return str === str.split('').reverse().join('')
// }
// console.log(palindrome('love'))
// console.log(palindrome('Madam'))



// ReverseInt Interger
// const reverseInt = (n) => {
//     const numToStr = n.toString()
//     const backToNum = parseInt(numToStr.split('').reverse().join(''))
//     return backToNum
// }


// console.log(reverseInt(-123456789))

// ReverseInt Interger Version 2
// const reverseInt = (n) => {
//     let numToStr = n.toString().split('').reverse().join('')
//     numToStr = parseInt(numToStr)
//     if(n < 0){
//         return numToStr * -1
//     }
//     return numToStr
// }

// console.log(reverseInt(-13))


// Max Character Version 1
// const maxChar = str => {
//     const charCounter = {};
//     let maxChar = '';
//     let maxCount = 0;

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i]
//         charCounter[char] = charCounter[char] + 1 || 1

//         if (charCounter[char] > maxCount) {
//             maxChar = char;
//             maxCount = charCounter[char]
//         }
//     }
//     return { maxChar, maxCount }
// }


// console.log(maxChar('I Loveeeeeee noodles'))
// console.log(maxChar('1337'))

// Fizzbuzz Version 1
// const fizzBuzz = n => {
//     for (let i = 1; i <= n; i++) {
//         if (i % 5 === 0 && i % 3 === 0) {
//             console.log('FizzBuzz')
//         } else if(i % 5 === 0){
//             console.log('Buzz')
//         }else if (i % 3 === 0){
//             console.log('Fizz')
//         }else{
//             console.log(i)
//         }
//     }
// }
// fizzBuzz(10)


// Fizzbuzz Version 2
// const fizzBuzz = n => {
//     for (let i = 1; i <= n; i++) {
//         let str = ''
//         if(i % 3 === 0){
//             str += 'Fizz'
//         }
//         if(i % 5 === 0){
//             str += 'Buzz'
//         }
//         if(str === ''){
//             str = i
//         }
//         console.log(str)
//     }
// }
// fizzBuzz(5)


// const capatalize = str => {
//     const strSplit = str.split(' ')
//     const emptyStrArr = []

//     for(let i = 0; i < strSplit.length; i++){
//         const word = strSplit[i]
//         emptyStrArr.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
//     }
//     return emptyStrArr.join(' ')
// }


// console.log(capatalize(`I'm a little tea pot`))



// const chunk = (arr, size) => {
//     const res = []

//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i]
//         let last = res[res.length - 1]


//         if (!last || last.length === size) {
//             res.push([item])
//         } else {
//             last.push(item)
//         }
//     }
//     return res
// }
// console.log(chunk([0, 1, 2, 3, 4, 5], 4))




// const anagramsV1 = (strA, strB) => {
//     strA = strA.toLowerCase().replace(/[\W_]+/g, '')
//     strB = strB.toLowerCase().replace(/[\W_]+/g, '')

//     if (strA.length !== strB.length) {
//         return false
//     }

//     const strCount = {}
//     for (let i = 0; i < strA.length; i++) {
//         const aChar = strA[i]
//         strCount[aChar] = strCount[aChar] + 1 || 1;
//     }

//     for (let i = 0; i < strB.length; i++) {
//         const bChar = strB[i]
//         if (!strCount[bChar]) {
//             return false
//         } else {
//             strCount[bChar]--
//         }
//     }

//     return true
// }


// console.log(anagramsV1('heart', 'earth'))


// const caesarCipher = (str, shift) => {
//     const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     let res = ''
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i]
//         const idx = alphabetArr.indexOf(char)

//         if (idx === -1) {
//             res += char;
//             continue;
//         }
//         const encodedIdx = (idx + shift) % 26;
//         res += alphabetArr[encodedIdx]
//     }
//     return res
// }

// console.log(caesarCipher('abcd', 1))


// const stepsV1 = n => {
//     for(let i = 1; i <= n; i++){
//         let step = ''

//         for(let k = i; k > 0; k--){
//             step += '#'
//         }

//         for(let j = n - i; j < 0; j--){
//             step += ' '
//         }

//         console.log(step)
//     }
// }

// stepsV1(5)


// const stepsV2 = n => {

//     for(let i = 1; i <= n; i++){
//       let step = ''

//       step += "#".repeat(i)
//       step += ' '.repeat(n - i)

//       console.log(step)
//     }
// }

// stepsV2(5)
