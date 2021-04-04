//Plan: make one stage at a time. One round of rock,paper,scissors FINISHED!!
//Plan: make the input case insensitive
//Plan: create a function where the computer randomly generates a string FINISHED!!
//Plan: create a function for player input FINISHED!!
//Plan: create a loop function for five rounds FINISHED!!
let computerNum = (number) => {
  return Math.floor(Math.random() * number + 1)
};
let getComputerSelection = (num) => {
  let compRandom = computerNum(3)
  let comp = ""
  switch (compRandom){
    case 1:
      comp = 'rock'
      break;
    case 2:
      comp = 'paper'
      break;
    case 3:
      comp = 'scissors'
      break;}
  return comp
};

let getPlayerSelection = () =>{
    let playerSelection = prompt("Rock,Paper, or scissors!");
    return playerSelection;}

let cap = (word) => {
  word = word.toUpperCase();
  return word;
}

let winner = "";
let game =(playerSelection, computerSelection) => {
   let result = "";
   playerSelection = cap(playerSelection);
   if (playerSelection === "ROCK" && computerSelection === "paper"){
     result = "You lose, Paper beats rock!";
     winner = "comp";}
   else if (playerSelection === "ROCK" && computerSelection === "scissors"){
     result = "You win, Rock beats scissors!";
     winner = "player";}
   else if (playerSelection === "ROCK" && computerSelection === "rock"){
     result = "Its a Tie!";
     winner = "tie";}
   else if (playerSelection === "SCISSORS" && computerSelection === "paper"){
     result = "You win, Scissors beats paper";
     winner = "player";}
   else if (playerSelection === "SCISSORS" && computerSelection == "rock"){
     result = "You lose, Rock beats scissors";
     winner = "comp";}
   else if (playerSelection === "SCISSORS" && computerSelection == "scissors"){
     result = "Its a Tie";
     winner = "tie"}
   else if (playerSelection === "PAPER" && computerSelection === 'rock'){
      result = "You win, Paper beats Rock!";
      winner = "player";}
   else if (playerSelection === 'PAPER' && computerSelection === 'scissors'){
      result = "You lose, Scissors beats Paper!";
      winner = "comp";}
   else if (playerSelection === 'PAPER' && computerSelection === 'paper'){
      result = "Its a tie";
      winner = "tie"}
   return result;
};
let play = () =>{
  let countP = 0;
  let countC = 0;
  for (let i=0; countP <= 5 || countC <= 5;i++){
    let computerSelection = getComputerSelection();
    let playerSelection = getPlayerSelection();
    if (winner === 'player'){
      countP += 1;
    }
    else if(winner === 'comp'){
      countC += 1};
    console.log(game(playerSelection,computerSelection));
    console.log(countC,countP);
  };
};
