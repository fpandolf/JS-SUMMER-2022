/**
 * Logical Operators (&&, ||, !)
 * 
 * && - and-operator    All conditions must be true to get result = true
 * || - or-operator     Any condition can be true to get result  = true  
 * !  - not-operator    Makes true into flase and vice versa
 */

// let lVar1 = 10, lVar2 = 20, lVar3 = 30, lVar4 = 40;

// console.log(lVar1 > lVar3 && lVar2 !== lVar4)
// console.log(lVar1 > lVar3 || lVar2 !== lVar4)

let lRes1 = lVar1 <= lVar3 && (lVar2 === lVar3 + lVar4)  // flase 
//              true       &&           false        =     false
console.log(lRes1);


// ! changes the value inside the Parenthesis to true

lRes1 = lVar1 <= lVar3 && !(lVar2 === lVar3 + lVar4)
//              true       && ! (          false       ) = true
//              true       &&               true         = true

console.log(lRes1);