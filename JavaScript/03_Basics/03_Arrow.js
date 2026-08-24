const user = {
    username: "Hitesh",
    price: 999,

    welcomeMessage: function () {
        // console.log(`${this.username},Hello welcome tho the website`);
        // console.log(this);


    }

}
// user.welcomeMessage()
// user.username = "SAM"
// user.welcomeMessage()

// console.log(this);

function chai() {
    const username = "Hitesh"
    console.log(this.username);
    //this will only work in the object . and will not work in functions .

}
// chai()


//+++++++++++++++++++Arrow FUnctions+++++++++++++++++++++++++++++++++++++++++++++++++++

const Chaione = () => {
    let username = "hitesh"
    console.log(this)
}

// Chaione()

// const addTwo = (num1,num2) => {
//     return num1+num2
//  }

// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1, num2) => (num1 + num2)
//{} me return keyword likhna padega but agar () me return keyword nahi likhna padega .

const addTwo = (num1, num2) => ({ username: "hitesh" })
//Objects me { } use karna hi padega for accessing the object . 

console.log(addTwo(5, 3));






