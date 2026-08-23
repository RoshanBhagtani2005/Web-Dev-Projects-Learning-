const score = 400;
// console.log(score);


const bankbalance = new Number(2000);
// console.log(bankbalance);

// console.log(bankbalance.toString().length);
// will convert the number to the string and .length will find the length of the string.

// console.log(bankbalance.toFixed(2));
//Will convert the number to the fixed number and 2 willbe the numbers after decimal.eg 2000.00

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));
//Will return the string . Aur return me only 3 digits dega 

const hundereds = 1000000
// console.log(hundereds.toLocaleString('en-IN'));
//will convert the Number into the representable format. and will be simplified by adding commas(,).

//++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(Math.abs(-4))
// console.log(Math.round(4.3))
// console.log(Math.ceil(4.6))
// console.log(Math.floor(4.6))
// console.log(Math.min(4,6,3,8))
// console.log(Math.max(4,6,3,8))

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log( Math.floor ((Math.random()*10)) +1);


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min*1))+min);

