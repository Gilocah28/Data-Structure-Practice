// const strReverseV1 = str => {
//     return str.split('').reverse().join('')
// }

// console.log(strReverseV1('Vertux'))

// const strReverseV2 = str => {
//     const strArr = []
//     for (let i = str.length; i >= 0; i--) {
//         strArr.push(str[i])
//     }
//     return strArr.join('')
// }
// console.log(strReverseV2('Vertux'))

// const strReverseV3 = str => {
//     let strString = ''
//     for (let i = 0; i < str.length; i++) {
//         strString = str[i] + strString
//     }
//     return strString
// }
// console.log(strReverseV3('Vertux'))



// var reverseString = function(s) {
//     let left = 0, right = s.length -1
//     for(let i = 0; i < s.length; i++){
//         let temp = s[left]
//         if(left <= right){
//             s[left] = s[right]
//             s[right] = temp
//             left++
//             right--
//         }
//     }
//     return s
// };

// var reverseString = function (s) {
//     const strArr = []
//     for (let i = 0; i < s.length; i++) {
//         strArr.unshift(s[i])
//     }
//     return strArr
// };

// console.log(reverseString(["H","e","l","l","o"]))



// var isPalindrome = function(x) {
//     const reverseNum = x.toString().split('').reverse().join('')
//     const strNum = parseInt(reverseNum)
//     return x === strNum ? true : false
// };

// console.log(isPalindrome(-111))

// var isPalindrome = function(x) {
//     return x < 0 ? false : (x === +x.toString().split("").reverse().join(""));
// };

// console.log(isPalindrome(121))