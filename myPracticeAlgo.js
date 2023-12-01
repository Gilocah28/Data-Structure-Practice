// const strReverseV1 = (str) => {
//     return str.split('').reverse().join('')
//   } 


//   const strReverseV2 = (str) => {
//     const strArray = []
//     for(let i = str.length; i >= 0; --i){
//       strArray.push(str[i])
//     }
//     return strArray.join('')
//   } 


//   const strReverseV3 = (str) => {
//     let string = ''
//     for(let i = 0; i < str.length; i++){
//       string = str[i] + string
//     }
//     return string
//   } 

//   console.log(strReverseV1('Hello 1v'))
//   console.log(strReverseV2('Hello 2v'))
//   console.log(strReverseV3('Hello 3v'))

// const reverseIntV2 = num => {
//   const numToStr = num.toString().split('').reverse().join('')

//   return parseInt(numToStr)
// }

// console.log(reverseIntV1(12))


// const reverseIntV2 = num => {
//   const numToStr = num.toString()
//   let string = ''
//   for(let i = 0; i < numToStr.length; i++){
//     string = numToStr[i] + string
//   }

//   return string
// }

// console.log(reverseIntV2(-121293745239))


// const reverseIntV3 = n => {
//   const numToStr = n.toString().split('').reverse().join('')
//   const strToNum = parseInt(numToStr)
//   if(n < 0){
//     return strToNum * -1
//   }
//   return strToNum
// }
// console.log(reverseIntV3(-121293745239))

// function chunkArrayInGroups(arr, size) {
//     let temporaryArr = []
//     const arrResult = []

//     for(let i = 0; i < arr.length; i++){
//         if(i % size !== size -1){
//             temporaryArr.push(arr[i])
//         }else{
//             temporaryArr.push(arr[i])
//             arrResult.push(temporaryArr)
//             temporaryArr = []
//         }
//     }

//     if(temporaryArr.length !== 0){
//         arrResult.push(temporaryArr)
//     }
//     return arrResult
// }

// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))




// Day 2

// function palindrome(str) {
//     const pureStr = str.toLowerCase().match(/[a-z0-9]/g)
//     return pureStr.join('') === pureStr.reverse().join('')
// }

// console.log(palindrome("_eye"))



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




// const anagramsV2 = (strA, strB) => {
//     strA = strA.toLowerCase().replace(/[\W_]+/g, '')
//     strB = strB.toLowerCase().replace(/[\W_]+/g, '')
//     const strSortedA = strA.split('').sort().join('')
//     const strSortedB = strB.split('').sort().join('')
//     return strSortedA === strSortedB;
// }
// console.log(anagramsV2('heart', 'earth'))


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

// console.log(caesarCipher('abcd', 100))


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


// const pyramidV1 = n => {
//     for (let i = 1; i <= n; i++) {
//         const padding = ' '.repeat(n - i)
//         const hashes = "#".repeat(i * 2 - 1)
//         console.log(padding + hashes + padding)
//     }
// }

// pyramidV1(5)


// const pyramidV2 = n => {
//     for (let i = 1; i <= n; i++) {
//         let piramid = ''

//         for(let k = n - i; k > 0; k--){
//             piramid += ' '
//         }

//         for(let j = i * 2 - 1; j > 0; j--){
//             piramid += '#'
//         }

//         console.log(piramid)
//     }
// }

// pyramidV2(5)





// const vowels = str => {
//     const vowel = ['a','e','i','o','u']
//     let counter = 0
//     for(let i = 0; i < str.length; i++){
//         const char = str[i].toLowerCase()
//         for(let k = 0; k < vowel.length; k++){
//             const vowels = vowel[k]
//             if(char === vowels){
//                 counter++
//             }
//         }
//     }
//     return counter
// }
// console.log(vowels('I am a world-class developer using iteration'))
// console.log(vowels('What'))
// console.log(vowels('Gibermar P. Regalado'))
// console.log(vowels('Erica Chico'))






