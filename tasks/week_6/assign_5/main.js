let start = 10;
let end = 100;
let exclude = 40;

// Output
for (let i = start; i <= end; i+=10) {
    if (i === exclude) {
        continue;
    }
    console.log(i);
}


let start1 = 10;
let end1 = 0;
let stop1 = 3;

// Output
for (let i = start1; i >= stop1; i--) {
    if (i <= start1) {
        if (i === start1) {
            console.log(`${i}`);
        }
        else{
            console.log(`${end1}${i}`);
        }
    }
}


let start2 = 1;
let end2 = 6;
let breaker2 = 2;

/* // Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
 */
for (let i = start2; i <= end2; i++) {
    console.log(`${i}`);
        console.log(`-- ${breaker2}`);
        console.log(`-- ${(end2 - breaker2)}`);
}


let index = 10;
let jump = 2;

for (;;) {
    if(index >= 2**2) {
        console.log(index);
        index -= jump;
    }
    else{
        break;
    }
}

// Output
10
8
6
4


let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
/* "1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh" */

for (let i = 0; i < friends.length; i++) {
    if (friends[i].startsWith(letter.toUpperCase())) {
        friends.splice(i, 1);
    }
    console.log(`${i + 1} => ${friends[i]}`);
}



let start3 = 0;
let swappedName = "elZerO";

// Output
/* "ELzERo" */
swappedName=swappedName.split("");
for (let i = start3; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toLowerCase()) {
        swappedName[i]=swappedName[i].toUpperCase()
    }
    else{
        swappedName[i]=swappedName[i].toLowerCase()
    }
}
swappedName=swappedName.join("");
console.log(swappedName);



let start4 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
2
3
4
console.log(mix.sort());
for (let i = start4; i < mix.length; i++) {    
    if (typeof mix[i] === "number" && mix[i] !=  !start4) {
        console.log(mix[i]);
    }
}