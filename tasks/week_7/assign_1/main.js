function sayHello(theName, theGender) {
    if(theGender === "Male"){
        console.log(`Hello Mr ${theName}`);
    }else if(theGender === "Female"){
        console.log(`Hello Miss ${theName}`);
    }
    else{
        console.log(`Hello ${theName}`);
    }
}

  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"



  /***************************************************************************************** */

function calculate(firstNum, secondNum, operation) {
if(firstNum && secondNum){
    if(operation === "add"){
        console.log(firstNum + secondNum);
    }else if(operation === "subtract"){
        console.log(firstNum - secondNum);
    }
    else if(operation === "multiply"){
        console.log(firstNum * secondNum);
    }
    else{
        console.log(firstNum + secondNum);
    }
}
else{
    console.log("Second Number Not Found");
}
}

  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600

/********************************************************************************************************* */


function ageInTime(theAge) {
if(theAge >= 10 && theAge <= 100){
    console.log((theAge * 12) + " Months "+ (theAge * 365) + " Days " + (theAge * 8760) + " Hours " + (theAge * 525600) + " Minutes " + (theAge * 31536000) + " Seconds ");
}
else{
    console.log("Age Out Of Range");
}
}
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
/********************************************************************************************************* */
function checkStatus(a, b, c) {
    let arr=[];
    arr.push(a);
    arr.push(b);
    arr.push(c);
    arr.sort(); //[38, 'Osama', true]
    if(arr[2])
    {
        console.log(`"Hello ${arr[1]}, Your Age Is ${arr[0]}, You Are Available For Hire"`);
    }
    else{
        console.log(`"Hello ${arr[1]}, Your Age Is ${arr[0]}, You Are Not Available For Hire"`);
    }
}
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

  /********************************************************************************************************* */
  function createSelectBox(startYear, endYear) {
    document.write(`<select>`);
    for (let i = startYear; i <= endYear; i++) {
      document.write(`<option value="${i}">${i}</option>`);
    }
    document.write(`</select>`);
  }
  createSelectBox(2000, 2021);

  /********************************************************************************************************* */
function multiply(...nums) {
    let mul=1;
    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] === "string") {
            continue;
        }
        else{
            nums[i] = Math.floor(nums[i]);
            mul*=nums[i];
        }
    }
    console.log(mul);
}
  multiply(10, 20); // 200
  multiply("A", 10, 30); // 300
  multiply(100.5, 10, "B"); // 1000