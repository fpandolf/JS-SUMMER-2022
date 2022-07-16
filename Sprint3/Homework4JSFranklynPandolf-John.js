// Due date: Fri (Jul 15) eod

/**
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-c : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * 
 * studentScore = 40
 * maxScore = 50
 * 
 * Grade -> C
 */

var studentScore = 90;     // student's individual scores entered in this line
const maxScore = 90;
let studentPercentage = studentScore/maxScore;

if (studentPercentage >= .91 && studentScore >= 0 && studentScore <= maxScore) {
    console.log('Grade: A');
} else if (studentPercentage >= .81 && studentScore >= 0 && studentScore <= maxScore) {
    console.log('Grade: B');
} else if (studentPercentage >= .71 && studentScore >= 0 && studentScore <= maxScore) {
    console.log('Grade: C');
} else if (studentPercentage >= .61 && studentScore >= 0 && studentScore <= maxScore) {
    console.log('Grade: D');
} else if (studentPercentage >= .51 && studentScore >= 0 && studentScore <= maxScore) {
    console.log('Grade: E');
} else if (studentScore >= 0 && studentScore <= maxScore) {
    console.log('Grade: F');
} else {
    console.log('Invalid student score');
}


/**
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 19
 * 
 * 
 */

var myNumber = 15;

if (myNumber % 5 === 0 && myNumber % 3 === 0) {
    console.log('divisible by 5 and 3');
} else if (myNumber % 5 === 0) {
    console.log('divisible by 5');
} else if (myNumber % 3 === 0) {
    console.log('divisible by 3');
} else {
    console.log(myNumber);
}


/**
 * let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */

 var planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 
 if (planets[0].toLowerCase() === 'earth') {
    console.log('Earth is mentioned in expected index');
 } else {
    planets.unshift('Earth')
    console.log(planets);
 }


/**
 * const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is present not in index-2, print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced.
 * 
 */

 let sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];

 if (sports[2].toLowerCase() === 'basketball') {
    console.log('BASKETBALL is present at index-2');
 } else  if (sports.join().toLowerCase().includes('basketball')) {
    console.log('BASKETBALL is mentioned in the sports array');
 } else  if (!sports.join().toLowerCase().includes('basketball')) {
    console.log(sports.splice(2,1,'BASKETBALL'));
 }