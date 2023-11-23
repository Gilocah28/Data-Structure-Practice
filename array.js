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

// const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// // console.log(itCompanies)
// // console.log('The Number of Companies is: ',itCompanies.length)
// // console.log(itCompanies[0],itCompanies[2],itCompanies[itCompanies.length-1])
// // console.log(itCompanies[0],itCompanies[1],itCompanies[2],itCompanies[3],itCompanies[4],itCompanies[5],itCompanies[6])
// // console.log(itCompanies[0].toUpperCase())
// // // console.log(itCompanies.to)


// // const filterArr = (arr) =>{

// // const sliceFirstThree = itCompanies.slice(0,3)
// // const sliceLastThree = itCompanies.slice(itCompanies.length -3, lastIndex)
// // console.log(sliceLastThree)

// const lastIndex = itCompanies.indexOf('Amazon')
// const removesMiddleElement = itCompanies.splice()
// console.log(removesMiddleElement)

// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// const remove = text.split(',').join('')
// const wordsToArr = remove.split(' ')
// // const words =remove
// // const removes = remove.split(' ')
// console.log(wordsToArr)
// console.log(wordsToArr.length)


// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// shoppingCart.unshift('Meat')
// shoppingCart.push('Sugar')

// console.log(shoppingCart)
// const indexOfhoney = shoppingCart.indexOf('Honey')
// console.log(indexOfhoney)
// shoppingCart.splice(indexOfhoney,1)

// const indexOfTea = shoppingCart.indexOf('Tea')
// shoppingCart[indexOfTea] = 'Green Tea'
// console.log(shoppingCart)


// console.log(countries)

// const items = countries.includes('Ethiopia')
// const indexFinder = countries.indexOf('Ethiopia')



// if(items){
//     console.log(countries[indexFinder])
// }else{
//     console.log('Not Found')
// }

// console.log(items)

// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] 

// const itemChecker = countries.includes('Sass')

// if(itemChecker){
//     console.log('Sass is CSS preprocess')
// }else{
//     webTechs.push('Sass')
//     console.log(webTechs)
// }

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// const fullStack = frontEnd.concat(backEnd)
// console.log(fullStack)

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// console.log(ages.length)

// const sortArray = ages.sort((a,b)=>{
//     return a - b;
// })

// const findingMiddleItem = Math.floor(ages.length / 2)

// console.log(ages[findingMiddleItem])

// const maxAge = Math.max(...ages)
// const minAge = Math.min(...ages)
// const ageRange = maxAge - minAge

// console.log(ageRange)
