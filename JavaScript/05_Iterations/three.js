//for of 

// ["","",""] 

// [{},{},{}] 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);

}

const greetings = "Hello world!"

for (const greet of greetings) {
    console.log(`Each Charater of the String is ${greet}`);

}

//Maps
//Unique values and the order will be the same . Also i is a key value pair and no duplicates are allowed .

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);

}
