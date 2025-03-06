// Your Solutions
console.log(100_000); // 100000
console.log(1e5); // 100000
console.log(Number("100000")); // 100000
console.log(+"100000"); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(5e4 *2); // 100000
console.log(10**5); // 100000

console.log(-Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseInt(myVar).toFixed(2)); // 100.57

let num = 10;

console.log(Number.isInteger(num)  + Number.isInteger(num)); // 2


let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.round(flt - 0.5)); // 10
console.log(~~flt); // 10 act as trunc(flt) its a bitwise operator convert 0 to 1 and verse versa 


console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4