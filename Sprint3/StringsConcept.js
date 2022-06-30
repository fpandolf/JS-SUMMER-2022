// Strings


/**
Length
    property of string class to get numer of characters in string object.

**/
let cityName = 'New YOrk ciTy'
// let cityNameLength = cityName.length
// console.log(`Length = ${cityNameLength}`);

/**
Methods  //  Functions

    toUpperCase()  - convert string to upper case

        does not change original value in variable
 */

let cityName_UpperCase = cityName.toUpperCase()
console.log(`cityName is ${cityName}`);
console.log(`cityName_UpperCase is ${cityName_UpperCase}`);
console.log(`\n`);
/**
Methods  //  Functions

    toLowerCase()  - convert string to lower case

        does not change original value in variable
 */

let cityName_LowerCase = cityName.toLowerCase()
console.log(`cityName is ${cityName}`);
console.log(`cityName_LowerCase is ${cityName_LowerCase}`);
console.log(`\n`);

/**
Methods  //  Functions

    startsWith()  - find if string starts with an exact given pattern
                    case sensitive
        does not change original value in variable
 */

        let cityName_StartsWith_n = cityName.startsWith('n')
console.log(`cityName is ${cityName}`);
console.log(`cityName_StartsWith_n is ${cityName_StartsWith_n}`);
console.log(`\n`);

let cityName_StartsWith_New_Y = cityName.startsWith('New Y')
console.log(`cityName is ${cityName}`);
console.log(`cityName_StartsWith_New_Y is ${cityName_StartsWith_New_Y}`);
console.log(`\n`);

// Combined to make input not need to be case sensitive

let startsWithPattern = "neW Y"
startsWithPattern = startsWithPattern.toLocaleUpperCase()    // NEW Y
cityName_UpperCase = cityName.toUpperCase()                  // NEW YORK CITY
let cityName_StartsWith_neW_Y = cityName_UpperCase.startsWith(startsWithPattern)
