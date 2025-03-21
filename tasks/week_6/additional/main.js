/**
 * Solve assignments elzero from lesson 31⇒ 56

### `problem 1`

Create a program that takes a number as input and checks whether it is a prime number.

`problem 2`

Complete the square sum so that it squares each number passed into it and then sums the results together.

For example, for `[1, 2, 2]` it should return `9` because 12+22+22=912+22+22=9.
 */

let num = 5;
let prime = true;
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        prime = false;
    }
}
console.log(prime);

let arr=[1, 2, 2];
let sum=0;
for(let i=0;i<arr.length;i++){
    arr[i]*=arr[i];
    sum+=arr[i];
}
console.log(sum);