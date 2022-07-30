const MyCodeTestFunctions = require("./MyCodeTestFunctions");


//Q1:
const inputArrayQ1 = [21, 32, 12, 43, 45, 65, 12];
const removeValue = 12
console.log(`Q1: \nRemoving all instances of ${removeValue} from the array [${inputArrayQ1}] yeilds the new array [${MyCodeTestFunctions.removeNumber(inputArrayQ1, removeValue)}]`);

//Q2:
const inputArrayQ2 = [1, 1, 2, 4, 3, 6, 4, 7, 9]
console.log(`Q2: \nThe smallest missing positive integer in the array [${inputArrayQ2}] is ${MyCodeTestFunctions.smallestMissingPositive(inputArrayQ2)}`);

//Q3:
const speedLimit = 50
const userSpeed = 100

console.log(`Q3: \nA driver going ${userSpeed} mph in a ${speedLimit} mph zone will receive ${MyCodeTestFunctions.addPoints(100,50)} points on their licence.`);