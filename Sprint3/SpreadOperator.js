/**

Spread operator: (...)

- clone or merge arrays or objects

 */
// in array
// let planets = ['EArtH', 'MerCUry', 'VeNUS', 'JuIPteR', 'Pluto', 'SatuRN', 'MARS'];
// let fruits = ['mango', 'apple', 'banana', 'cherry'];
// let states = ['ny', 'nj', 'ca', 'pa', 'tx'];

// let combinedArray1 = [...fruits, ...states]
// console.log(combinedArray);

//with obj

let human1 = {
    humanName : 'FPJ',
    88: 'yes',
    ssn : 2,
    gender : 'm',
    qualification :'bs',
    state : 'ny',
    2: false,
    childrenNames : ['c1','c2']
};
let human2 = {
    ...human1
};
console.log(human2);

let human3 = {
    livesin: 'bb',
    ...human1,
    above18: true,
    ...human2
};
console.log(human3);
// the repeat values do not appear 2x because each attribute must be unique