const marvelHeros = ["ironman", "Thor", "hulk"]
const dcHeros = ["batman", "superman", "flash"]

marvelHeros.push(dcHeros)
console.log(marvelHeros)
console.log(marvelHeros[2][3])

marvelHeros.concat(dcHeros)
console.log(marvelHeros)

const allHeros = marvelHeros.concat(dcHeros)
console.log(marvelHeros)

const allNewHeros = [...marvelHeros, ...dcHeros,]
console.log(allNewHeros)


const anotherArray = [1,2,3, [4,5,6,],7,[6,7,[8,9]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray)

console.log(Array.isArray("Nikhil"))
console.log(Array.from("Nikhil")) //using (from) to conerting into Array

console.log(Array.from({name:"Nikhil"})) //intresting case for interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))       // returns a new array from a set of elements