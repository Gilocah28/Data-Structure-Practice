// const users = {
//     Alex: {
//         email: 'alex@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         age: 20,
//         isLoggedIn: false,
//         points: 30
//     },
//     Asab: {
//         email: 'asab@asab.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 25,
//         isLoggedIn: false,
//         points: 50
//     },
//     Brook: {
//         email: 'daniel@daniel.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//         age: 30,
//         isLoggedIn: true,
//         points: 50
//     },
//     Daniel: {
//         email: 'daniel@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     John: {
//         email: 'john@john.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//         age: 20,
//         isLoggedIn: true,
//         points: 50
//     },
//     Thomas: {
//         email: 'thomas@thomas.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     Paul: {
//         email: 'paul@paul.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     }
// }

// Find the person who has many skills in the users object.
// function manySkill(obj) {
//     let maxSkill = 0;
//     let skillperson = ''
//     for (let user in obj) {
//         if (obj.hasOwnProperty(user) && obj[user].skills.length > maxSkill) {
//             maxSkill = obj[user].skills.length;
//             skillperson = user;
//         }
//     }
//     return { maxSkill, skillperson };
// }

// console.log(manySkill(users))

// Count logged in users, count users having greater than equal to 50 points from the following object.
// function manySkill(obj) {
//     let userName = '';
//     let userPoints = 0;
//     const emptyArr = []

//     for(let user in obj){
//         if(obj[user].points >= 50){
//             userPoints = obj[user].points
//             userName = user
//             emptyArr.push(userName,userPoints)
//         }
//     }
//     return emptyArr

// }

// console.log(manySkill(users))

// Find people who are MERN stack developer from the users object
// function manySkill(obj) {
//     let userName = '';
//     const emptyArr = []

//     for(let user in obj){
//         if(obj.hasOwnProperty(user) &&
//         obj[user].skills.includes('MongoDB') &&
//         obj[user].skills.includes('Express') &&
//         obj[user].skills.includes('React') &&
//         obj[user].skills.includes('Node')
//         ){
//             emptyArr.push(user)
//         }
//     }
//     return emptyArr

// }

// console.log(manySkill(users))

// function manySkill(obj) {
//     return {
//         ...obj,
//         Giber: {
//             email: 'chatgpt@example.com',
//             skills: ['Natural Language Processing', 'AI', 'Chatbot'],
//             age: 1000,
//             isLoggedIn: true,
//             points: 100
//         }
//     };
// }

// console.log(manySkill(users))

// const key = Object.values(users)
// console.log(key)

// Use the countries object to print a country name, capital, populations and languages.
// const { Allcountries } = require('./countries.js');

// function country (objCountry){
//     const countryInfo = []

//     for(let country in objCountry){
//         const name = objCountry[country].name
//         const capital = objCountry[country].capital
//         const populations  = objCountry[country].population
//         const lang = objCountry[country].languages

//         countryInfo.push({
//             name,
//             capital,
//             populations,
//             lang
//         })
//     }
//     return countryInfo
// }
// console.log(country(Allcountries))

const users = [
    {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2020 9:00 AM",
        isLoggedIn: false,
    },
    {
        _id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "08/01/2020 9:30 AM",
        isLoggedIn: true,
    },
    {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2020 9:45 AM",
        isLoggedIn: true,
    },
    {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2020 9:50 AM",
        isLoggedIn: false,
    },
    {
        _id: "ghderc",
        username: "Thomas",
        email: "thomas@thomas.com",
        password: "123333",
        createdAt: "08/01/2020 10:00 AM",
        isLoggedIn: false,
    },
];

const products = [
    {
        _id: "eedfcf",
        name: "mobile phone",
        description: "Huawei Honor",
        price: 200,
        ratings: [
            {
                userId: "fg12cy",
                rate: 5,
            },
            {
                userId: "zwf8md",
                rate: 4.5,
            },
        ],
        likes: [],
    },
    {
        _id: "aegfal",
        name: "Laptop",
        description: "MacPro: System Darwin",
        price: 2500,
        ratings: [],
        likes: ["fg12cy"],
    },
    {
        _id: "hedfcg",
        name: "TV",
        description: "Smart TV:Procaster",
        price: 400,
        ratings: [
            {
                userId: "fg12cy",
                rate: 5,
            },
        ],
        likes: ["fg12cy"],
    },
];
