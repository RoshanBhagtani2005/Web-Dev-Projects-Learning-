const MarvelHeros = ["Thor", "IronMan", "Hulk"]
const DcHeros = ["Superman", "Batman", "Flash"]

// MarvelHeros.push(DcHeros)
//Aray ke andar ek array banega.2nd wala array as a element act karega!

// console.log(MarvelHeros);


// console.log(MarvelHeros [3][2]);

// const Heros = MarvelHeros.concat(DcHeros)

// console.log(Heros);

//In JS We can merge two arrays by using Spread method . Spread is used by aadding ... in the array in below example it is show . if you feel confusing then just Imagine the glass droped down and it gets spreaded. Same way the elements in the array gets spread after applying spread method. Mostly used to merge the arrays .

const allHeros = [...MarvelHeros, ...DcHeros]
// console.log(allHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const useableArray = anotherArray.flat(Infinity)

// console.log(useableArray);
//Flat(infinity) will organize arrrya ke andar array ke andar array into one big array .

console.log(Array.isArray("Roshan"));
//Is array will verify the given () data is the array or not . will return true or false .

console.log(Array.from("Roshan"));
//From will convert any type of data to Array. 

console.log(Array.from({ name: "Roshan" }));//intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// of will conver the scores into array.



