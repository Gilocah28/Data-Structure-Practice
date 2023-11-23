const fruits = new Set()

fruits.add('apple')
fruits.add('banana')
fruits.add('orange')
fruits.add('plum').add('pear').add('arpricots')


fruits.delete('orange')

const check = fruits.has('grapes')

console.log(fruits)
console.log(check)