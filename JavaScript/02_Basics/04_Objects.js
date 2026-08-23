// const tinderuser = new Object()

const tinderuser = {}
tinderuser.id = "123abc",
    tinderuser.email = "Hiteshhc@gmail.com",
    tinderuser.IsLoggedIn = false
// console.log(tinderuser);

const regularuser = {
    id: "123def",
    fullname: {
        userfullname: {
            firstName: "Hitesh",
            lastName: "Choudhary"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstName);

const obj1 = { 1: "a", 2: "b", 3: "c" }
const obj2 = { 4: "a", 5: "b", 6: "c" }
const obj4 = { 7: "a", 8: "b", 9: "c" }

// const obj3 = {obj1,obj2}

const obj3 = Object.assign({}, obj1, obj2, obj4)
//for combinig the objects in one object.It is a good practice to give {}.if not give {} then all data will merge in the 1st object.
// console.log(obj3);

//spread function 
const obj5 = { ...obj1, ...obj2 }
// console.log(obj5);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }


]

// console.log(users[1].email);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty("IsLoggedIn"));


const course = {
    courseName : "Js in Hindi",
    coursePrice : "999",
    courseInstructor : "Hitesh Choudhary"
}

// course.courseInstructor

const {courseInstructor : teacher} = course

console.log(teacher);







