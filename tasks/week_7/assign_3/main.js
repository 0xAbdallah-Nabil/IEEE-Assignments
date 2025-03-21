let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let newArr= mix.map((ele)=>isNaN(parseInt(ele))?ele:"").reduce((acc,ele)=> acc+ele)
console.log(newArr);


let myString = "EElllzzzzzzzeroo";
let newString=myString.split("").filter( (ele,index,arr) => ele !== arr[index + 1])
.reduce((acc,ele)=> acc + ele);
console.log(newString);

let myArray = ["E", "l", "z", ["e", "r"], "o"];
let newArray = myArray.map((ele) => Array.isArray(ele) ? ele.reduce((acc,ele)=> acc + ele): ele).reduce((acc,ele)=> acc + ele);
console.log(newArray);


let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let numss=numsAndStrings.filter((ele) => !isNaN(parseInt(ele))).map((ele) => -ele);
console.log(numss);



let nums = [2, 12, 11, 5, 10, 1, 99];
let sum = nums.reduce((acc, ele) => ele % 2 === 1 ? acc + ele : acc * ele);
console.log(sum);