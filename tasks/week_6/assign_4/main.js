let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(0, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(0, num)); // ["Ahmed", "Elham", "Osama"];


let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends=friends.splice(1, 2);

console.log(friends); // ["Eman", "Osama"]



let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = finalArr.concat(arrOne, arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].toUpperCase().slice(2)); // ZERO


let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(haystack.includes(needle)){
    console.log("Found");
}
else{
    console.log("Not Found");
}

if(haystack.indexOf(needle) !== -1){
    console.log("Found");
}
else{
    console.log("Not Found");
}

if(haystack.lastIndexOf(needle) !== -1){
    console.log("Found");
}
else{
    console.log("Not Found");
}


let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = allArrs.concat(arr1, arr2).sort().slice(4).join("").toLowerCase();

console.log(allArrs); // fxy