/**
 * Q1:
 * Print the length of the country name (without using String-length property)
 * 
 */
 let countryNameQ1 = 'USA USA';
 let countryNameQ1Array = countryNameQ1.split('');                  // Splits string between each character and places all strings in an array
 let countryNameQ1ArrayLength = countryNameQ1Array.length;           // length of the new array is the length of the original string found without using string.length
 console.log(`Q1: The length of "${countryNameQ1}" (found without using string-length property) is ${countryNameQ1ArrayLength}`);
console.log(`\n\n`);                                                //spacing for ease of reading in console


 /**
  * Q2:
  * Count the number of words in the sentence
  */
 const sentenceQ2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 let sentenceQ2Words = sentenceQ2.split(' ');                    // Splits the original string at each space, placing the new strings in an array
 let sentenceQ2WordsNumber = sentenceQ2Words.length;            // uses the array.length method to find the number of values in the created array
 console.log(`Q2: The number of words in "${sentenceQ2}" is ${sentenceQ2WordsNumber}`);
 console.log(`\n\n`);                                           //spacing for ease of reading in console

 
 /**
  * Q3:
  * Convert any 4-word sentence into Titlecase
  * 
  * 
  * 'have a great day'   ->  'Have A Great Day'
  * 'YOu ONlY lIVe ONcE' ->  'You Live Only Once'
  * 
  */
 const sentenceQ3 = 'YOu ONlY lIVe ONcE';
 let sentenceQ3LC = sentenceQ3.toLowerCase();                                                       // converts the original sentence to lowercase
 let sentenceQ3LCArray = sentenceQ3LC.split(' ');                                                   // Splits the new lowercase string at each space, creating an array of the new strings
 let sentenceQ3LCWord1 = sentenceQ3LCArray[0];
 let sentenceQ3LCWord2 = sentenceQ3LCArray[1];
 let sentenceQ3LCWord3 = sentenceQ3LCArray[2];
 let sentenceQ3LCWord4 = sentenceQ3LCArray[3];                                                      // Value of each index of the array is the word in lowercase
 
 let firstLetterSentenceQ3LCWord1 = sentenceQ3LCWord1.charAt(0);                                     // Character at the first index of the first lowercase word
 let firstLetterSentenceQ3LCWord1UC = firstLetterSentenceQ3LCWord1.toLocaleUpperCase();              // Changes that character to Uppercase
 let sentenceQ3LCWord1NoFL = sentenceQ3LCWord1.substring(1);                                         // stores the rest of the lowercase word in a variable
 let sentenceQ3LCWord1TC = firstLetterSentenceQ3LCWord1UC.concat(sentenceQ3LCWord1NoFL);             // combines the Uppercase first letter with the lowercase rest of the word

 let firstLetterSentenceQ3LCWord2 = sentenceQ3LCWord2.charAt(0); 
 let firstLetterSentenceQ3LCWord2UC = firstLetterSentenceQ3LCWord2.toLocaleUpperCase();
 let sentenceQ3LCWord2NoFL = sentenceQ3LCWord2.substring(1);
 let sentenceQ3LCWord2TC = firstLetterSentenceQ3LCWord2UC.concat(sentenceQ3LCWord2NoFL);

 let firstLetterSentenceQ3LCWord3 = sentenceQ3LCWord3.charAt(0);
 let firstLetterSentenceQ3LCWord3UC = firstLetterSentenceQ3LCWord3.toLocaleUpperCase();
 let sentenceQ3LCWord3NoFL = sentenceQ3LCWord3.substring(1);
 let sentenceQ3LCWord3TC = firstLetterSentenceQ3LCWord3UC.concat(sentenceQ3LCWord3NoFL);

 let firstLetterSentenceQ3LCWord4 = sentenceQ3LCWord4.charAt(0);
 let firstLetterSentenceQ3LCWord4UC = firstLetterSentenceQ3LCWord4.toLocaleUpperCase();
 let sentenceQ3LCWord4NoFL = sentenceQ3LCWord4.substring(1);
 let sentenceQ3LCWord4TC = firstLetterSentenceQ3LCWord4UC.concat(sentenceQ3LCWord4NoFL);

 let sentenceQ3TCSpace = ' '                                                                        // stored a string with just space for concat function
 let sentenceQ3TC = sentenceQ3LCWord1TC.concat(sentenceQ3TCSpace, sentenceQ3LCWord2TC, sentenceQ3TCSpace, sentenceQ3LCWord3TC, sentenceQ3TCSpace, sentenceQ3LCWord4TC);
 // stored all TC words with space in between
 console.log(`Q3: "${sentenceQ3}" converted to Title Case becomes: "${sentenceQ3TC}"`);
// I looked up online there is a way easier way to do this with "map" and "join"  and indexing with word[0] etc, we will probably go over it in the next class :)
console.log(`\n\n`);                                           //spacing for ease of reading in console


 /**
  * Q4:
  * Create abbreviation for any 4-word sentence
  * 
  * 'have a great day'   ->  'HAGD'
  * 'YOu lIVe ONlY ONcE' ->  'YLOO'
  * 'yOu neVER WaLK alOne'   ->  'YNWA'
  * 
  */
 
const sentenceQ4 = 'YOu ONlY lIVe ONcE';
 let sentenceQ4UC = sentenceQ4.toUpperCase();                                                      
 let sentenceQ4UCArray = sentenceQ4UC.split(' ');                                                  
 let sentenceQ4UCWord1 = sentenceQ4UCArray[0];
 let sentenceQ4UCWord2 = sentenceQ4UCArray[1];
 let sentenceQ4UCWord3 = sentenceQ4UCArray[2];
 let sentenceQ4UCWord4 = sentenceQ4UCArray[3];                                                      
 
 let firstLetterSentenceQ4UCWord1 = sentenceQ4UCWord1.charAt(0);
 let firstLetterSentenceQ4UCWord2 = sentenceQ4UCWord2.charAt(0);
 let firstLetterSentenceQ4UCWord3 = sentenceQ4UCWord3.charAt(0);
 let firstLetterSentenceQ4UCWord4 = sentenceQ4UCWord4.charAt(0);

 let abbreviationSentenceQ4 = firstLetterSentenceQ4UCWord1.concat(firstLetterSentenceQ4UCWord2, firstLetterSentenceQ4UCWord3, firstLetterSentenceQ4UCWord4);
 // combining just the first letters of the Upper Case words with no spaces  with concat yields the Abbreviated form
 console.log(`Q4: "${sentenceQ4}" abbreviated becomes "${abbreviationSentenceQ4}"`);

console.log('Single Line attempt');
console.log(sentenceQ4.toUpperCase().split(' ')[0].charAt(0).concat(sentenceQ4.toUpperCase().split(' ')[1].charAt(0), sentenceQ4.toUpperCase().split(' ')[2].charAt(0), sentenceQ4.toUpperCase().split(' ')[3].charAt(0) ))