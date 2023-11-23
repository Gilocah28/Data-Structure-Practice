// const numbers = [1, 2, 3, 4, 5]


// const sumArr = arr =>{
//     let sum = null;
//     arr.forEach(element =>{
//         sum += element
//     })

//     return sum
// }

// console.log(sumArr(numbers))

// function sayHello() {
//     console.log('Hello')
//   }
//   setTimeout(sayHello, 2000)

// function sayHello() {
//     console.log('Hello')
//   }
//   setInterval(sayHello, 1000)
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => console.log(num))
// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => sum += num)
// console.log(sum)

// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// countries.forEach(value => console.log(value.toUpperCase()))

// const modifiedArray = arr.map(function (element, index , array){
//     return element
// })

// const numbers = [1, 2, 3, 4, 5]
// const numberMap = numbers.map((num) => num * num)
// console.log(numberMap)

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const namesToUpperCase = names.map((name) => name.toUpperCase())
// console.log(namesToUpperCase)

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
//     'Kenya',
// ]

// const countryUpperCase = countries.map(country => country.toUpperCase())
// console.log(countryUpperCase)

// const threeLetters = countries.map(country =>{
//     return country.toUpperCase().slice(0,3)
// })

// console.log(threeLetters)


// const countryWithLand = countries.filter((country)=>{
//     return country.includes('land')
// })
// console.log(countryWithLand)

// const countriesEndsByia = countries.filter(country => country.endsWith('ia'))
// console.log(countriesEndsByia )

// const countriesHaveFiveLetters  = countries.filter(country => country.length === 5)
// console.log(countriesHaveFiveLetters)

// const scores = [
//     { name: 'Asabeneh', score: 95 },
//     { name: 'Lidiya', score: 98 },
//     { name: 'Mathias', score: 80 },
//     { name: 'Elias', score: 50 },
//     { name: 'Martha', score: 85 },
//     { name: 'John', score: 100 },
// ]
// const scoresGreaterEighty = scores.filter((score) => score.score > 80)
// console.log(scoresGreaterEighty)

// const numbers = [1, 2, 3, 4, 5]
// const sum = numbers.reduce((accumalator,current)=>{
//     return accumalator + current
// },0)

// console.log(sum)

// const ages = [24, 22, 25, 32, 35, 18]
// const age = ages.find((age) => age < 20)

// console.log(age)

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const result = names.filter(name => name.length > 7)
// console.log(result)

// const scores = [
//     { name: 'Asabeneh', score: 95 },
//     { name: 'Mathias', score: 80 },
//     { name: 'Elias', score: 50 },
//     { name: 'Martha', score: 85 },
//     { name: 'John', score: 100 },
// ]

// const score = scores.find(user => user.score > 80)
// console.log(score)

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const ages = [24, 22, 25, 32, 35, 18]

// const result = names.findIndex((name) => name.length > 7)
// console.log(result) // 0

// const age = ages.findIndex((age) => age < 20)
// console.log(age) // 5

// const users = [
//     { name: 'Asabeneh', age: 150 },
//     { name: 'Brook', age: 50 },
//     { name: 'Eyob', age: 100 },
//     { name: 'Elias', age: 22 },
// ]
// users.sort((a, b) => {
//     if (a.age < b.age) return -1
//     if (a.age > b.age) return 1
//     return 0
// })

// console.log(users)




// Use forEach to console.log each country in the countries array.
// countries.forEach(country =>{
//     console.log(country)
// })

// Use forEach to console.log each name in the names array.
// names.forEach(name => console.log(name))

// Use forEach to console.log each number in the numbers array.
// numbers.forEach(numbers => console.log(numbers))


// Use map to create a new array by changing each country to uppercase in the countries array.
// const newArry = countries.map(country => country.toUpperCase())
// console.log(newArry)


// Use map to create an array of countries length from countries array.
// const lengthArr = countries.map(country => country.length)
// console.log(lengthArr)


// Use map to create a new array by changing each number to square in the numbers array
// const square = numbers.map(num => num * 2)
// console.log(square)


// Use map to change to each name to uppercase in the names array
// const upperCaseText = names.map(name => name.toUpperCase())
// console.log(upperCaseText)

// Use map to map the products array to its corresponding prices.
// const productPrice = products.map(item => item !== null)
// console.log(productPrice)

// Use filter to filter out countries containing land.
// const countryWithLand = countries.filter(country => country.toLowerCase().includes('land'))
// console.log(countryWithLand)

// Use filter to filter out countries having six character.
// Use filter to filter out countries containing six letters and more in the country array.
// const sixStr = countries.filter(country => country.length > 6)
// console.log(sixStr)


