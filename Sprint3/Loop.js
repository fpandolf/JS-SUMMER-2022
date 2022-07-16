/**
 * Loops: for, while, do-while, for-of, for-in,forEach
 * 
 * 
 */

/**
 *  Keyword - for
 * 
 *      for (initialization ; condition ; increment/decrement) {
 *          for-loop
 *          code block
 * }
 */

//Hello world 20x

// for (let counter = 1; counter <= 20; counter++){
//     console.log('Hello World');
// }

// Print value at even index of array in seperate lines

//const sports = ['Football','Soccer','Basketball','Baseball','Rugby'];

// const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];

/**
 * Print values present on even-index
 * 
 * eg: 
 * Football
 * BASKETBALL
 * Rugby
 */
//  console.log(sports[0]);
//  console.log(sports[2]);
//  console.log(sports[4]);

// for (let counter = 0; counter <= sports.length-1; counter+=2) {
//     console.log(sports[counter]);
// }


//  let sentenceQ4UC = sentenceQ4.toUpperCase();                                                      
//  let sentenceQ4UCArray = sentenceQ4UC.split(' ');                                                  
//  let sentenceQ4UCWord1 = sentenceQ4UCArray[0];
//  let sentenceQ4UCWord2 = sentenceQ4UCArray[1];
//  let sentenceQ4UCWord3 = sentenceQ4UCArray[2];
//  let sentenceQ4UCWord4 = sentenceQ4UCArray[3];                                                      
 
//  let firstLetterSentenceQ4UCWord1 = sentenceQ4UCWord1.charAt(0);
//  let firstLetterSentenceQ4UCWord2 = sentenceQ4UCWord2.charAt(0);
//  let firstLetterSentenceQ4UCWord3 = sentenceQ4UCWord3.charAt(0);
//  let firstLetterSentenceQ4UCWord4 = sentenceQ4UCWord4.charAt(0);

//  let abbreviationSentenceQ4 = firstLetterSentenceQ4UCWord1.concat(firstLetterSentenceQ4UCWord2, firstLetterSentenceQ4UCWord3, firstLetterSentenceQ4UCWord4);
//  // combining just the first letters of the Upper Case words with no spaces  with concat yields the Abbreviated form
//  console.log(`Q4: "${sentenceQ4}" abbreviated becomes "${abbreviationSentenceQ4}"`);

// console.log('Single Line attempt');
// const sentenceQ4 = 'YOu ONlY lIVe ONcE';
// let sentenceQ4Abbreviation = '';
// for (counter = 0; counter <= sentenceQ4.toUpperCase().split(' ').length -1; counter++) {
//     sentenceQ4Abbreviation +=(sentenceQ4.toUpperCase().split(' ')[counter].charAt(0));
// }
// console.log(sentenceQ4Abbreviation);

/**
 * print the array-values in reverse order
 * 
 * eg:
 * const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 * 
 * Rugby
 * Baseball
 * BASKETBALL
 * Soccer
 * Football
 * 
 */

//const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
//  for (i=sports.length-1; i>=0; i--){
//     console.log(sports[i]);
//  }

/**
 * While Loop
 * syntax:
 * 
 * initialization
 * while (condition) {
 *      whileloop
 *      codeblock
 *      increment/decrement
 * }
 * 
 */

//const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
// let w = 0
// while (w<=sports.length-1) {
//     console.log(sports[w]);
//     w++;
// }
/**
 * do-while Loop
 * syntax:
 * 
 * initialization
 * do {
 *      do-whileloop;
 *      codeblock;
 *      increment/decrement;
 * } while (condition);
 * 
 */
//  let d = 0
//  do{ 
//      console.log(sports[d]);
//      w++;
//  } while (d<=sports.length-1);

/**
  * Q3:
  * Convert any 4-word sentence into Titlecase
  * 
  * 
  * 'have a great day'   ->  'Have A Great Day'
  * 'YOu ONlY lIVe ONcE' ->  'You Live Only Once'
  * 
  */
