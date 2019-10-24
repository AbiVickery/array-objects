/*
Arrays and Objects
*/
// Arrays pg 70

// var arr0 = new Array('Hello','World', '!'); // array constructor
// var arr1 = ['Hello','World', '!']; // array literal
// var arr2 = [
//     ['Hello','World', '!']
//     ['Nǐ hǎo','shìjiè', '!']
//     ['Hola','Mundo', '!']
// ]

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

// arr1.forEach(function(element){
//     console.log(element);
// });

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
// console.log('bracket',obj2[foo]); // does work -> obj2['fname']

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

// var sum = obj3.sum;
// var total

// parsing data

// need to loop all the records
// for each 5 records add to object
// push into new array

var data = [
    'Sianna Fantini, sfantini0@jalbum.net, Female, 17.187.75.7',
    'Ami Siggin, asiggin1@auda.org.au, Female, 92.136.232.25',
    'Kandy Bernardoni, kbernardoni2@infoseek.co.jp, Female, 108.122.66.8',
    'Gus Oswal, goswal3@ucoz.ru, Female, 101.216.78.8',
    'Laurie Upward, lupward4@issuu.com, Male, 92.123.107.',
    'Melitta, Vallery, mvallery5@nydailynews.com, Female, 255.228.200.8',
    'Francesco, Danielczyk, fdanielczyk6@yelp.com, Male, 253.12.207.4',
    'Tedmund, Misken, tmisken7@imgur.com, Male, 216.241.133.',
    'Koralle, Griffithe, kgriffithe8@simplemachines.org, Female, 108.21.21.11',
    'Major, Yewman, myewman9@prnewswire.com, Male, 142.167.101.22',
    'Dell, Hutcheon, dhutcheona@forbes.com, Male, 97.208.109.17',
    'Halley, Doward, hdowardb@redcross.org, Female, 58.97.154.14',
    'Kati, Yakushkev, kyakushkevc@washington.edu, Female, 34.166.161.14',
    'Sargent, Hulatt, shulattd@w3.org, Male, 99.235.176.11',
    'Aleta, Tenny, atennye@rediff.com, Female, 224.48.225.77' 
    ];

    // console.log(data[0],data[1],data[2],data[3],data[4]);
    console.log(data[Math.floor(Math.random() * Math.floor(data.length))]);
    // document.write(data[Math.floor(Math.random() * Math.floor(data.length))]);

    // var data with all the names inside
    // console.log with a math.floor function that goes through the list 1 by 1
    // every time page is reloaded...


    var coins = {
        pennies: 200,
        nickles: 500,
        dimes: 300,
        quarters: 64
    }

    // Total in Dollars,
    // Total per currency,
    // Total rolls per currency, any remainder per currency.
    // i dont know how much longer i can keep my eyes open!!