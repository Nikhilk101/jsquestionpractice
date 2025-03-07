const score = 400
console.log(score)

const balance = new Number(500)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))


const otherNumber = 54.9878
console.log(otherNumber.toPrecision(3))

const hundred = 10000000
console.log(hundred.toLocaleString('en-IN'))


// ************ Math ******************

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.3))
console.log(Math.ceil(5.9))
console.log(Math.floor(9.5))
console.log(Math.min(4,6,7,4,8))
console.log(Math.max(6,5,3,8,6,9,))


console.log(Math.random())
console.log((Math.random()*10) + 1 )

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1 )) + min)