// object literals
const mySym = Symbol("key1")
const jsUser ={
    name: "Nikhil",
    age: 24,
    [mySym]:"mykey1",
    email: "google@gamil.com",
    isLoggedIn: true,
    lastLogInDays: ["monday", [tuesday]]
}
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser[mySym])


jsUser.email = "gmail.com" //changing value in object
Object.freeze(jsUser) // freez for not changing in object

jsUser.greetings = function(){
    console.log("hello js user")
}
console.log(jsUser.greetings())

jsUser.greetingsTwo = function(){
    console.log(`hello js user ${this.email}`)

}
console.log(jsUser.greetingsTwo())