let a = 2000
const b = 5000
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner ", a);
    console.log("Inner ", b);
}
console.log(a);
console.log(b);

//Jo {} declare kiya hai who {} ke andar hi use kar sakte hai aur bahar wala bahr hi.
//  Bhar wala => Global scope, Andar wala +> local scope .

