/** Datatype: Object
 * Object -> holds key-value pair
 * Object attribute must be unique within the object
 * //Can (and should) repeact in like objects//
 * eg:
 * var student1 = {
 *      name: 'Deepak',
 *      location: 'USA',
 *      gender: 'M',
 *      courses: 'QA',
 *      paymentType: 'paid full'
 * };
 * 
 * var student2 = {
 *      name: 'Happy',
 *      location: 'EU',
 *      gender: 'M',
 *      courses: 'QA',
 *      paymentType: 'payment plan'
 * };
 * 
 * 
 */
// student1= {
//     name :'Frank',
//     country : 'USA',
//     age : 21
// };
// student2= {
//     name :'ABCD',
//     country : 'UK',
//     age : 45
// };
let human1 = {
    'human name' : 'FPJ',
    88: 'yes',
    ssn : 2,
    gender : 'm',
    qualification :'bs',
    state : 'ny',
    2: false,
    childrenNames : ['c1','c2']
};
//console.log(human1.humanName[0].toLowerCase().concat(human1.humanName.substring(1)));

// Create empty object
// let objectName = new Object();

//for-in loop 
// for (const objProp in human1) {
//     console.log(objProp);
//     console.log(human1[objProp]);
// }

// Keys are always stored as string data type, even digits (digits are printed iterated in loops first )

/**
To add key value pairs to object
 */
// console.log(human1);
// human1.age = 22;
// console.log(human1);

// if key is a digit  or has space use square bracket

// human1['7'] = 7;
// console.log(human1);

/**
To delete key value pairs to object
Operator: delete
- will delete attribute if exists or if attribute doesn't exist
-returns true
-changes orginal object
 */
// console.log(human1);
// delete human1.ssn;
// console.log(human1);

/**
To verify if attribute is present
Operator: in
- if attribute is exactly present returns true
- otherwise returns false
-does not change orginal object
 */
//console.log('human name' in human1);
