// Create Your Object Here
let member={
    name:"Elzero",
    age:38,
    country:"Egypt",
    fullDetails:function(){
        let arr="My Name Is ";
        arr+=this.name;
        arr+=", My Age Is ";
        arr+=this.age;
        arr+=", I Live in ";
        arr+=this.country;
        return arr;
    }
}
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());

/*************************************************************************************************  */
// Method One
// Create Your Object Here
let objMethodOne={
    property: "abdallah"
}
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = new Object({
    property: "abdallah"
});
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here

let objMethodThree = Object.create({
    property: "abdallah"
});
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({}, {
    property: "abdallah"
});
console.log(objMethodFour.property); // "Method Four"

/*************************************************************************************************  */
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject=Object.assign({a},threeNums,twoNums);
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/
/*************************************************************************************************  */

// The Object To Work With
let myFavGames = {
    "Trinity Universe": {
      publisher: "NIS America",
      price: 40,
    },
    "Titan Quest": {
      publisher: "THQ",
      bestThree: {
        one: "Immortal Throne",
        two: "Ragnarök",
        three: "Atlantis",
      },
      price: 50,
    },
    YS: {
      publisher: "Falcom",
      bestThree: {
        one: "Oath in Felghana",
        two: "Ark Of Napishtim",
        three: "origin",
      },
      price: 40,
    },
  };
  
  // Code One => How To Get Object Length ?
  let objectLength = Object.keys(myFavGames).length

  
  for (let i = 0; i < objectLength; i++) {
    console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
    console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`);
    console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);
  
    // Check If Nested Object Has Property (bestThree)
    if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`);
    console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`);
    console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`);
    }
    console.log("#".repeat(20));
  }
  
  // Ouput
  
  "The Game Name Is Trinity Universe"
  "The Publisher Is NIS America"
  "The Price Is 40"
  "####################"
  "The Game Name Is Titan Quest"
  "The Publisher Is THQ"
  "The Price Is 50"
  "- Game Has Releases"
  "First => Immortal Throne"
  "Second => Ragnarök"
  "Third => Atlantis"
  "####################"
  "The Game Name Is YS"
  "The Publisher Is Falcom"
  "The Price Is 40"
  "- Game Has Releases"
  "First => Oath in Felghana"
  "Second => Ark Of Napishtim"
  "Third => origin"
  "####################"

  /*************************************************************************************************  */
  /**Task: 1
Create an object called calculator that has two properties: 
num1 and num2, and a method called sum that returns the sum of those numbers using this. */
let calculator={
    num1:1,
    num2:2,
    sum: function(){
        return this.num1+this.num2;
    }
}
console.log(calculator.sum());
/*************************************************************************************************  */
/*
You have an object called `school` with multiple students, each student has a name and grades.

```jsx
const school = {
students: {
    student1: { name: "Ali", grades: [90, 85, 92] },
    student2: { name: "Sara", grades: [88, 79, 95] },
    student3: { name: "Omar", grades: [70, 80, 65] }
}
};

```

Write a function that loops over all students and logs:

- The name of the student
- The average grade

Hints :

- Search For `reduce()` to calc the  average grade
- Search For `for in`   in JavaScript
*/
const school = {
    students: {
        student1: { name: "Ali", grades: [90, 85, 92] },
        student2: { name: "Sara", grades: [88, 79, 95] },
        student3: { name: "Omar", grades: [70, 80, 65] }
    }
    };
for (let i in school.students) { // i here is the hold the property of the object students ->student1 ,student2, student3 not a index
    console.log(`the name of the student ${school.students[i].name}`)
    console.log(`the average grade ${school.students[i].grades.reduce((a,b)=>a+b)/school.students[i].grades.length}`)
}
