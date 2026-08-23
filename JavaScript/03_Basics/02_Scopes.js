let a = 2000
const b = 5000
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner ", a);
    // console.log("Inner ", b);
}
// console.log(a);
// console.log(b);

//Jo {} declare kiya hai who {} ke andar hi use kar sakte hai aur bahar wala bahr hi.
//  Bhar wala => Global scope, Andar wala +> local scope .

function one() {
    const username = "Hitesh"

    function two() {
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website)
    // two()


}
// one()
// two()

//Here One is the farther and two is the child component . Child (two) can access the variables of the parent ie (one) but parent(one) cannot access the child (two) variables .So in the above example , console.log(website) will give error because website is decelared in the child(two) function.two() will be executed properly as both function call and declaration is done inside the one() function . two() will not work outside the one(). 


if (true) {
    const username = "Hitesh"
    if (username === "Hitesh") {
        const website = " Youtube"
        // console.log(username + website);

    }
    // console.log(website);
    //This will give error because website is in the child component and we are accessing from parent component . parent cannot access the child components/varaibles.

}
// console.log(username);


//+++++++++++++++++++++++++++++++++Intresting++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(addone(5));
function addone(num){
        return num+1
}
    

const addtwo= function(num){
    return num+2
}
addtwo(5);
