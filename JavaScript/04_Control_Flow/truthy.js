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