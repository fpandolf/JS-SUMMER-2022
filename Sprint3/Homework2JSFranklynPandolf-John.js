// Due Date : Tuesday Jul-05
//Q1
const sentence1 = 'Hello dear, how are you doing?';
let result1 = 0;
/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in result1
 * otherwise
 *      assign 25 in result1
 */
//let sentence1Length = sentence1.length;       // no need to store // good practice
//result1 = sentence1length >= 10 ? 15 : 25;    // no need to store
result1 = sentence1.length >= 10 ? 15 : 25;

console.log(`result1 is ${result1}`);
console.log(`\n\n`);

//Q2
const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */
 let sentence2Replace_a_Alpha = sentence2.replace(/a/gi, 'Alpha');
 //console.log(`Reaplacing all instances of "a/A" with "Alpha" in sentence2 yields: ${sentence2Replace_a_Alpha}`);   // redone strictly following requirements
 console.log(sentence2Replace_a_Alpha);
 console.log(`\n\n`);

//Q3
const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * print the result in console:
 * 1. the length of sentence-3
 * 2. does sentence-3 starts with 'health' (ignore cases)
 * 3. does sentence-3 contains with 'Body' (ignore cases)
 * 4. index of 'Body' in sentence3  (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'Body' is present only once. (true or false)
 */
//1
let sentence3Length = sentence3.length;
console.log(`The length of sentence3 is ${sentence3Length} characters`);
//2
let startsWithPattern1 = 'health';
//let sentence3Lowercase = sentence3.toLowerCase();
//let sentence3StartsWith_health = sentence3Lowercase.startsWith(startsWithPattern1);
//console.log(`Does ${sentence3} start with 'health' (ignoring case) : ${sentence3StartsWith_health}`);
//  below is the cleaner way // good practice
let sentence3StartsWith_SWP1 = sentence3.toLowerCase().startsWith(startsWithPattern1.toLowerCase());
console.log(`Does sentence3 start with "${startsWithPattern1}" (ignoring case) : ${sentence3StartsWith_SWP1}`);
//3
let includesPattern1 = 'Body';
let sentence3Includes_IP1 = sentence3.toLowerCase().includes(includesPattern1.toLowerCase());
console.log(`Does sentence3 include "${includesPattern1}" (ignoring case) : ${sentence3Includes_IP1}`);
//4
let indexPattern1 = 'Body';
let indexPosition_IP1 = sentence3.toLowerCase().indexOf(indexPattern1.toLowerCase());
console.log(`"${indexPattern1}" first appears in sentence3 at index : ${indexPosition_IP1}`);
//5
//let sentence3Length = sentence3.length;                          // defined in first question
//let indexPositionLastCharacterSentence3 = sentence3Length - 1;   // no need to store this value // good practice
let lastCharacterSentence3 = sentence3.charAt((sentence3Length-1));
console.log(`The last character in sentence3 is "${lastCharacterSentence3}" `);
//6
let indexPattern2 = 'Body';
let indexPosition_IP2 = sentence3.toLowerCase().indexOf(indexPattern2.toLowerCase());
//let lastIndexPattern2 = 'Body'; // good practrice it will always be equal to indexPattern2
let lastIndexPosition_IP2 = sentence3.toLowerCase().lastIndexOf(indexPattern2.toLowerCase());
//console.log(`Body last appears in sentence3 at index : ${lastIndexPosition_IP1}`);
let isIP2EqLIP2 = (indexPosition_IP2 === lastIndexPosition_IP2) && (indexPosition_IP2 >= 0);   // the two index values must be equal and not be -1 (invalid) to show indexPattern2 occurs just once
console.log(`Is "${indexPattern2}" present just once in sentence3: ${isIP2EqLIP2}`);