// Use filter to filter out country start with 'E';
// const startWithE = countries.filter(country => country.startsWith('E'))
// console.log(startWithE)


// Use filter to filter out only prices with values.
// const priceValue = products.filter(product => typeof product.price === 'number' || (typeof product.price === 'string' && product.price.trim() !== '')).map(item => item.price)
// console.log(priceValue)

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// const mixedArray = [1, 'apple', 3, 'banana', 'orange', 5];
// const getStringList = (mixArr)=>{
//     return mixArr.filter(item => typeof item === 'string')
// }
// console.log(getStringList(mixedArray))





// Use reduce to sum all the numbers in the numbers array.
// const reduce = numbers.reduce((acc,current)=> acc + current ,0)
// console.log(reduce)



// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// const sentence = countries.reduce((acc,country,index,arr)=>{
//     if(index === arr.length -1){
//         return acc + ' and ' + country;
//     }else{
//         return acc + country + ', ';
//     }
// },'')+ ' are north European countries';

// console.log(sentence)

// Use some to check if some names' length greater than seven in names array
// const someItem = names.some(name => name.length > 7)
// console.log(someItem)

// Use every to check if all the countries contain the word land
// const check = countries.every(country => country.toLowerCase().includes('land'))
// console.log(check)


// Use find to find the first country containing only six letters in the countries array
// const finder = countries.find(country => country.length === 6)
// console.log(finder)

// Use findIndex to find the position of the first country containing only six letters in the countries array
// const finderIndex = countries.findIndex(country => country.length === 6)
// console.log(finderIndex)

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// const finderIndex = countries.findIndex(country => country === 'Norway')
// if(finderIndex !== -1){
//     console.log(`Norway is at position ${finderIndex} in the array.`)
// }else{
//     console.log('Norway is not found in the array.')
// }

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
// const findIndex = countries.findIndex(country => country === "Russia")
// if(findIndex !== -1){
//     console.log(`Russia is at position ${findIndex} in the array.`)
// }else{
//     console.log('Russia is not found in the array.')
// }



// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Russia']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
// ]


// Exercises: Level 2
// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

// const totalPrice = products.filter(item => {
//     if(typeof item.price === 'number'){
//         return true
//     }else if(typeof item.price === 'string' && item.price.trim() !== ''){
//         return true
//     }else{
//         return false
//     }
// })
// .map(product => product.price)
// .reduce((acc,cur) => acc + cur , 0)
// console.log(totalPrice)

// Find the sum of price of products using only reduce reduce(callback))
// const sum = products.reduce((acc,item) => {
//     const price = typeof item.price === 'number' ? item.price : 0;
//     return acc + price
// },0)
// console.log(sum)

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
// const categorizeCountries = (arr) => {
//     const categorizedCountries = arr.find(country => {
//         if (country.includes('land') || country.includes('ia') || country.includes('island') || country.includes('stan')) {
//             return true
//         } else {
//             return false
//         }
//     })
//     return categorizedCountries.length > 0 ? categorizedCountries : 'Not Found';
// }

// console.log(categorizeCountries(countries))

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Russia']
// // Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
// const textCounterArr = (arr) =>{
//     const frequency = {}
//     arr.forEach(country => {
//         const firstLetter = country.charAt(0).toLowerCase();

//         if(frequency[firstLetter]){
//             frequency[firstLetter]++
//         }else{
//             frequency[firstLetter] = 1
//         }
//     })
//     const resultArray = Object.entries(frequency).map(([letter, count]) => ({
//         letter,
//         count
//       }));
//     return resultArray
// }
// console.log(textCounterArr(countries))




// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// const getFirstTenCountries = (country) =>{
//     const result = country.filter((country,index) =>{
//         return index < 10
//     })
//     return result;
// }

// console.log(getFirstTenCountries(Allcountries))


// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)


// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
// function initialName (country) {
//     const frequencyMap = {}
//     country.forEach(country => {
//         const firstLetter = country.name.charAt(0).toLowerCase()
//         if(frequencyMap[firstLetter]){
//             frequencyMap[firstLetter]++;
//         }else{
//             frequencyMap[firstLetter] = 1;
//         }
//     })
//     const result = Object.entries(frequencyMap).map(([letter, count]) => ({
//         letter,
//         count
//       }));
//       return result
// }
// console.log(initialName(Allcountries))

// Use the countries information, in the data folder. Sort countries by name, by capital, by population
// const sortingCountry = (countries) => {
//     countries.sort((a, b) => {
//         const nameA = a.name.toLowerCase();
//         const nameB = b.name.toLowerCase();

//         if (nameA < nameB) {
//             return -1;
//         } else if (nameA > nameB) {
//             return 1;
//         } else {
//             return 0;
//         }
//     });
// }

