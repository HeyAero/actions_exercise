// 1. Using the inbuilt string methods only

// Return the length of a string

let firstString = 'Hello world';

console.log(firstString.length);

// console.log the word train from this sentence “I dislike trains as a mode of transport”

let trainString = 'I dislike trains as a mode of transport';
let n = trainString.includes('train');

console.log(n);

// Return the fifth letter of the alphabet from this string ‘abcdefghijklmnopqrstuvwxyz’

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

let letter = alphabet.charAt(4);

console.log(letter);

// Make this string shouty by making it all upper case ‘I love you’

let phrase = 'I love you';
let newPhrase = phrase.toUpperCase();

console.log(newPhrase);

// 2. Using the inbuilt number methods only

// console.log this number to 2 decimal places 1.23456789

let ourNum = 1.23456789;

let newNum = ourNum.toFixed(2);

console.log(newNum);

// Change this string into a number “45”

let stringNum = '45';

let convertNum = parseInt(stringNum);

console.log(convertNum);

// 3. Using the inbuilt array methods only

// Return the first and last elements in this array [‘red’, ‘yellow’, ‘green’, ‘blue’]

let colorArray = ['red', 'yellow', 'green', 'blue'];

let firstColor = colorArray[0];
let lastColor = colorArray.pop();

console.log(`First color: ${firstColor} and Last color: ${lastColor}`);

// Add ‘orange’ to the end of this array [‘red’, ‘yellow’, ‘green’, ‘blue’]

let colorArray2 = ['red', 'yellow', 'green', 'blue'];

colorArray2.push('orange');

console.log(colorArray2);

// console.log the third element in this array [‘red’, ‘yellow’, ‘green’, ‘blue’]

let colorArray3 = ['red', 'yellow', 'green', 'blue'];

console.log(colorArray3[2]);

// Find the minimum value in this array [23123, 2, -328, 0]

let numArray = [23123, 2, -328, 0];

let minValue = Math.min.apply(null, numArray);

let minValueTest = Math.min(...numArray);

console.log(minValue);
console.log(minValueTest);
