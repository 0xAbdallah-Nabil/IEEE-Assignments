let add= document.querySelector('.classes-to-add');
let remove= document.querySelector('.classes-to-remove');
let current= document.querySelector('.current');
let list= document.querySelector('.classes-list div');

add.addEventListener('blur',function(){
    let val=add.value.toLowerCase().split(' ');
    val.forEach((element) => {
        current.classList.add(element);
        let span=document.createElement('span');
        span.classList.add(element);
        span.appendChild(document.createTextNode(element));
        list.appendChild(span);
    })
    add.value='';
});
remove.addEventListener('blur',function(){
    let val=remove.value.toLowerCase().split(' ');
    val.forEach((element) => {
        if(current.classList.contains(element)){
            list.removeChild(list.querySelector(`span.${element}`));
            current.classList.remove(element);
        }
    })
    
    remove.value='';
});

/********************************************************************************* */
let ourElement = document.querySelector(".our-element");
let paragraph = document.querySelector("p");


paragraph.remove();


let startDiv = document.createElement("div");
startDiv.className = "start";
startDiv.title = "Start Element";
startDiv.dataset.value = "Start";
startDiv.textContent = "Start";
ourElement.before(startDiv);


let endDiv = document.createElement("div");
endDiv.className = "end";
endDiv.title = "End Element";
endDiv.dataset.value = "End";
endDiv.textContent = "End";
ourElement.after(endDiv);
/********************************************************************************* */
let ele =document.querySelector('div span');
console.log(ele.nextSibling.nextSibling.nextSibling);
/********************************************************************************* */
document.addEventListener('click',function(e){
    if(e.target.textContent==='Element'){
        console.log(`This Is ${e.target.tagName} `);
}
})

