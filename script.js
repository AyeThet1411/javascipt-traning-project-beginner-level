'use strict';
const score=document.querySelector('.score');
const message=document.querySelector('.message');
const buttons=document.querySelectorAll('button');
let winnerScores=[0,0];

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        let playerSelection=e.target.innerText;

        let computerSelection=Math.round(Math.random()*8);
        if(computerSelection < 3){
            computerSelection='Rock';
        }else if(computerSelection < 6){
            computerSelection='Paper';
        }else{
            computerSelection='Scissors';
        }
        //compare and retrun result
        let result=checkWinner(playerSelection,computerSelection);

        //output score
        if(result === 'player'){
            result+='wins!';
            winnerScores[0]++;
        }
        if(result === 'computer'){
            result+='wins!';
            winnerScores[1]++;
        }
        if(result === 'Draw'){
            result +="It's tie!"
        }

        score.innerHTML=`Player: [ ${winnerScores[0]}] &nbsp;Computer: [${winnerScores[1]}];`
        message.innerHTML=`Player: <mark> ${playerSelection} </mark> &nbsp;
                            Computer: <mark>${computerSelection}</mark><br><br><strong> ${result}</strong>`;

    })
})
function checkWinner(player,computer){
    if(player === computer){
        return 'Draw';
    }
    if(player === 'Rock'){
        if(computer === 'Paper'){
            return 'computer';
        }else{
            return 'player';
        }
    }
    if(player === 'Paper'){
        if(computer === 'Scissors'){
            return 'computer';
        }else{
            return 'player';
        }
    }
    if(player === 'Scissors'){
        if(computer === 'Rock'){
            return 'computer';
        }else{
            return 'player';
        }
    }
}