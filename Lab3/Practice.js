//1. Write a JavaSC program that takes three numbers as input to calculate 
//and print the average of the numbers

let num1 = 5;
let num2 = 10;
let num3 = 15;

let sumNums = num1 + num2 + num3;
let averageNums = sumNums / 3;
console.log(`Q1`);
console.log(`The average of ${num1}, ${num2}, and ${num3} = ${averageNums}`);
console.log(`\n\n`);


//2. Write a JavaSC program to print an American flag on the screen.

let stripeT1 = '* * * * * * ==================================';
let stripeT2 = ' * * * * *  ==================================';
let stripeT3 = '==============================================';
console.log(`Q2`);
console.log(`${stripeT1}\n${stripeT2}\n${stripeT1}\n${stripeT2}\n${stripeT1}\n${stripeT2}\n${stripeT1}\n${stripeT2}\n${stripeT1}\n${stripeT3}\n${stripeT3}\n${stripeT3}\n${stripeT3}\n${stripeT3}\n${stripeT3}`);
console.log(`\n\n`);


//3. Write a JavaSC program to swap two variables.
let a, b, temp;
    a = 15;
    b = 27;

/**
32. Write a JavaSC program to compare two numbers.  Input Data:
Input first integer: 25
Input second integer: 39
Expected Output
25 != 39                                                         
25 < 39                                                          
25 <= 39
 */

let int1 = 25
let int2 = 39

let int1EQInt2 = int1 === int2;
//console.log(int1EQInt2);
let int1LTInt2 = int1 < int2;
let int1LTEQInt2 = int1 <= int2;

// let displayInt1EQInt2 = (int1EQInt2 = true) ? '==' : '!=';
// let displayInt1LTInt2 = (int1LTInt2 = true) ? '<' : '>';
// let displayInt1LTEQInt2 = (int1LTEQInt2 = true) ? '<=' : '>=';   // these did not work
// let displayInt1EQInt2 = int1 === int2 ? '==' : '!=';
// let displayInt1LTInt2 = int1 < int2 ? '<' : '>';
// let displayInt1LTEQInt2 = int1 <= int2 ? '<=' : '>=';            // these did
let displayInt1EQInt2 = int1EQInt2 ? '==' : '!=';
let displayInt1LTInt2 = int1LTInt2 ? '<' : '>';
let displayInt1LTEQInt2 = int1LTEQInt2 ? '<=' : '>=';               // saved in var
console.log(`Q32:`);
console.log(`${int1} ${displayInt1EQInt2} ${int2}\n${int1} ${displayInt1LTInt2} ${int2}\n${int1} ${displayInt1LTEQInt2} ${int2}`);



// Write a JavaSC program to count the letters, spaces, numbers and other 
//characters of an input string.

let string = 'This is a sample string with over 5 characters.';
let 