//  const sentenceQ3 = 'YOu ONlY lIVe ONcE';
//  let sentenceQ3LC = sentenceQ3.toLowerCase();                                                       // converts the original sentence to lowercase
//  let sentenceQ3LCArray = sentenceQ3LC.split(' ');                                                   // Splits the new lowercase string at each space, creating an array of the new strings
//  let sentenceQ3LCWord1 = sentenceQ3LCArray[0];
//  let sentenceQ3LCWord2 = sentenceQ3LCArray[1];
//  let sentenceQ3LCWord3 = sentenceQ3LCArray[2];
//  let sentenceQ3LCWord4 = sentenceQ3LCArray[3];                                                      // Value of each index of the array is the word in lowercase
 
//  let firstLetterSentenceQ3LCWord1 = sentenceQ3LCWord1.charAt(0);                                     // Character at the first index of the first lowercase word
//  let firstLetterSentenceQ3LCWord1UC = firstLetterSentenceQ3LCWord1.toLocaleUpperCase();              // Changes that character to Uppercase
//  let sentenceQ3LCWord1NoFL = sentenceQ3LCWord1.substring(1);                                         // stores the rest of the lowercase word in a variable
//  let sentenceQ3LCWord1TC = firstLetterSentenceQ3LCWord1UC.concat(sentenceQ3LCWord1NoFL);             // combines the Uppercase first letter with the lowercase rest of the word

//  let firstLetterSentenceQ3LCWord2 = sentenceQ3LCWord2.charAt(0); 
//  let firstLetterSentenceQ3LCWord2UC = firstLetterSentenceQ3LCWord2.toLocaleUpperCase();
//  let sentenceQ3LCWord2NoFL = sentenceQ3LCWord2.substring(1);
//  let sentenceQ3LCWord2TC = firstLetterSentenceQ3LCWord2UC.concat(sentenceQ3LCWord2NoFL);

//  let firstLetterSentenceQ3LCWord3 = sentenceQ3LCWord3.charAt(0);
//  let firstLetterSentenceQ3LCWord3UC = firstLetterSentenceQ3LCWord3.toLocaleUpperCase();
//  let sentenceQ3LCWord3NoFL = sentenceQ3LCWord3.substring(1);
//  let sentenceQ3LCWord3TC = firstLetterSentenceQ3LCWord3UC.concat(sentenceQ3LCWord3NoFL);

//  let firstLetterSentenceQ3LCWord4 = sentenceQ3LCWord4.charAt(0);
//  let firstLetterSentenceQ3LCWord4UC = firstLetterSentenceQ3LCWord4.toLocaleUpperCase();
//  let sentenceQ3LCWord4NoFL = sentenceQ3LCWord4.substring(1);
//  let sentenceQ3LCWord4TC = firstLetterSentenceQ3LCWord4UC.concat(sentenceQ3LCWord4NoFL);

//  let sentenceQ3TCSpace = ' '                                                                        // stored a string with just space for concat function
//  let sentenceQ3TC = sentenceQ3LCWord1TC.concat(sentenceQ3TCSpace, sentenceQ3LCWord2TC, sentenceQ3TCSpace, sentenceQ3LCWord3TC, sentenceQ3TCSpace, sentenceQ3LCWord4TC);
//  // stored all TC words with space in between
//  console.log(`Q3: "${sentenceQ3}" converted to Title Case becomes: "${sentenceQ3TC}"`);
// // I looked up online there is a way easier way to do this with "map" and "join"  and indexing with word[0] etc, we will probably go over it in the next class :)
// console.log(`\n\n`); 

//const sentenceQ3 = 'YOu ONlY lIVe ONcE';

/**
 * for -of
 * works with arrays and string
 */
// for (const sName of sports) {
//   console.log(sName);
// }
// let myString = 'Hello World'
// for (const lettersMyString of myString) {
//     console.log(lettersMyString);
// }

/**
 * for-in
 * works with objects
 * 
 */
// let Obj1 = {
//   myname : 'Frank',
//   age : 20,
//   state : 'NY'
// };
// for (const att in Obj1) {
//   console.log(att);     // prints attribute names
//   console.log(Obj1[att]);
// }

/**
 * for-each
 * works with Array and functions
 * 
 * syntax: 
 * arrayName.forEach(function (varName) {
 *    code in function of for loop;
 * });
 */

 const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby']
 sports.forEach(function (sport) {
      console.log(sport);

 })