//Immedatiely Invoked Function Expression.

(function chai() {
    //named iife
    console.log(`DB connected`)
})();
//Global scope ke pollution se problem hoti hai kahi baar . Tho incase usko hatane ke IIFE use karte hai .

((name) => {
    console.log(`DB connected two ${name}`);

})("Hitesh");

//It is compulsory to ; after Iife ends.

