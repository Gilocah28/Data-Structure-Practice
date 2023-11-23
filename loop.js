// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ]

// const mernStack = ['MongoDB', 'Express', 'React', 'Node']


// const fruits = ['banana', 'orange', 'mango', 'lemon']

// const fullStack = [['HTML', 'CSS', 'JS', 'React'],['Node', 'Express', 'MongoDB']]





//   for(let i = 0; i < 10; i++){
//     console.log(i)
//   }
// let i = 0
// while(i < 10){
//     console.log(i)
//     i++


// for(let i = 0; i <= 5; i++){
//     let str = '';
//     for(let j = 0; j <= i; j++){
//         str += '#'
//     }
//     console.log(str)
// }

// let sumEven = 0
// let sumOdd = 0;
// for(let i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//         sumEven += i;
//     }else{
//         sumOdd += i;
//     }
// }
// console.log(sumEven)
// console.log(sumOdd)


// const strChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
// let password = '';
// for(let i = 0; i < 5; i++){
//     let strGenerator = Math.floor(Math.random() * 10)
//     // password += strChar.charAt(strGenerator)
//     console.log(strGenerator)
// }
// const newArr = []
// for(let i = 0; i < countries.length; i++){
//     newArr.push(countries[i].toUpperCase())
// }
// console.log(newArr)

// const newArr = []
// for(let i = 0; i < countries.length; i++){
//     let counrty = countries[i]
//     let sliceCountry = countries[i].slice(0,3).toUpperCase()
//     let counrtyLength = countries[i].length
//     newArr.push([counrty,sliceCountry, counrtyLength])
// }
// console.log(newArr)
// const countryLand = []
// const country = []
// for(let i = 0; i < countries.length; i++){
//     if(countries[i].toLowerCase().includes('ia')){
//         countryLand.push(countries[i])
//     }else{
//         country.push(countries[i])
//     }
// }
// console.log(countryLand)
// console.log(country)

// let longestStrArr = []
// for(let i = 0; i < countries.length; i++){
//     if(countries[i].length === 5){
//        longestStrArr.push(countries[i])
//     }
// }

// console.log(longestStrArr)

// const webAndLength = []

// for(let i = 0; i < webTechs.length; i++){
//   let arrValue = webTechs[i]
//   let arrLength = webTechs[i].length
//   webAndLength.push([arrValue,arrLength])
// }

// console.log(webAndLength)

// let arrStr = [];
// for (let i = 0; i < mernStack.length; i++) {
//     let item = mernStack[i].charAt(0)
//     arrStr.push(item)
// }
// console.log(arrStr.join(''))
// for(let i of mernStack){
//     console.log(i)
// }


// const webDev = [];
// for(let i = 0; i < fullStack.length; i++){
//     for(let k = 0; k < fullStack[i].length; k++){
//         webDev.push(fullStack[i][k])
//     }
// }
// console.log(webDev)

const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]

// const arryWithLand = []


// for(let i = 0; i < countries.length; i++){
//     if(countries[i].toLowerCase().includes('land')){
//         arryWithLand.push(countries[i])
//     }
// }

// console.log(arryWithLand)


// Find the country containing the hightest number of characters in the countries array
// let arryWithLand = '';
// for(let i = 0; i < countries.length; i++){
//     if(countries[i].length > arryWithLand.length){
//         arryWithLand = countries[i]
//     }
// }
// console.log(arryWithLand)

// Extract all the countries containing two or more words from the countries array and print it as array
// let arryWithLand = [];
// for(let i = 0; i < countries.length; i++){
//     if(countries[i].includes(' ')){
//         arryWithLand.push(countries[i])
//     }
// }
// console.log(arryWithLand)

// Reverse the countries array and capitalize each country and stored it as an array
// const reverseArr = []
// for(let i = countries.length -1; i >= 0; i-- ){
//     reverseArr.push(countries[i].toUpperCase())
// }

// console.log(reverseArr)