// sortingCountry(Allcountries);
// console.log(Allcountries);

const { Allcountries } = require('./countries.js');

// Find the 10 most spoken languages:
// function mostSpokenLanguages(countries, number) {
//     const languageCount = {};

//     countries.forEach(country => {
//       country.languages.forEach(language => {
//         languageCount[language] = (languageCount[language] || 0) + 1;
//       });
//     });

//     const languageArray = Object.entries(languageCount)
//       .map(([language, count]) => ({ language, count }))
//       .sort((a, b) => b.count - a.count);
//     return languageArray.slice(0, number);
//   }

// console.log(mostSpokenLanguages(Allcountries,3))


// const populatedCountry = (country,indexCount) =>{
//     const countries = country.map(country =>{
//         return {
//             country: country.name,
//             population: country.population
//         }
//     }).sort((a,b)=> b.population - a.population)

//     return countries.slice(0,indexCount)
// }

// console.log(populatedCountry(Allcountries,10))



// const statistics = {
//     data: [],

//     // Add data to the sample
//     addData: function (newData) {
//         this.data = this.data.concat(newData);
//     },

//     // Calculate mean of the sample
//     calculateMean: function () {
//         const sum = this.data.reduce((acc, value) => acc + value, 0);
//         return sum / this.data.length;
//     },

//     // Calculate median of the sample
//     calculateMedian: function () {
//         const sortedData = this.data.slice().sort((a, b) => a - b);
//         const middle = Math.floor(sortedData.length / 2);

//         if (sortedData.length % 2 === 0) {
//             return (sortedData[middle - 1] + sortedData[middle]) / 2;
//         } else {
//             return sortedData[middle];
//         }
//     },

//     // Calculate mode of the sample
//     calculateMode: function () {
//         const frequencyMap = {};
//         this.data.forEach(value => {
//             frequencyMap[value] = (frequencyMap[value] || 0) + 1;
//         });

//         let modes = [];
//         let maxFrequency = 0;

//         for (const value in frequencyMap) {
//             const frequency = frequencyMap[value];

//             if (frequency > maxFrequency) {
//                 modes = [value];
//                 maxFrequency = frequency;
//             } else if (frequency === maxFrequency) {
//                 modes.push(value);
//             }
//         }

//         return modes.length === Object.keys(frequencyMap).length ? [] : modes;
//     },

//     // Calculate range of the sample
//     calculateRange: function () {
//         const sortedData = this.data.slice().sort((a, b) => a - b);
//         return sortedData[sortedData.length - 1] - sortedData[0];
//     },

//     // Calculate variance of the sample
//     calculateVariance: function () {
//         const mean = this.calculateMean();
//         const squaredDifferences = this.data.map(value => Math.pow(value - mean, 2));
//         return squaredDifferences.reduce((acc, value) => acc + value, 0) / this.data.length;
//     },

//     // Calculate standard deviation of the sample
//     calculateStandardDeviation: function () {
//         return Math.sqrt(this.calculateVariance());
//     },

//     // Calculate minimum value of the sample
//     calculateMin: function () {
//         return Math.min(...this.data);
//     },

//     // Calculate maximum value of the sample
//     calculateMax: function () {
//         return Math.max(...this.data);
//     },

//     // Get count of the sample
//     getCount: function () {
//         return this.data.length;
//     },

//     // Calculate percentile of the sample
//     calculatePercentile: function (percentile) {
//         const sortedData = this.data.slice().sort((a, b) => a - b);
//         const index = Math.ceil((percentile / 100) * sortedData.length) - 1;
//         return sortedData[index];
//     },

//     // Calculate frequency distribution of the sample
//     calculateFrequencyDistribution: function () {
//         const frequencyMap = {};
//         this.data.forEach(value => {
//             frequencyMap[value] = (frequencyMap[value] || 0) + 1;
//         });

//         return frequencyMap;
//     }
// };


// const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
// // Example usage:
// statistics.addData(ages);

// console.log('Mean:', statistics.calculateMean());
// console.log('Median:', statistics.calculateMedian());
// console.log('Mode:', statistics.calculateMode());
// console.log('Range:', statistics.calculateRange());
// console.log('Variance:', statistics.calculateVariance());
// console.log('Standard Deviation:', statistics.calculateStandardDeviation());
// console.log('Min:', statistics.calculateMin());
// console.log('Max:', statistics.calculateMax());
// console.log('Count:', statistics.getCount());
// console.log('25th Percentile:', statistics.calculatePercentile(25));
// console.log('75th Percentile:', statistics.calculatePercentile(75));
// console.log('Frequency Distribution:', statistics.calculateFrequencyDistribution());

















