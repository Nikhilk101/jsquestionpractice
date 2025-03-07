const myArr = [1,2,3,4,5,6]
const myHeros = ["saktiman","hanuman"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[2])

// Array methods

myArr.push(5)
myArr.push(7)
myArr.pop()

myArr.unshift(4)
myArr.shift()

console.log(myArr.includes(8))

console.log(myArr.indexOf(3))

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)


console.log("A", myArr)
const myn1 = myArr.slice(1,5)
console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,4)
console.log(myn2)