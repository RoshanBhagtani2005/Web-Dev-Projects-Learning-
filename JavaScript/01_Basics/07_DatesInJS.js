let mydate = new Date()

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString()); 
// console.log(mydate.toLocaleTimeString()); 
// console.log(typeof mydate);

// let myCreateDate = new Date(2026,0,1)
// let myCreateDate = new Date(2026,0,1,5,3)
// let myCreateDate = new Date("2026-01-20")
let myCreateDate = new Date("01-20-2026")
// console.log(myCreateDate.toLocaleDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());

console.log();
(newdate.toLocaleString('default',{
    weekday:"long"
}))



