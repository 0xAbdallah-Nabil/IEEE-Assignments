console.log("***************************************** Start of Excerises****************************************");

// let x = window.prompt("enter the first name");
// let y = window.prompt("enter the second name");
// console.log(x+y);

// anounomous function
let sum = function(x,y){
    return x + y;
}
console.log(sum(10,20));
// arrow function
let sum2=(x,y) => x + y;
console.log(sum2(10,20));
// normal function
function sum3(x,y){
    console.log(x + y);
}
sum3(10,20);
// self invoking function
(function(x,y){
    console.log(x + y);
})(10,22);

// difference between var , let ,const
// redeclaration , reassignment ,hoisting ,scooping , shadowing 
// let grade =40;
// if (grade>=50 && grade<65){
//     console.log("D");
// }
// else if(grade>=65 && grade<75){
//     console.log("C");
// }
// else if(grade>=75 && grade<85){
//     console.log("B");
// }
// else if(grade>=85 && grade<100){
//     console.log("A");
// }
// else{
//     console.log("F");
// }

(function(k){
    for(i=k;i<=12;i++){
        for(j=1;j<=12;j++){
            console.log(i*j);
        }
        console.log("-----------------------------------");
    }
})(5);

// var btn1 = document.getElementsByClassName("btn");
// console.log(btn1);
// var btn2 = document.getElementById('b')
// console.log(btn2);
// var btn3 = document.getElementsByTagName('button')[0];
// console.log(btn3);
// var btn4 = document.getElementsByName('bt')[0];
// console.log(btn4);
// var btn5 = document.querySelector('.b');
// var btn5 = document.querySelectorAll('.b');
// console.log(btn5);

let btn=document.getElementById('btn');


// btn.onclick=function(){
//     console.log(this);
// }


// btn.onclick= () =>{
//     console.log(this);
// }

// btn.onclick= (e) =>{
//     console.log(e.target);
// }

// btn.addEventListener('click', () => {
//     console.log(this);
// })

// setTimeout(()=>btn.onclick=() => {
//     console.log(this);
// }, 2000);

// setTimeout(btn.onclick=function(){console.log(this);},2000)

// Returns the elements of an array that meet the 
// condition specified in a callback function
let arr= [1,2,3,4,5];
let even=arr.filter(x=>x%2===0);
console.log(even);

// Calls a defined callback function on each element of an array, 
// and returns an array that contains the results.
let arr2= [1,2,3,4,5];
let mapping=arr2.map(x=>x*2);
console.log(mapping);


// Returns a new array with all sub-array elements 
// concatenated into it recursively up to the specified depth..
let arr1 = [1, [2, 3], [4, [5]]];
let flat1 = arr1.flat();    // will return [1, 2, 3, 4, [5]]
let flat2 = arr1.flat(2);  



// Returns the value of the ""first element"" in the array where predicate is true, 
// and undefined otherwise.
let arr4= [1,2,3,4,5];
let findFristElements =arr4.find(x=>x>2);
console.log(findFristElements);

// Determines whether an array includes a certain element, 
// returning true or false as appropriate.
let items = ['a', 'b', 'c'];
console.log(items.includes('b')); // true
console.log(items.includes('x')); // false

console.log("***************************************** End of Excerises****************************************");
