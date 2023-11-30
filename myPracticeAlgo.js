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


const arrOfFruits = ['Banana', 'Apple', 'Grapes', 'Pineapple', 'Orange'].sort()
const arrNumber = []

// const binarySearch = (arr, item) => {
//     let left = 0
//     let right = arr.length -1
//     while(left <= right){
//         const middle = Math.floor((left + right) / 2)
//         const midValueOfArray = arr[middle]
//         if(midValueOfArray === item){
//             return middle // if you want to see the actual value of your searching code this arr[middle]
//         }else if(midValueOfArray < item){
//             left = middle + 1
//         }else{
//             right = middle - 1
//         }
//     }
//     return -1
// }

// for(let i = 0; i <= 100; i++){
//     arrNumber.push(i)
// }

// console.log(binarySearch(arrNumber, 100))