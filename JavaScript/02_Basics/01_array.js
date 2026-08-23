//array

const myarr = [0, 1, 2, 3, 4, 5]
const myheros = ["Shaktiman", "Nagraj"]
// console.log(myarr);

// console.log(myarr[0]);
const myarr2 = new Array(1, 2, 3, 4)

//array methods
// myarr.push(6)
// myarr.push(7)
// myarr.pop(7)
// console.log(myarr);

// myarr.unshift(9)
// myarr.shift()
// console.log(myarr);

// console.log(myarr.includes(9))
// console.log(myarr.indexOf(9))
// console.log(myarr.indexOf(3))

// const newArr = myarr.join()

// console.log(newArr);
// console.log(typeof newArr);

//slice splice

console.log("A", myarr);

const mna1 = myarr.slice(1, 3) //Slice, index 1 aur 2 ke elements ko copy karke naya array banayega. Original array change nahi hoga.
// console.log(mna1);
// console.log("B", myarr);

const mya2 = myarr.splice(1, 3) //Splice, index 1 se shuru karke 3 elements COUNT karke delete karega (index 1, 2, 3 ke elements). Original array badal jayega. 

console.log(mya2);
console.log("C", myarr);




