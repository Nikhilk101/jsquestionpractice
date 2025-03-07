function calculateCartPrice(...num1){   // (... rest operator)

    return num1

}
console.log(calculateCartPrice(200,400,300))

//accesing objects in funtion

const user ={

    username: "Nikhil",
    price : 199
}

function handlingObject(anyObject){

    console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`)
}
handlingObject(user)


// Accesing Array in function

const myArray = [100,200,300,500]

function returnsecondArray(getArray){
    return getArray[3]
}
console.log(returnsecondArray(myArray)) 