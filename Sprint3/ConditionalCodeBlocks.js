// Conditional Code Blocl //  Conditional Loop
//  -Different code to execute depending upon condition(s)
// syntax:
//if (conditions) {
//    if-block: code to execute when condition results to true
//} else {
//    else-block: code to execute when condition results to false
//}




// if (2 === 2){
//     console.log('Hello World');
// }
// const countryName = 'United States of America'
// const checkCountryName = 'United states of america'
// if (countryName.toUpperCase().localeCompare(checkCountryName.toUpperCase()) === 0) {
//     console.log(countryName.toUpperCase());

// } else {
//     console.log('You are not a US citizen.');
// }

// var dayName = 'mon';
// var isMeeting = false //or False

// if (( dayName === 'mon' || dayName === 'thur' ) && !isMeeting ){
//     console.log('I can work from home.');
// } else if ( dayName === 'tue' || dayName === 'wed' || dayName === 'fri' || isMeeting){
//     console.log('I need to fo to the office.');
// } else if (ayName === 'sat' || dayName === 'sun'){
//     console.log('I will enjoy my weekend');
// } else {
//     console.log('Invalid Day Name');
// }



/**
 *  Switch Block
 * 1. all conditions related to one variable
 * 2. all conditions compare with equals
 * 3. for every block there is only one condition
 * 
 * Syntax
 * switch (num) {
 *      case 2: 
 *          Case 2 block
 *          break;
 *      case 5
 *          case 5 block
 *          break;
 *      default:
 *          run this code if not any above case
 *          break;}
 */
// var num = 0;

// switch (num) {
//     case 2:
        
//         break;
        
//     default:
//         break;
// }

// var userName = 'happy'

// if (userName.toLowerCase().localeCompare('happy') === 0){
//     console.log('good name');
// } else if (userName.toLowerCase().localeCompare('joy') === 0) {
//     console.log(`${userName} ${userName.length}`);
//     console.log('Your name is to short');
// } else if (userName.toLowerCase().localeCompare('john') === 0) {
//     console.log(userName.toUpperCase());
// } else {
//     console.log('You have a different name than we expected');
// }

var dayName = 'Saturday'

if ( dayName.substring(0,4).toLowerCase() === 'mon' || dayName.toLowerCase().substring(0,4) ==='wed' || dayName.toLowerCase().substring(0,4) ==='fri'){
    console.log('Today is the Technosoft class');
} else if ( dayName.substring(0,4).toLowerCase() === 'tue' || dayName.toLowerCase().substring(0,4) === 'thu' ) {
    console.log('Today is self learning day');
} else if ( dayName.substring(0,4).toLowerCase() === 'sat' ) {
    console.log('Today is lab session day');
} else if ( dayName.substring(0,4).toLowerCase() === 'sun' ) {
    console.log('No study today');
} else {
    console.log('Entered day-value is not valid');
}