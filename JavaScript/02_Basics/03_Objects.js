//Singleton 

// Object.create() 
//Object literals
//Contrustor method => Singleton

//Jab hum objects ko literals ki trha declare karte hai tab Singleton nahi banta hai agar Constructor se banega tho Singleton banega .


const mysmb = Symbol("Mykey1")


const jsUser = {
    name: "Hitesh", //In behind the scenes the name is taken as String Data Type.
    "fullName": "Hitesh Choudhary",
    age: 18,
    [mysmb]: "mykey1",
    //for symbol it is compulsory to be in [] and should be deceleared above the Object.
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedin: false,
    logInDays: ["Monday", "Saturday"]

}

// console.log(jsUser.email);

// console.log(jsUser["email"]);
//Another way to acess the Objects in JS .


// console.log(jsUser["fullName"]);
// console.log(jsUser.fullName);

// console.log(jsUser[mysmb]);

jsUser.email="hitesh@chatgpt.com"

// Object.freeze(jsUser)

//will freeze the object no one can change it the object .


//In js Functions is treated as variables only.
jsUser.greet = function(){
    console.log("Hello world");
    
}

jsUser.greet2 = function(){
    console.log(`Hello user , ${this.name}`);
    
}
console.log(jsUser.greet());
console.log(jsUser.greet2());














