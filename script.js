//Grabbing the DOM elements
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let process = document.getElementById('process');
let win = document.getElementById('win');
let lose = document.getElementById('lose');
let draw = document.getElementById('draw');
let restartButton = document.getElementById('restart');
let computerChoice = document.getElementById('thechoice');
let message = document.getElementById('message');

//Giving the computer three choices
let choices = ['Paper', 'Scissors', 'Rock'];

//Picking a random choice among the array we just declared
let num = Math.floor(Math.random() * Math.floor(choices.length));

//making a variable to keep the choice the computer made
let compchoice = choices[num];

//helper function for if the player loses
function loser(){
    lose.classList.remove('hide');
}

//helper function for if the player wins
function winner(){
    win.classList.remove('hide');
}

//helper function for if the player and computer are tied
function tie(){
    draw.classList.remove('hide');
}

//function to make the play again button appear
function restartAppear(){
    restartButton.classList.remove('hide');
}

//function that makes the play again button reload the page
function restart(){
    window.location.reload();
}

//helper function to display what the computer chose on screen
function result(){
    computerChoice.innerText = `The computer chose ${compchoice}!`;
    computerChoice.classList.remove('hide');
}

//the function to be executed if the player chooses rock
function rockChoice(){

    message.innerText = "Your form of attack is:";

    paper.style.display = 'none';
    scissors.style.display = 'none';

    process.classList.remove('hide');

    if (compchoice === 'Paper'){
        setTimeout(result, 2000);
        setTimeout(loser, 3000);
        setTimeout(restartAppear, 3000);
    } else if (compchoice === 'Scissors'){
        setTimeout(result, 2000);
        setTimeout(winner, 3000);
        setTimeout(restartAppear, 3000);
    } else if (compchoice === 'Rock'){
        setTimeout(result, 2000);
        setTimeout(tie, 3000);
        setTimeout(restartAppear, 3000);
    }
};

//function to be executed if the player chooses paper
function paperChoice(){

    message.innerText = "Your form of attack is:";

    rock.style.display = 'none';
    scissors.style.display = 'none';

    process.classList.remove('hide');

    if (compchoice === 'Paper'){
        setTimeout(result, 2000);
        setTimeout(tie, 3000);
        setTimeout(restartAppear, 3000);
    } else if (compchoice === 'Scissors'){
        setTimeout(result, 2000);
        setTimeout(loser, 3000);
        setTimeout(restartAppear, 3000);
    } else if (compchoice === 'Rock'){
        setTimeout(result, 2000);
        setTimeout(winner, 3000);
        setTimeout(restartAppear, 3000);
    }
};

//function to be executed if the player chooses scissors
function scissorsChoice(){

    message.innerText = "Your form of attack is:";

    rock.style.display = 'none';
    paper.style.display = 'none';

    process.classList.remove('hide');

    if (compchoice === 'Paper'){
        setTimeout(result, 2000);
        setTimeout(winner, 3000);
        setTimeout(restartAppear, 3000);
    } else if (compchoice === 'Scissors'){
        setTimeout(result, 2000);
        setTimeout(tie, 3000);
        setTimeout(restartAppear, 3000);
    } else if (compchoice === 'Rock'){
        setTimeout(result, 2000);
        setTimeout(loser, 3000);
        setTimeout(restartAppear, 3000);
    }
};