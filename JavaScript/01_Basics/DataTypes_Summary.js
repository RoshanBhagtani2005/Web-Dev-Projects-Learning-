//Primitive DataTypes

//7 Types:String, Number ,Boolean ,Null(Empty) ,Undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const AdminID = Symbol('123')

// console.log(id===AdminID);

const BigNumber = 3444456878n



//Reffrence type (Non Primitive):Arrays,Objects,Functions

const superHeros = ["IronMan", "Spiderman", "Hulk"]

// console.log(superHeros);

let myobj = {
    name: "Roshan",
    age: 22,
}

const myfunction = function () {

    console.log("Hello world")
}

// console.log(typeof BigNumber);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Memory 


//Stack Memory(Primitive)


// Heap Memory(Non Primitive)

//Stack example
let myYoutubeChannel = "hiteshchoudhary.com"
let anotherChannel = myYoutubeChannel
// Stack me anotherChannel wale me myYoutubeChannel wale data ki ek copy save hogi .So Jab hum 
//anotherChannel ko change karege tho myYoutubeChannel pe affect nahi padega data ony anotherChannel me hi change hoga  .

// console.log(myYoutubeChannel);
// console.log(anotherChannel);

anotherChannel = "Chaicode"

// console.log(anotherChannel);


//heap 
let userone={
    email:"roshan1234@gmailcom",
    upi : "abc@ybl"
}
let usertwo = userone;

// console.log(userone);
// console.log(usertwo);

usertwo.upi = "xyz@ybl"

//Heap me usertwo ki actual (real) wala store hota hai aagar hum usertwo ke koi data ko change karege tho who userone ke isme bhi change hoga .

console.log(userone);
console.log(usertwo);


