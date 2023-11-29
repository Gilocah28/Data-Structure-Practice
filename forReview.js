// var chunk = function(arr, size) {
//     let result = []
//     for(i=0; i<arr.length; i+=size){
//         result.push(arr.slice(i, i+size))
//     }
//     return result
// };


// var createCounter = function(n) {
    
//     return function() {
//         return n++;
//     };
// };

// var fib = function(n) {
//     if (n < 2) {
//        return n
//    }
//    return fib(n - 1) + fib(n - 2)
// };

// console.log(fib(2))
// console.log(fib(3))
// console.log(fib(4))

// var isPalindrome = function (x) {
//     return x < 0 ? false : (x === +x.toString().split("").reverse().join("")); 
//  };

// var fizzBuzz = function (n) {
//     const result = []
//     for (let i = 1; i <= n; i++) {
//         let str = ''
//         if (i % 3 === 0) {
//             str += 'Fizz'
//         }
//         if (i % 5 === 0) {
//             str += 'Buzz'
//         }
//         if (str === '') {
//             str += i
//         }
//         result.push(str)
//     }
//     return result
// };

// var chunk = function (arr, size) {
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         let lastItem = result[result.length - 1]

//         if (!lastItem || lastItem.length === size) {
//             result.push([arr[i]])
//         } else {
//             lastItem.push(arr[i])
//         }
//     }
//     return result;
// };