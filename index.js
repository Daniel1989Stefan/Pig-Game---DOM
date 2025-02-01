
let randomDice = Math.floor((Math.random() * 6) + 1);

let winsPlayer1 = document.querySelector(".result-wins-p1");
let winsPlayer2 = document.querySelector(".result-wins-p2");

let totalscorePlayer1 = document.querySelector(".total-score-p1");
let totalscorePlayer2 = document.querySelector(".total-score-p2");

let scorePlayer1 = document.querySelector(".score-p1");
let scorePlayer2 = document.querySelector(".score-p2");

let rollTheDice = document.querySelector(".roll-the-dice");
let rollTheDiceCounts = 0;

let startTheGame = document.querySelector('.start');
let passToNextPlayer = document.querySelector(".next-player");
let dicePhoto = document.querySelector('.dice-img'); 

let namePlayer1 = document.querySelector('.name-of-player-1');
let namePlayer2 = document.querySelector('.name-of-player-2');

let actualPlayer = true;


let scoreP1 = 0;
let scoreP2 = 0;

let totalScoreP1 = 0;
let totalScoreP2 = 0;

let winsP1 = 0;
let winsP2 = 0;

const changePlayerColor = function(){
    if(actualPlayer){
        namePlayer1.style.color = 'green';
        namePlayer1.style.fontSize = '1.4rem';
        namePlayer2.classList.add('hidden');
        namePlayer1.classList.remove('hidden');
    } else{
        namePlayer2.style.color = 'green';
        namePlayer2.style.fontSize = '1.4rem';
        namePlayer1.classList.add('hidden');
        namePlayer2.classList.remove('hidden');
    }
}

startTheGame.addEventListener('click', function(){
    startTheGame.classList.add("hidden");
    rollTheDice.classList.remove('hidden');
    passToNextPlayer.classList.remove('hidden');
    passToNextPlayer.disabled = true;
    changePlayerColor();
    namePlayer1.textContent = "Player 1";
    namePlayer2.textContent = "Player 2";
}); 


const resetTheGame = function(){
    rollTheDice.classList.add('hidden');

    passToNextPlayer.disabled = true;
    passToNextPlayer.disabled = true;

    startTheGame.textContent = "Restart";
    startTheGame.classList.remove('hidden');

    scoreP1 = 0;
    totalScoreP1 = 0;
    scorePlayer1.textContent = scoreP1;
    totalscorePlayer1.textContent = totalScoreP1;
    winsPlayer1.textContent = winsP1;

    scoreP2 = 0;
    totalScoreP2 = 0;
    scorePlayer2.textContent = scoreP2;
    totalscorePlayer2.textContent = totalScoreP2;
    winsPlayer2.textContent = winsP2;

    if(!actualPlayer){
        setTimeout(() => {
            actualPlayer = true;
        }, 1100);
    }
    rollTheDiceCounts = 0; 
    changePlayerColor();
}


const winner = function(){
    if(totalScoreP1 >= 100){
        winsP1++;
        changePlayerColor();
        namePlayer1.textContent = "Player 1 Wins!🎉🏆";
    }else if(totalScoreP2 >= 100){
        winsP2++;
        changePlayerColor();
        namePlayer2.textContent = "Player 2 Wins!🎉🏆";
    }
}

const playTheGame = function(){
    randomDice = Math.floor((Math.random() * 6) + 1);
    dicePhoto.src = `./images/dice${randomDice}.png`;
    rollTheDiceCounts++;
    if(rollTheDiceCounts === 1){
        passToNextPlayer.disabled = false;
    }

    if(actualPlayer){
        if(randomDice === 1){
            scoreP1 = 0; 
            actualPlayer = !actualPlayer;
            scorePlayer1.textContent = scoreP1;
                
            passToNextPlayer.disabled = true;

                
            document.querySelector('body').style.backgroundColor = "red";
            setTimeout(() => {
                document.querySelector('body').style.backgroundColor = "#FF9C73";
            }, 200);

            rollTheDiceCounts = 0;
            changePlayerColor();
        } else{
            scoreP1 = scoreP1 + randomDice;
            scorePlayer1.textContent = scoreP1;
        }
       
    }else {
        if(randomDice === 1){
            scoreP2 = 0;
            actualPlayer = !actualPlayer;
            scorePlayer2.textContent = scoreP2;

            passToNextPlayer.disabled = true;

            document.querySelector('body').style.backgroundColor = "red";
            setTimeout(() => {
                document.querySelector('body').style.backgroundColor = "#FF9C73";
            }, 200);
            
            rollTheDiceCounts = 0;
            changePlayerColor();
        } else{
            scoreP2 = scoreP2 + randomDice;
            scorePlayer2.textContent = scoreP2;
        }
    }
}


rollTheDice.addEventListener('click', function(){
    playTheGame();
});



passToNextPlayer.addEventListener('click', function(){
    passToNextPlayer.disabled = true;
    rollTheDiceCounts = 0;

    if(actualPlayer){
        totalScoreP1 = totalScoreP1 + scoreP1;
        totalscorePlayer1.textContent = totalScoreP1;
        scoreP1 = 0;
        scorePlayer1.textContent = scoreP1;
    } else{
        totalScoreP2 = totalScoreP2 + scoreP2;
        totalscorePlayer2.textContent = totalScoreP2;
        scoreP2 = 0;
        scorePlayer2.textContent = scoreP2;
    }
    if(totalScoreP1 >= 100 || totalScoreP2 >= 100){
        winner();
        startTheGame.classList.remove('hidden');
        
        resetTheGame();
        return; 
    }
    
    if((totalScoreP1 < 100) && (totalScoreP2 < 100)){
        actualPlayer = !actualPlayer;
        changePlayerColor();
    }
});
