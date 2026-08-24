const temperature = 41;

if (temperature < 50) {
    // console.log("less then 50");

}
else {
    // console.log("greater then 50");

}
// console.log("Execute");

// = , != ,<=,>=,===,!==

const score = 200

if (score > 100) {
    const power = "fly"
    // console.log(`Power is ${power}`);

}
// console.log(power);

// this will give error because power is declared inside the if() it cannot be accessed outside the scope.

const balance = 1000;

// if(balance>500) console.log("true"),console.log("test case passed");

if (balance < 500) {
    console.log("Less then 500");

}
else if (balance < 750) {
    console.log("less then 750");

}
else if (balance < 950) {
    console.log("Less then 950");

}

else {
    console.log("Less then 1200");

}

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromMail = true

if (userLoggedIn && debitcard) {
    console.log("allow shopping");

}
if (loggedInFromGoogle || loggedInFromMail) {
    console.log("User Logged In");

}




