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

