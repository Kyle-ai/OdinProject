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


let game =(playerSelection, computerSelection) => {
   let result = "";
   playerSelection = cap(playerSelection);
   if (playerSelection === "ROCK" && computerSelection === "paper"){
     result = "You lose, Paper beats rock!";}
   else if (playerSelection === "ROCK" && computerSelection === "scissors"){
     result = "You win, Rock beats scissors!";}
   else if (playerSelection === "ROCK" && computerSelection === "rock"){
     result = "Tie Game!";}
   else if (playerSelection === "SCISSORS" && computerSelection === "paper"){
     result = "You win, Scissors beats paper";}
   else if (playerSelection === "SCISSORS" && computerSelection == "rock"){
     result = "You lose, Rock beats scissors";}
   else if (playerSelection === "SCISSORS" && computerSelection == "scissors"){
     result = "Tie Game!";}
    else if (playerSelection === "PAPER" && computerSelection === 'rock'){
      result = "You win, Paper beats Rock!";}
    else if (playerSelection === 'PAPER' && computerSelection === 'scissors'){
      result = "You lose, Scissors beats Paper!";}
    else if (playerSelection === 'PAPER' && computerSelection === 'paper'){
      result = "Tie Game!";}
   return result;
};

let play = () =>{
  for (let i = 0; i < 6; i++){
    let computerSelection = getComputerSelection();
    let playerSelection = getPlayerSelection();
    console.log(game(playerSelection,computerSelection));
 };
};