// const linearSearchIndexOf = (arr,val) => {

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].toLowerCase() === val.toLowerCase()){
//             return i
//         }
//     }
//     return -1
// }


// console.log(linearSearchIndexOf(arrOfFruits,'Ornge'))


// const linearSearchIncludes = (arr,val) => {

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].toLowerCase() === val.toLowerCase()){
//             return true
//         }
//     }
//     return false
// }

// console.log(linearSearchIncludes(arrOfFruits,'Orange'))


// const linearSearchFind = (arr,value) => {

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].toLowerCase() === value.toLowerCase()){
//             return arr[i]
//         }
//     }
//     return undefined
// }

// console.log(linearSearchFind(arrOfFruits,'Grpes'))


// const arrOfFruits = ['Banana', 'Apple', 'Grapes', 'Pineapple', 'Orange']
// const arrNumber = []


// // Binary Search best use for sorted array
// const binarySearch = (arr, item) => {
//     let leftIndex = 0
//     let rightIndex = arr.length - 1

//     while (leftIndex <= rightIndex) {
//         const midIndex = Math.floor((leftIndex + rightIndex) / 2)
//         const midVal = arr[midIndex]

//         if (midVal === item) {
//             return midVal
//         } else if (midVal < item) {
//             leftIndex = midIndex + 1
//         } else {
//             rightIndex = midIndex - 1
//         }
//     }

//     return -1
// }


// console.log(binarySearch(arrNumber, 1))

// var search = function (nums, target) {
//     let firstIndex = 0
//     let lastIndex = nums.length - 1
//     while (firstIndex <= lastIndex) {
//         const middleIndex = Math.floor((firstIndex + lastIndex) / 2)
//         if(nums[middleIndex] < target){
//             firstIndex = middleIndex + 1
//         }else if(nums[middleIndex] > target){
//             lastIndex = middleIndex - 1
//         }else{
//             return middleIndex

//         }
//     }
//     return -1
// };

// console.log(search(arrNumber, 1000))

// const stringPattern = (str, target) => {
//     let count = 0

//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < target.length; j++) {
//             if (target[j] !== str[i + j]) {
//                 break;
//             }
//             if (j === target.length - 1) {
//                 count++
//             }
//         }
//     }

//     return count

// }

// console.log(stringPattern('lolol', 'lol'))

// const arr = [13, 12, 34, 46, 2, 4, 1, 6, 8, 3]

// function swap(arr, i, j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp;
// }

// const bubbleSort = arr => {
//     let counter = 0 this for count the execution of the sorting array

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i; j++) {
//             counter++
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1)
//             }
//         }
//     }
//     return {arr,counter}
// }



// console.log(bubbleSort(arr))
// function bubbleSortV2(arr) {
//     let counter = 0
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i; j++) {
//             counter++
//             if(arr[j] > arr[j + 1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return {
//         arr,
//         counter
//     }
// }

// console.log(bubbleSortV2(arr))



// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let swapIdx = i

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[swapIdx]) {
//                 swapIdx = j
//             }
//         }
//         swap(arr,i,swapIdx)
//     }
//     return arr
// }
// console.log(selectionSort(arr))


// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let swapIdx = i

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[swapIdx]) {
//                 swapIdx = j
//             }
//         }

//         let temp = arr[i]
//         arr[i] = arr[swapIdx]
//         arr[swapIdx] = temp
//     }
//     return arr
// }
// console.log(selectionSort(arr))

// const arr1 = [1,5]
// const arr2 = [4,6,7]

// function mergeSort(arr1, arr2) {
//     const result = []
//     let pointerOne = 0
//     let pointerTwo = 0

//     while (pointerOne < arr1.length && pointerTwo < arr2.length) {

//         if (arr1[pointerOne] < arr2[pointerTwo]) {
//             result.push(arr1[pointerOne])
//             pointerOne++
//         } else {
//             result.push(arr2[pointerTwo])
//             pointerTwo++
//         }

//     }
//     while (pointerOne < arr1.length) {

//         result.push(arr1[pointerOne])
//         pointerOne++

//     }
//     while (pointerTwo < arr2.length) {

//         result.push(arr2[pointerTwo])
//         pointerTwo++

//     }

//     return result
// }




// console.log(mergeSort(arr1,arr2))











