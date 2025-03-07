function sayMyName(){
    console.log("Nikhil")
}
sayMyName()

function addTwoNumber(num1, num2){
    return num1 + num2
}
let result = addTwoNumber(2,4)
console.log("result :", result)

function logInUserMessage(username){
    return `${username} just loggedin`
}
console.log(logInUserMessage("Nikhil"))

// differenr approach

function logInUserMessage(username){
    if(username === undefined){
        console.log("plz enter usernmae")
        return
    }
    return `${username} just loggedin`
}
console.log(logInUserMessage())