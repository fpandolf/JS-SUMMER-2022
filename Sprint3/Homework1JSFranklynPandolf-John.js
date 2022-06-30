/**
 * Convert temperature values into different units
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Refer link for formula:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * 
 * Due Date: Jul-3 EOD
 * 
 */


// F to C
// T(°C) = (T(°F) - 32) × 5/9

console.log(`\n\n`);
let fTemp1 = 72;
let cTemp1 = (fTemp1 - 32) * 5/9;
console.log(`${fTemp1} °F is equal to ${cTemp1} °C`);
console.log(`\n\n`);


//F to K
//T(K) = (T(°F) + 459.67)× 5/9

let fTemp2 = 72;
let kTemp2 = ( fTemp2 + 459. )* 5/9;
console.log(`${fTemp2} °F is equal to ${kTemp2} °K`);
console.log(`\n\n`);


//C to F
// T(°F) = T(°C) × 9/5 + 32

let cTemp3 = 25;
let fTemp3 = cTemp3 * 9/5 + 32;
console.log(`${cTemp3} °C is equal to ${fTemp3} °F`);
console.log(`\n\n`);


//C to K
//T(K) = T(°C) + 273.15

let cTemp4 = 25;
let kTemp4 = cTemp4 + 273.15;
console.log(`${cTemp4} °C is equal to ${kTemp4} °K`);
console.log(`\n\n`);


// K to F
//T(°F) = T(K) × 9/5 - 459.67

let kTemp5 = 300;
let fTemp5 = (kTemp5 * 9/5) - 459.67;
console.log(`${kTemp5} °K is equal to ${fTemp5} °F`);
console.log(`\n\n`);


//K to C
//T(°C) = T(K) - 273.15

let kTemp6 = 300;
let cTemp6 = kTemp6 - 273.15;
console.log(`${kTemp6} °K is equal to ${cTemp6} °C`);
