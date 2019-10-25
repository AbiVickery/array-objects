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
    /* console.log with a math.floor function that goes through the list 1 by 1
     every time page is reloaded... */


    // var coins = {
    //     pennies: 200,
    //     nickles: 500,
    //     dimes: 300,
    //     quarters: 64
    // }

    // for (let i = 0; i < coins.length; i++) {
    //     const element = coins[i];
    //     console.log(element);
       
    //     if (element == "pennies") {
    //         i = coins.length
    //     }
    // }


    // psuedo code coin roller 
    /* 
        var coins with a list of the different coins and what they have a value of.
        function for sorting the coins into groups of a certain number
        these groups will be called a roll
        the var will be an array of 3 at the least
        print total in dollars
        print total per currency (stick to american dollars for now, maybe more diverse currencies in the future)
        print total rolls per currency and any remainder per currency
    */

    // Total in Dollars,
    // Total per currency,
    // Total rolls per currency, any remainder per currency.
    

var challengeData = [
    'dime','dime','dime','penny','nickel','penny','dime','quarter',
    'dime','nickel','nickel','dime','quarter','nickel','penny','dime',
    'nickel','dime','dime','dime','quarter','nickel','quarter','dime','nickel',
    'penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel',
    'dime','quarter','dime','penny','penny','nickel','penny','penny','dime','nickel',
    'penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel',
    'quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime',
    'dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel',
    'dime','quarter','quarter','nickel','penny','quarter','penny','quarter','nickel',
    'dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter',
    'penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter',
    'penny','penny','dime','dime','dime','penny','quarter','nickel','quarter',
    'quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nikel','dime',
    'quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny',
    'dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny',
    'quarter','penny','quarter','penny','dime','dime','nickel','dime','penny','penny',
    'nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime',
    'dime','dime','quarter','penny','dime','nickel','quarter','nikel','penny','nickel',
    'penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime',
    'quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny',
    'nickel','nickel','penny','quarter','nickel','quarter','dime','nickel','quarter',
    'nickel','penny','dime','quarter','nickel','penny','quarter','penny','quarter','dime',
    'penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter',
    'dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny',
    'dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny','quarter',
    'nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime',
    'quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter',
    'penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel',
    'dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel',
    'dime','penny','dime','nickel','nickel','dime','dime','penny','nickel','penny','dime','dime',
    'nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter',
    'quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny',
    'nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny',
    'quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel',
    'penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel',
    'dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter',
    'penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny',
    'quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter',
    'dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','nickel',
    'dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel',
    'penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime',
    'penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel',
    'penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny',
    'penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny',
    'dime','quarter','dime','penny','quarter','dime','dime','dime'
]