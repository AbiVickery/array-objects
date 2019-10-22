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
    "sit,",
    "amet",
    "consectetur",
    "adipisicing",
    "elit.",
    "Numquam."
]

// console.log(arr1[1]); // World
// console.log(arr3[1][1 - 1]); // Hola

for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    console.log(element);
}

arr1.forEach(function(element){
    console.log(element);
});