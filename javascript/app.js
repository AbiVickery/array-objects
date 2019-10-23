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

// // console.log(arr1[1]); // World
// // console.log(arr3[1][1 - 1]); // Hola

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

// MDN map, reduce, filter
var obj = new Object();
var obj1 = {}

var obj2 = {
    fname: 'Abby',
    lname: 'Curry'
}

console.log(obj2.fname);
console.log(obj2['fname']);

var fname = 'fname';
console.log('dot',obj2.foo); // does not work -> looking for key foo in obj2 -> obj2['foo']
console.log('bracket',obj2[foo]); // does work -> obj2['fname']

var obj3 = {
    arr: [1,2,3],
    name: 'Abby Curry',
    sum: function (num1,num2){
        return num1 + num2;
    },
    bool: true,
    num: 42
};

// console.log(obj3.arr[1]);
// console.log(obj3['arr'][1]);

if (obj3.bool) {
    console.log('Yo!');
}