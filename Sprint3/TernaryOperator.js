/**
 * Ternary Operator (?:)
 * - Situation where you have 2 values you want to assign to a variable one of the two will be assigned conditionally
 * 
 * 
 * 
 *eg.  Mortgage rates
            if  credit score > 700 rate will be 4.5 Else  rate will be 5.5
            (2 values only)


    Syntax
        varName = conditions(s) ? valueWhichWillBeAssignedIfConditionsReturnTrue : valueWhichWillBeAssignedIfConditionsReturnFalse
 */

// if  credit score > 700 rate will be 4.5 Else  rate will be 5.5
let userCreditScore = 770;
let mortgageRate = userCreditScore > 700 ? 4.5 : 5.5;
console.log(`Because your credit score is ${userCreditScore} your rate is ${mortgageRate}`);

//if  credit score > 700 and First time home buyer rate will be 4.5 Else  rate will be 5.5

let userCreditScore2 = 710;
let isFirstTimeBuyer = true;
//let mortgageRate2 = userCreditScore2 > 700 && isFirstTimeBuyer === True ? 4.5 : 5.5;
//let mortgageRate2 = userCreditScore2 > 700 && isFirstTimeBuyer ? 4.5 : 5.5;  // Tests isFristTimeBuyer === True   
//let mortgageRate2 = userCreditScore2 > 700 && !isFirstTimeBuyer ? 4.5 : 5.5;  // Tests isFristTimeBuyer === False 
//console.log(`Because your credit score is ${userCreditScore2} your rate is ${mortgageRate2}`);