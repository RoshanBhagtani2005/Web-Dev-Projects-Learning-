const coding = ["js", "ruby", "java", "Cpp", "Python"]

coding.forEach(function greet(val) {
    console.log(val);

})

coding.forEach((val) => {
    console.log(val);

})
function printMe(item) {
    console.log(item);

}
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);

})

const myCoding =
    [
        {
            languageName: "JavaScript",
            languageFilename: "js"

        },
        {
            languageName: "Java",
            languageFilename: "java"

        },
        {
            languageName: "Python",
            languageFilename: "py"

        }



    ]

myCoding.forEach(
    (item) => {
        console.log(item.languageName);

    }
)