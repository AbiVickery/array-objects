/*
Arrays and Objects
*/
// Arrays pg 70
var arr0 = new Array('Hello','World', '!'); // array constructor
var arr1 = ['Hello','World', '!']; // array literal
var arr2 = [
    ['Hello','World', '!']
    ['Nǐ hǎo','shìjiè', '!']
    ['Hola','Mundo', '!']
]

var data = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipisicing",
    "elit",
    "Numquam"
]

// console.log(arr1[1]); // World
// console.log(arr3[1][1 - 1]); // Hola

for (let i = 0; i < data.length; i++) {
    const element = data[i];
    console.log(element);

    if (element == "dolor") {
        i = data.length
    }
}

arr1.forEach(function(element){
    console.log(element);
});