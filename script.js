'use strict';
const form=document.querySelector('form');
let feet=document.querySelector('#feet');
let inches=document.querySelector('#inches');
let results=document.querySelector('#results');

form.addEventListener('submit',function(e){
    e.preventDefault();

    feet=parseInt(feet.value);
    inches=parseInt(inches.value);

    if(isNaN(feet) || isNaN(inches)){
        results.textContent="Please enter a valid number";
    }else if(feet < 0){
        results.textContent="Please enter feet greater than 0";
    }else if(inches <0 ||  inches >=12){
        results.textContent="Please enter an inch between 0 and 12";
    }else{
        const convertCM=Math.round((feet*30.48)+(inches*2.54));
        results.textContent=`${convertCM}cm`;
        document.querySelector('#feet')=' ';
        document.querySelector('#inches')=' ';
    }
})