
// getComputerChoice - ok
// playerSelection - ok
// computerSelection - ok
// playRound
const a = 'rock';
const b = 'paper';
const c = 'scissors';

const getComputerChoice = (solutions) => {
   const solution = solutions[Math.floor((Math.random()*solutions.length))]
   return solution
};

const computerSelection = () =>{
    return getComputerChoice([a,b,c]);
}

const playerSelection = () => {
    let playerSol = prompt('select an option: rock, paper, scissors');

    if(playerSol == 'rock'){
        console.log('you selected rock');
    } else if(playerSol == 'paper'){
        console.log('you selected paper');
    } else if(playerSol == 'scissors'){
        console.log('you selected scissors');
    } else {
        playerSol = prompt('Write the option correctly')
    };

    return playerSol

};


const playRound = () =>{
    let playerCount = 0;
    let computerCount = 0;
    let computer = computerSelection();
    console.log(computer);
    let player = playerSelection();
    if(computer == player){
        console.log('no one wins');
    }else if (computer == 'rock' && player == 'paper'){
        console.log('player wins');
        playerCount ++;
    } else if(computer == 'rock' && player == 'scissors'){
        console.log('computer wins');
        computerCount ++;
    } else if(computer == 'paper' && player == 'rock'){
        console.log('computer wins');
        computerCount ++;
    }else if(computer == 'paper' && player == 'scissors'){
        console.log('player wins');
        playerCount++;
    }else if(computer == 'scissors' && player == 'rock'){
        console.log('player wins');
        playerCount++;
    }else{
        console.log('computer wins');
        computerCount ++;
    }
}

const game = () => {
    let computerCount = 0;
    let playerCount = 0;
    for (let index = 0; index < 5; index++) {
        playRound();
        console.log(computerCount);
    }
    if (computerCount > playerCount) {
        console.log('Computer Wins The Game')
    }else {
        console.log('Player Wins The Game')
    }
    computerCount = 0;
    playerCount = 0;
};
game()
    