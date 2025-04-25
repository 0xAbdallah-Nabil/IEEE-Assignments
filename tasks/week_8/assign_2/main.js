
let myElement1=document.getElementById("elzero");
let myElement2=document.querySelector(".element");
let myElement3=document.querySelector('#elzero');
let myElement4=document.querySelector('[name="js"]');
let myElement5=document.querySelectorAll('div');
let myElement6=document.getElementsByClassName("element");
let myElement7=document.getElementsByName("js");
let myElement8=document.getElementsByTagName("div"); //All Divs as list so index 0 is the correct
let myElement9=document.querySelectorAll(".element"); //All Divs as list
let myElement10=document.querySelectorAll('#elzero'); //All Divs as list
let myElement11=document.querySelectorAll('[name="js"]'); //All Divs as list
let myElement12=document.querySelectorAll('div'); //All Divs as list
let myElement13=document.body.firstElementChild; 
let myElement14=document.body.children[0];
console.log(myElement11);

/******************************************************************** */
let Elements=document.querySelectorAll('img');

for (let i = 0; i < 10; i++) {
    if(i ==1)Elements[i].src='https://elzero.org/wp-content/themes/elzero/imgs/logo.png';
    Elements[i].alt="Elzero Logo";
}
/******************************************************************** */
let input=document.querySelector('input');
let result=document.querySelector('.result');
input.onclick=function(event){
    if(input.value ==='' || input.value < 0){
        input.style.border="1px solid red";
        event.preventDefault();
    }
    else{
        input.style.border="1px solid green";
        result.textContent=`{${input.value}} USD Dollar = {${(input.value * 15.6).toFixed(2)}} Egyptian Pound`;
        
    }

}
/******************************************************************** */
let one=document.querySelector('.one');
let two=document.querySelector('.two');
one.setAttribute('title','one');
two.setAttribute('title','two');
one.textContent='one';
two.textContent='two 2';
/******************************************************************** */
let task5=document.querySelectorAll('[decoding="async"]');
array=[...task5].slice(-5);
console.log(array[0]);
array.forEach((element) => {
    if(element.hasAttribute('alt')){
        element.setAttribute('alt','old');
    }
    else {
        element.setAttribute('alt','Elzero New');
    }
});

/******************************************************************** */
let last=document.getElementsByTagName('form')[1];
let numberOfElements=last.children[0];
let elementsText=last.children[1];    
let selection=last.children[2];    
let submit=last.children[3];
let result2=document.querySelector('.results');
    submit.onclick=function(event){
        if(numberOfElements.value !== '' && elementsText.value !== '' ){
            for (let i = 0; i < numberOfElements.value; i++) {
                let element=document.createElement(selection.value);
                element.textContent=elementsText.value;
                result2.appendChild(element);
                event.preventDefault();
            }
        }
        else{
            event.preventDefault();
        }
        
    }
    
