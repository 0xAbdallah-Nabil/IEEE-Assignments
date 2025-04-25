let prom =prompt("Print Number From – To");
let arr =prom.split('-');
let num1 = parseInt(arr[0]);
let num2 = parseInt(arr[1]);
let start = Math.min(num1, num2);
let end = Math.max(num1, num2);
let sum = 0;
for (let i = start; i <= end; i++) {
    console.log(i);
}
/********************************************************************** */  
/* let div =document.querySelector('div');

let counter =setInterval(() => {
    let current =parseInt(div.innerHTML);
    div.innerHTML=current-1;
    if(div.innerHTML=== '0'){
        clearInterval(counter);
        window.open('https://elzero.org','_blank');
    }
}, 1000);
 */
/********************************************************************** */  
/* let div =document.querySelector('div');

let counter =setInterval(() => {
    let current =parseInt(div.innerHTML);
    div.innerHTML=current-1;
    if(div.innerHTML=== '0'){
        clearInterval(counter);
        window.open('https://elzero.org','_blank');
    }
}, 1000); */
/********************************************************************** */  
/* let div =document.querySelector('div');

let counter =setInterval(() => {
    let current =parseInt(div.innerHTML);
    div.innerHTML=current-1;
    if(div.innerHTML=== '5'){
        clearInterval(counter);
        window.open('https://elzero.org','_blank','width=400,height=400');
    }
}, 1000); */
/********************************************************************** */  
setTimeout(() => {
    let popup =document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML=`
        <h2>Welcome</h2>
        <p>welcome here</p>
        <span class="close">X</span>`;
    document.body.appendChild(popup);
    let close =document.querySelector('.close');
    
}, 5000);
close.addEventListener('click',function(){
    document.querySelector('.popup').remove();
}) 
