let numberOne = 10;
let numberTwo = 20;
console.log(numberOne +""+ numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof (`${numberOne} + ${numberTwo}`)); // Template Literals Way => String

console.log( numberOne +'\n'+ numberTwo);
console.log(`${numberOne} 
${numberTwo} `);


console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

let a = 21;
let b = 20;

console.log("I'm In\n\\\nLove \\ \"\"\" '''\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"``");

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_