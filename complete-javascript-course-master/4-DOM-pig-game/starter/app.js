/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScore,activePlayer,gamePlaying;

init();


/** random number[0,6] */
// dice = Math.floor(Math.random()*6)+1;
// console.log(dice)

/** select and set html text element */
// document.querySelector("#current-"+activePlayer).textContent = dice;
/** select and set html element em 斜字体 */
//document.querySelector("#current-"+activePlayer).innerHTML = '<em>'+dice+'</em>';



/**event listener */
document.querySelector(".btn-roll").addEventListener("click",function(){
    if(gamePlaying){
        console.log("change img");
        /** 1. random dice number */
        var dice = Math.floor(Math.random()*6)+1;

        /** 2. display the result  */
        var diceDom = document.querySelector(".dice");
        /**使得图片显示 */
        diceDom.style.display = 'block';
        console.log(dice);
        diceDom.src = 'dice-'+dice+'.png'; 

        /** update the round score If the rolled number was not a 1 */
        if(dice !== 1){
            // add score
            roundScore += dice;
            document.querySelector("#current-"+activePlayer).textContent = roundScore;
        }else{
            // next play
            nextPlayer();
        }
    }
});


document.querySelector(".btn-hold").addEventListener('click',function () {
    if(gamePlaying){
        // add current score to global score
        scores[activePlayer] += roundScore;
        
        // update the UI
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

        // check if player won the game
        if(scores[activePlayer] >= 10){
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying=false;
        }else{
        // next play
        nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click',init);


function init(){
    scores = [0,0];
    roundScore = 0;
    /** 0: play1,1: player2 */
    activePlayer = 0;

    /** img element */
    document.querySelector(".dice").style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    /** system state variable */
    gamePlaying = true;
}


function nextPlayer(){
    var diceDom = document.querySelector(".dice");
     // next play
     activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
     roundScore = 0;

     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';


     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');
     diceDom.style.display = 'none';
};