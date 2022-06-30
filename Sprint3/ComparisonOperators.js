/**
 * Coparison Operators (>=, <=, >, <, ===, !==)
 * Always result in a boolean
 */

let num1 = 10;
let num2 = 20;

// let num1GrEqNum2 = num1 >= num2;
// let num1LeEqNum2 = num1 <= num2;
// let num1GrNum2 = num1 > num2;
// let num1LeNum2 = num1 < num2;

// console.log(`${num1} >= ${num2} = ${num1GrEqNum2}`)
// console.log(`${num1} <= ${num2} = ${num1LeEqNum2}`)
// console.log(`${num1} > ${num2} = ${num1GrNum2}`)
// console.log(`${num1} < ${num2} = ${num1LeNum2}`)

/**
 * === compares if two values are equal in both value and datatype
 * == compares only value (strings can equal numbers) never used
 */

let num1EqNum2 = num1 === num2;
console.log(`${num1} === ${num2} = ${num1EqNum2}`);

/**
 * !== checks if both value and datatype are NOT equal
 * !=  checks if value is NOT equal
 */
let num1NtEqNum2 = num1 !== num2;
console.log(`${num1} !== ${num2} = ${num1NtEqNum2}`);