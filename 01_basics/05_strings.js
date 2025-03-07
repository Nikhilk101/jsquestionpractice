const name = "Nikhil"
const repoCount = 50

//console.log(name + repoCount + "Value");
console.log(`hello my name is ${name} and my repocount is ${repoCount}` )

const gameName = new String("Nikhilk")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(1));
console.log(gameName.indexOf('k'))

const newString = gameName.substring(0 , 3)
console.log(newString)

const anotherString = gameName.slice(1 , 4) // .slice(-6  4) in slice we can give negative parameter also
console.log(anotherString)

const newStringOne = "    Nikhil  "
console.log(newStringOne.trim())

const url = "www,google%20.com"
console.log(url.replace('%20', '-'))

console.log(gameName.split('-'))