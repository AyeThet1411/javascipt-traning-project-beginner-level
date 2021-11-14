'use strict';
let quotes=[
    'The secret to life is to love who you are.',
    'Look for opportunities in every change in your life.',
    'Persist while others are quitting.',
    'and so on.'
    ];
const displayQutoes=function(){
    let index=Math.floor(Math.random()*quotes.length);

    let quote=`<div class="card">
                    <i class="fas fa-quote-left"></i>
                    <p>${quotes[index]}</p> 
                    <i class="fas fa-quote-right"></i>
                </div>`;
    const quoteString=document.querySelector('#quote');

    quoteString.innerHTML=quote;
}

const button=document.querySelector('.btn');
button.addEventListener('click',displayQutoes);