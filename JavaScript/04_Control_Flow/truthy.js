const userEmail = []

if (userEmail) {
    console.log("Got user Email");
}
else {
    console.log("Don't have user Email");

}

//falsy values

// false , 0 ,-0,BigInt 0n ,"", null ,undefined , NaN


// truthy valuses
//"0" , 'false' , " ",[],{},function(){},

if (userEmail.length === 0) {
    console.log("Array is Empty");

}

const empobj = {}

if (Object.keys(empobj).length === 0) {
    console.log("Object is empty");

}

//Nullish Coalescing Operator (??): null defined 

let val1;
// val1 = 5 ?? 10
// val1 = null??10
// val1 = undefined??15
val1 = null ?? 10 ?? 20

console.log(val1);


//ternary operator 

// condition ?? true : false 

const Iceteaprice = 100;

Iceteaprice <= 80 ? console.log("Greater then 80") : console.log("Less then 80");


