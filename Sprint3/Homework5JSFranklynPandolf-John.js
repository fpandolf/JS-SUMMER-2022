// Due date: Mon (July 18) eod

/**
 * Q1:
 * Convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */
var sentenceQ1 = 'have a great day';
// set string to lower case in prep for TitleCase // sentenceq1.toLowerCase()
//split into array at spaces // sentenceq1.toLowerCase().split(' ')
//find individual string at each index // sentenceq1.toLowerCase().split(' ')[i]
//find first letter of each value and make it Uppercase // sentenceq1.toLowerCase().split(' ')[i].subString(0,1).toUpperCase()
//combine this with the rest of the value at each index excluding the first letter as well as a space // sentenceq1.toLowerCase().split(' ')[i].subString(0,1).toUpperCase().concat(sentenceq1.toLowerCase().split(' ')[i].subString(1))
//create a for loop initialized from 0 where the condition is i <= the array.length-1 with single increment and an empty variable to store the result between loop iterations
let sentenceQ1TC= '';

for (i=0;i<=sentenceQ1.toLowerCase().split(' ').length-1; i++) {
    sentenceQ1TC+=sentenceQ1.toLowerCase().split(' ')[i].substring(0,1).toUpperCase().concat(sentenceQ1.toLowerCase().split(' ')[i].substring(1), ' ');
}

//console log the final value of sentenceQ1TC after the loop has completed
console.log('Q1');
console.log(sentenceQ1TC);

/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */

var sentenceQ2 = 'hello dear how are you doing';
//split into array at spaces // sentenceQ2.split(' '))
//find individual string at each index // sentenceQ2.split(' ')[i]
//create a for loop that initializes at the last index of the array, and decrement through all indices until index-0 and an empty variable to store the result plus a a space between loop iterations
let sentenceQ2Reverse = '';
for (i=sentenceQ2.split(' ').length-1;i>=0;i--) {
    sentenceQ2Reverse+=sentenceQ2.split(' ')[i].concat(' ');
}
//console log the final value after the loop iterates
console.log('Q2:');
console.log(sentenceQ2Reverse);
/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */
var numbersQ3Q4 = [1, 2, 3, 4, 5];
// identify the numbers at any give index // numbersQ3Q4[i]
// create a variable set to 0 to store the sum of all array values and a for loop to iterate adding the value at each index in the array
let sumNumbersQ3Q4 = 0
for (i=0;i<=numbersQ3Q4.length-1;i++) {
    sumNumbersQ3Q4+=numbersQ3Q4[i];
}
console.log('Q3:');
console.log(sumNumbersQ3Q4);
/**
 * Q4:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */
//The avergae is simply the sum of all the array values / the number of values (aka the length of the array)
console.log('Q4:');
console.log(sumNumbersQ3Q4/numbersQ3Q4.length);