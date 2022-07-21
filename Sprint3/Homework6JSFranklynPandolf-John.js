// Due date: Thu (July 21) eod

/**
 * Q1:
 * Create a function to convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */

function sentenceToTitlecase(sentence) {
    let sentenceInTitlecase = '';
    const sentenceWords = sentence.toUpperCase().split(' ');
    for (i=0; i <= sentenceWords.length -1; i++) {
        if (i < sentenceWords.length -1) {
            sentenceInTitlecase = sentenceInTitlecase + sentenceWords[i].substring(0,1).concat(sentenceWords[i].substring(1).toLowerCase(), ' ')
        } else {
            sentenceInTitlecase = sentenceInTitlecase + sentenceWords[i].substring(0,1).concat(sentenceWords[i].substring(1).toLowerCase())
        };     
    };
    return sentenceInTitlecase
};

const sentenceQ1 = 'have a great day'
console.log(sentenceToTitlecase(sentenceQ1));
/**
 * Q2:
 * Create a function to reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */

 function sentenceBackwards(sentence) {
    let sentenceBackwards = '';
    const sentenceWords = sentence.split(' ');
    for (i=sentenceWords.length -1; i >= 0; i--) {
        if (i > 0) {
            sentenceBackwards = sentenceBackwards + sentenceWords[i].concat(' ')
        } else {
            sentenceBackwards = sentenceBackwards + sentenceWords[i]
        };     
    };
    return sentenceBackwards
};

const sentenceQ2 = 'have a great day'
console.log(sentenceBackwards(sentenceQ2));
/**
 * Q3:
 * Create a function to find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */
function sumOfArray(array) {
    let sumOfArray = 0;
    for (i=0; i <= array.length -1; i++) {
        sumOfArray = sumOfArray + array[i];
    };
    return sumOfArray;
};
const numbersQ3 = [1, 2, 3, 4, 5];
console.log(sumOfArray(numbersQ3))

/**
 * Q4:
 * Create a function to find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */

 function averageOfArray(array) {
    let sumOfArray = 0;
    for (i=0; i <= array.length -1; i++) {
        sumOfArray = sumOfArray + array[i];
    };
    let avgOfArray = sumOfArray/array.length;
    return avgOfArray
};
const numbersQ4 = [1, 2, 3, 4, 5];
console.log(averageOfArray(numbersQ4))