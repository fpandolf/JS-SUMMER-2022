// Strings


/**
Length
    property of string class to get numer of characters in string object.

**/
//let cityName = 'New YOrk ciTy'
// let cityNameLength = cityName.length
// console.log(`Length = ${cityNameLength}`);

/**
Methods  //  Functions

    toUpperCase()  - convert string to upper case

        does not change original value in variable
 */

// let cityName_UpperCase = cityName.toUpperCase()
// console.log(`cityName is ${cityName}`);
// console.log(`cityName_UpperCase is ${cityName_UpperCase}`);
// console.log(`\n`);
/**
Methods  //  Functions

    toLowerCase()  - convert string to lower case

        does not change original value in variable
 */

// let cityName_LowerCase = cityName.toLowerCase()
// console.log(`cityName is ${cityName}`);
// console.log(`cityName_LowerCase is ${cityName_LowerCase}`);
// console.log(`\n`);

/**
Methods  //  Functions

    startsWith()  - find if string starts with an exact given pattern
                    case sensitive
        does not change original value in variable
 */

//         let cityName_StartsWith_n = cityName.startsWith('n')
// console.log(`cityName is ${cityName}`);
// console.log(`cityName_StartsWith_n is ${cityName_StartsWith_n}`);
// console.log(`\n`);

// let cityName_StartsWith_New_Y = cityName.startsWith('New Y')
// console.log(`cityName is ${cityName}`);
// console.log(`cityName_StartsWith_New_Y is ${cityName_StartsWith_New_Y}`);
// console.log(`\n`);

// Combined to make input not need to be case sensitive

// let startsWithPattern = "neW Y"
// startsWithPattern = startsWithPattern.toLocaleUpperCase()    // NEW Y
// cityName_UpperCase = cityName.toUpperCase()                  // NEW YORK CITY
// let cityName_StartsWith_neW_Y = cityName_UpperCase.startsWith(startsWithPattern)
/**
 * **********************************From DEEPAK "***************************
/**
 * Example for ignoring pattern with StartsWith
 */

// let startsWithPattern = 'neW y';
// startsWithPattern = startsWithPattern.toUpperCase();    // NEW Y 
// let cityName_Uppercase = cityName.toUpperCase();        // NEW YORK CITY
// let cityNameStartsWith_neW_Y = cityName_Uppercase.startsWith(startsWithPattern);
// console.log(`\ncityName -> ${cityName}`);
// console.log(`is ${cityName} start with 'neW Y' : ${cityNameStartsWith_neW_Y}`);

// let res = cityName.toUpperCase().startsWith(startsWithPattern.toUpperCase());
// console.log(res);
// ******************************************************************************************************************



//Methods  //  Functions

//let cityName = 'New YOrK ciTy'
// Ends with
// endsWith()  - checks if string ends with exact given pattern
// returns boolean

// let cityNameEndsWith_K_ciTy = cityName.endsWith('K ciTy');
// console.log(`cityNameEndsWith_K_ciTy is ${cityNameEndsWith_K_ciTy}`);

// let cityNameIncludes_rK_ci = cityName.includes('rK ci');
// console.log(`cityNameIncludes_rK_ci is ${cityNameIncludes_rK_ci}`);

// let abc 
// console.log(abc);


/**
 * startsWith(), endsWith(), and includes()
 * input # = 1
 * input type = string
 * result type = boolean
 */



// Function 
// Replace
// replace a given pattern from string with another pattern/value
// replace()
//input # = 2
// input type = 2 strings ( item replaced, and item to replace with)
// return type = string

// let sentence = 'I have a cAt'
// let sentenceReplace_a_Z = sentence.replace('a', 'Z')
// console.log(`sentenceReplace_a_Z is ${sentenceReplace_a_Z}`);

// by default only the first instance

// (/a/g, 'Z') replaces all lower case a to Z   //            /g = global
// (/a/gi, 'Z') replaces all a to Z regardles of case  //     /i = ignore case


/**
 * Function to join 2 or more strings
 * 
 * concat()
 * str1.concat(str2,str3,str4)
 * or
 * str1 + str2 + str3 + str4
 */



// Funtion Trim
//  trim()
// removes spaces before and after genuine characters (does not work between genuine characters 'H' and '!')
// '    Hi    !      '   becomes 'Hi    !'
// let sent = '      a    b       c     '
// console.log(`"${sent.trim()}"`);

//Function Pad
//padStart()
//adds padding at the beginning 
//padEND()
//adds padding at the end
//input# = 2
//input type =
//  number : length of string after padding
//  String : character we would like to use for padding
// result type =
//  string: string after padding
// Hello padStart(7,*) = **Hello
// Hello padStart(4,*) = Hello  // Hello was already 4 or more characters

// let pString = 'Hello';
// let pStringAfterPadding7 = pString.padStart(7,'*');
// console.log(`pStringAfterPadding7 is ${pStringAfterPadding7}`);
// let pStringAfterPadding4 = pString.padStart(4,'*');
// console.log(`pStringAfterPadding4 is ${pStringAfterPadding4}`);
// let pStringAfterPaddingE12 = pString.padEnd(12,'abc');
// console.log(`pStringAfterPaddingE12 is ${pStringAfterPaddingE12}`);
// let pStringAfterPaddingE4 = pString.padEnd(4,'abc');
// console.log(`pStringAfterPaddingE4 is ${pStringAfterPaddingE4}`);


 /**
  * Function  charAT
  * finds character at given index
  * input# = 1
  * input type = number (location in index to check what character is there) 
  * 
  */
 let sentence = 'asdfasdfasdfasdf'
//  console.log(sentence.charAt(2));
//  console.log(sentence.charAt(200));   //beyond the scope (invalid in this case) returns nothing
//  console.log(sentence.charAt(-4));   // also invalid  (always for negative value) returns nothing

 /**
  * Function indexOf()
  * to find at which index the given pattern is exactly present in the string  (first occurence)
  * input # = 1
  * input type = string
  * result = number : index where the pattern first occurs or -1 if not present
  */
//  console.log(sentence.indexOf('a'));   // 0  first occurence @ index 0 
//  console.log(sentence.indexOf('b'));    // -1 invalid vecause does not exist in the string
//  console.log(sentence.indexOf('sdf'));  // 1   first occurence @ index 1  whole pattern starts from there
//  console.log(sentence.indexOf('A'));    // -1 (case sensitive)


 /**
  * Function lastIndexOf()
  * to find the index at which last occurence of pattern
  *  input # = 1
  * input type = string
  * result = number : index where the pattern last occurs  or -1 if not present
  */

  console.log(sentence.lastIndexOf('a'))
  console.log(sentence.lastIndexOf('sdf'))
  console.log(sentence.lastIndexOf('b'))