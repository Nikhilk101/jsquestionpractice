const tinderUser = new Object() // created by constructor , singleton
console.log(tinderUser)

const tinderUsers = {}

tinderUser.id = "1234"
tinderUser.name = "sam"
tinderUser.email = "gamil.com"

 const regularUser = {

    email: "someone@gmail.com",
    fullName: {
        firstName: "sam",
        lastname: "pitroda"
    }


 }

 console.log(regularUser.fullName.firstName) //accesing objects

 const obj1 = {1:"a", 2:"b"}
 const obj2 = {3: "a", 4:"c"}

  const obj3 = Object.assign({},obj1,obj2)
  console.log(obj3)
   
  const obj4 = {...obj1,...obj2}

  const users = [
    {
        id:"1",
        email:"email.com"
    },
    {
        id:"1",
        email:"email.com"
    },
    {
        id:"1",
        email:"email.com"
    }

  ]

  users[1].email
  console.log(Objects.keys(tinderUser))
  console.log(Object.values(tinderUser))
  console.log(Object.entries(tinderUser))
  console.log(tinderUser.hasOwnProperty(isLoggedIn))



  const course = {
    course: "science",
    price:"999",
    instructorName: "Nikhil"

  }

  //course.instructorName
// another syntax
const {instructorName:instructor} = course // here changing instructorName to Instructor
//console.log(instructorName)
console.log(instructor)


// Api

{
    //name: "Nikhil",
    //age : 24,
    //email: "gmail.com"
}

// Api in array format
[
    {},
    {},
    {},
]