

function sayMyName() {
    console.log("R");
    console.log("o");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("n");
}
// sayMyName()


// function addTwoNumbers(Number1, Number2) {

//     console.log(Number1 + Number2);


// }



// const result = addTwoNumbers(3,4);

// console.log(result);

function addtwoNumbers(Number1, Number2) {
    let result = Number1 + Number2
    return result;


}

let result = addtwoNumbers(5, 5)

// console.log("Result: ",result);


function AddTwoNumbers(Number1, Number2) {
    return Number1 + Number2;
}

const resulT = AddTwoNumbers(5, 3)
// console.log(resulT);


/* Jabhi bhi return use karoge tho main me value store karke console log karna hai direct console log nahi
 */

function loginUserMessage(usernamne) {
    if (!usernamne)
    //"" and Undefined are false values by JS so by default they can be accesed by !. !username means username!= "" and undefined .
    {
        console.log("Please Entre the user name");
        return
    }
    return `${usernamne} just loged in`

}


// console.log(loginUserMessage("Hitesh"));
// console.log(loginUserMessage("Roshan"));

//If no value is passed then it will give undefined.

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200,400,800,5000,522));

const user = {
    name: "Hitesh",
    price: 199
}

function HandleObject(anyobject) {
    console.log(`Name is ${anyobject.name} and price is ${anyobject.price}`)
}

// HandleObject(user)
HandleObject(
    {
        name: "Sam",
        price: 2500
    }
)

//Array with funcs

const MyNewArray = [100, 200, 300, 500]

function returnSecondValue(getArray) {
    return getArray[1];
}
// console.log(returnSecondValue(MyNewArray));
console.log(returnSecondValue([200, 700, 800]));
