let operatingSystems = ['Windows 11', 'Mac OS Monterey', 'Ubuntu', 'Fedora Linux', 'Arch Linux'];
//console.log(operatingSystems);
// inserting 'Deepin'
operatingSystems.splice(2,0,'Deepin');
console.log(operatingSystems);
console.log(operatingSystems.indexOf('Deepin'));
multiplicationNumber=2
for (i=0; i<=10; i++) { 
    console.log(`${multiplicationNumber} x ${i} = ${multiplicationNumber*i}`);
};

//2. Write a JavaSC program to print an American flag on the screen.

let stripeT1 = '* * * * * * ==================================';
let stripeT2 = ' * * * * *  ==================================';
let stripeT3 = '==============================================';
console.log(`Q2:`);
//console.log(`${stripeT1}\n${stripeT2}\n${stripeT1}\n${stripeT2}\n${stripeT1}\n${stripeT2}\n${stripeT1}\n${stripeT2}\n${stripeT1}\n${stripeT3}\n${stripeT3}\n${stripeT3}\n${stripeT3}\n${stripeT3}\n${stripeT3}`);
//console.log(`\n\n`);
// for (i=1;i<=15;i++) {
//     if (i <= 9 && i%2 > 0) {  //1%2  remainder 2 or any odd #
//         console.log(stripeT1);
//     } else if (i <= 9 && i%2 === 0) {  // no remainder
//         console.log(stripeT2);
//     } else if (i <= 15) {
//         console.log(stripeT3);
//     }
// }


//______________
//|\\   ||   //|
//| \\  ||  // |
//|  \\ || //  |
//|============|
//|  // || \\  |
//| //  ||  \\ |
//|//___||___\\|
let flagBase = '|             |'
console.log(flagBase);
flagBase.substring(1,3,'\\')
console.log(flagBase);

// for (i=1;i<=8;i++) {
//     switch (i) {
//         case 1:
//             console.log('______________');
//             break;

//         case 2:
//             console.log(flagBase.substring(1,3,'\\').substring(6,8,'||').substring(-3,flagBase.length-1,'//'));
//             break;

//         case 3:
//             console.log(flagBase.substring(2,4,'\\').substring(6,8,'||').substring(-4,flagBase.length-2,'//'));
//             break;
//         case 4:
//                 console.log(flagBase.substring(3,5,'\\').substring(6,8,'||').substring(-5,flagBase.length-3,'//'));
//                 break;
//         case 5:
//                 console.log('==============');
//                 break;
//         case 6:
//                 console.log(flagBase.substring(3,5,'//').substring(6,8,'||').substring(-5,flagBase.length-3,'\\'));
//                 break;
//         case 7:
//                 console.log(flagBase.substring(2,4,'//').substring(6,8,'||').substring(-4,flagBase.length-2,'\\'));
//                 break;
//         case 8 :
//                 console.log(flagBase.substring(1,3,'//').substring(6,8,'||').substring(-3,flagBase.length-1,'\\').replace(/ /g, '_'));
//                 break;
//         default:
//             break;}
// }