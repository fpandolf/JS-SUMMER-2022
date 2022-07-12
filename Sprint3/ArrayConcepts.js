// [] represents array
// stores multiple value

let planets = ['EArtH', 'MerCUry', 'VeNUS','JuPiteR', 'Pluto'];
//console.log(planets);

// Array values stored with index first value = 0 like always
// 'Earth' is at index 0     'Jupiter' at index 3
//console.log(planets[0]);        // square brakcets after array name lets you print value at particular index
//console.log(planets.length);     // total number of values in the array (last index value is length - 1)

/** Funtion : toString
 * Convert Array into comma sepreated string value
 */

let planetString = planets.toString();
//console.log(planetString);

/**
 * Function: join()
 * Convert Array into userdefined sepreated string value
 * all array values join using input between brackets
 * default seperator is comma ","
 */

 let planetsjoin1 = planets.join()

let planetsjoin2 = planets.join("&")
//console.log(planetsjoin1);

/**
 * Function: pop()
 *  removes last value from array
 *  returns the popped value
 *  changes the original array
 * no input
 */
// console.log(planets);
// console.log(planets.pop());
// console.log(planets);

/**
 * function: shift()
*  removes first value from array
 *  returns the popped value
 *  changes the original array 
 */
// console.log(planets);
// console.log(planets.shift());
// console.log(planets);

/**
 * Function: push()
 *  adds value to end of array
 * Does NOT replace the last value
 *  Returns the new array length
 * no input
 */
// console.log(planets);
// console.log(planets.push('Uranus'));
// console.log(planets);

/**
 * function: unshift()
*  Adds value to first spot in array array
 *  returns the new length value
 *  changes the original array  but doesnt overrite orginal array
 */
// console.log(planets);
// console.log(planets.unshift('Uranus'));
// console.log(planets);

/**
 * function: splice()
*  Add or remove values int he array
arg-1 = index from which to add new values (connected by comma)
arg-2 = how many values  you want to remove
arg-n = new values 

funtion returns array with the deleted or removed values
**/

// console.log(planets);
// console.log(planets.splice(2,3, 'a','b','c','d'));
// console.log(planets);

/**
 * function: concat()
 *  returns new array after joining all input arrays in order
 * 
 **/

// let fruits = [ 'mango', 'apple']
// let states = ['ny', 'nj','pa']
// console.log(planets.concat(fruits,states));
// console.log(planets.concat('alpha centuri', 'planetx'));
// console.log(planets);


/**
 * Function: includes()
 * returns true if value is exactly present in array
 * value must be full single array index value 
 * 
 * second argument shows which index to start search
 */
// console.log(planets);
// console.log(planets.includes('Pluto'));
// console.log(planets.includes('Plut'));
// console.log(planets.includes('JuPiteR, Pluto'));
// console.log(planets.includes('VeNUS', 2));

/**
Function: indexOf()
finds the first occurrence of a given value at any index in the array
if exactly present at one of the indices of array returns that index
if not present at any index gives -1
 */

// Funtion : isArray() answers if it is an array
//console.log(Array.isArray(planets));

// Function : fill
// arg-1 - new value to fill/add
// arg-2 - starting index number (from which)
// arg-3 - ending index number (not included)
// changes original array

// console.log(planets);
// console.log(planets.fill('happy', 2, 3));  // replaces elements with happy at 2 (stops at 3)
// console.log(planets.fill('happy'));         // replaces all elements in array with happy

//Function: reverse()
//
// console.log(planets);
// planets.reverse()
// console.log(planets);