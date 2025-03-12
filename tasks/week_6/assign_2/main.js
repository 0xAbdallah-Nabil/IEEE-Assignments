// Test Case 1
//let num = 9; // "009"

 // Test Case 2
//let num = 20; // "020"

// Test Case 3
let num = 110; // "110" */

if(num < 10){
    console.log(`00${num}`);

}
else if(num > 10 && num < 100){
    console.log(`0${num}`);
}
else{
    console.log(`${num}`);
}

/*********************************************************************************************************************** */
let n = 9;
let str = "9";
let str2 = "20";

// Output
if(n == str){
    console.log("{n} Is The Same Value As {str}");
}
if((n == str)){
    if(typeof n != typeof str){
        console.log("{n} Is The Same Value As {str} But Not The Same Type");
    }
    else{
        //nothing
    }
}
if(n != str2 && typeof n != typeof str2){
    console.log("{n} Is Not The Same Value Or The Same Type As {str2}")
}
if(str != str2 && typeof str == typeof str2){
    console.log("{n} Is Not The Same Value Or The Same Type As {str2}")
}

/*********************************************************************************************************************** */
let nm1 = 10;
let nm2 = 30;
let nm3 = "30";

// Needed Output
if (nm3 > nm1 && typeof nm3 !== typeof nm2) {
    console.log(`${nm3} Is Larger Than ${nm1} And Type ${typeof nm3} Not The Same Type As ${typeof nm1}`);
}

if (nm3 > nm1 && nm3 == nm2 && typeof nm3 !== typeof nm2) {
    console.log(`${nm3} Is Larger Than ${nm1} And Value Is The Same As ${nm2} And Type ${typeof nm3} Not The Same Type As ${typeof nm2}`);
}

if (nm3 !== nm1 && typeof nm3 !== typeof nm1 && typeof nm3 !== typeof nm2) {
    console.log(`${nm3} Value And Type Is Not The Same As ${nm1} And Type Is Not The Same As ${nm2}`);
}
/*********************************************************************************************************************** */
// Edit What You Want Here

let num1 = 20;
let num2 = 1;
let num3 = 20;
let num4 = 60;

/*
    Do Not Edit Below This Line
    Needed Output
    True 7 Times
*/

// Condition 1

if (num1 > num2) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
    console.log("True");
} else {
    console.log("False");
}