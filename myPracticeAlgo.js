const strReverseV1 = (str) => {
    return str.split('').reverse().join('')
  } 
  
  
  const strReverseV2 = (str) => {
    const strArray = []
    for(let i = str.length; i >= 0; --i){
      strArray.push(str[i])
    }
    return strArray.join('')
  } 
  
  
  const strReverseV3 = (str) => {
    let string = ''
    for(let i = 0; i < str.length; i++){
      string = str[i] + string
    }
    return string
  } 
  
  console.log(strReverseV1('Hello 1v'))
  console.log(strReverseV2('Hello 2v'))
  console.log(strReverseV3('Hello 3v'))