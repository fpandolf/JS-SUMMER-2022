class MyCodeTestFunctions {
/**
 * Creates a function to return an array 
 *  after removing given number from the given array
 * 
 * Syntax: removeNumber(input array ,value to remove)
 * 
 * 
 * [1, 2, 3, 4, 5] , 2  -> [1, 3, 4, 5]
 * 
 * [21, 32, 12, 43, 45, 65, 12], 12 -> [21, 32, 43, 45, 65]
 * 
 * [-1, 2, 43, 65] , 11 -> [-1, 2, 43, 65]
 */


static removeNumber = (inputArray, removeValue) => {
    let i = inputArray.indexOf(removeValue);
    while (i <= inputArray.length-1) {
        if (inputArray[i] === removeValue) {
            inputArray.splice(i,1);
        } else {
            i++;
        };
        
    };
return inputArray;
};



 /**
  * Creates a function to return the missing smallest positive number in given array
  * Syntax: smallestMissingPositive(input array)
  * 
  * [1, 2, 3, 4, 5]   ->   6
  * 
  * [2, 3, 1, 56, 23, 11]  ->   4
  * 
  * [-1, 0, 2, 1]    ->  3
  * 
  * [1, 1, 2, 4, 3, 6, 4, 7, 9] ->   5
  * 
  * 
  */

static smallestMissingPositive = (inputArray) => {
    let biggestNumber = 0;
    let firstMissing = 0;
    for (let i=0; i<= inputArray.length; i++) {
        if (inputArray[i] > biggestNumber) {
            biggestNumber = inputArray[i];
        };
    };
    for (let i=biggestNumber; i >= 1; i--) {
        if (inputArray.includes(i)){
        } else {
            firstMissing = i;
        };
    };
    return firstMissing;
};


 /**
  * Creates a function to return the points to be marked against for over speeding.
  * 
  * Syntax: addPoints(user speed, speed limit)
  * 
  * For every 5mph over the speed limit, 1 point should be marked
  * 
  * function will:
  *      take userSpeed and speedLimit as input
  *      return the number of points should be marked against the license.
  * 
  * 
  * 
  * sl= 60 , us = 70 -> points = 2
  * 
  * sl = 60 , us = 63 -> points = 0
  * 
  * sl = 75 , us = 70 -> points = 0
  * 
  * sl = 80 , us = 88 -> points = 1
  */

static addPoints = (userSpeed, speedlimit) => {
    let points = 1
    const speedingBy = userSpeed - speedlimit
    if (userSpeed <= speedlimit) {
        points = 0;
    } else if (points * 5 < speedingBy){
        while (points * 5 < speedingBy)
        points++;
        }
        return points;
 }
};
module.exports = MyCodeTestFunctions;