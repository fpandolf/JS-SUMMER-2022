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
    humanName : 'FPJ',
    ssn : 2,
    gender : 'm',
    qualification :'bs',
    state : 'ny',
    childrenNames : ['c1','c2']
};
console.log(human1.humanName[0].toLowerCase().concat(human1.humanName.substring(1)));