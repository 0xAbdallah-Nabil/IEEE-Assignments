function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        let name = zName.split(" ");
        let lastLetter = name[1].charAt(0);
        name.pop();
        name.push( " "+lastLetter + ".");
        return name.join("");
    }
    function ageWithMessage(zAge) {
        let arr="Your Age Is ";
        zAge=zAge.slice(0,2);
        arr+=zAge;
        return arr;
    }
    function countryTwoLetters(zCountry) {
        if(zCountry=="Egypt"){
            return "EG";
        }else if(zCountry=="Syria"){
            return "SY";
        }
    }
    function fullDetails() {
        let arr="Hello ";
        arr+=namePattern(zName);
        arr+=" , ";
        arr+=ageWithMessage(zAge);
        arr+=" , You Live In ";
        arr+=countryTwoLetters(zCountry);
        return arr;
    }
    namePattern(zName); // Do Not Edit This
    return fullDetails(); // Do Not Edit This
}
    console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
    console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY


/**********************************************************************************  */
let itsMe=() =>`Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function

/**********************************************************************************  */
let urlCreate=(protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org"));


/**********************************************************************************  */

let checker=(zName) => (status)=> (salary) =>status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

/**********************************************************************************  */

function specialMix(...data) {
    let sum =0;
    for(let i=0; i<data.length; i++){
        let n=parseInt(data[i]);
        if( !isNaN(n) ){
            sum+=n;
        }
    }    
    return sum || "All Is Strings";
}

  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

