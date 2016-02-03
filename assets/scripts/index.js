'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
//^this is not defined!!! needs to be defined!

// load sass manifest
require('../styles/index.scss');



function startGame() {
  for (var i = 1; i < 10; i++) {
    clearBox(i);
  }
  document.turn = "X"; //game always starts with X, 0 has 50% chance of next turn
  if (Math.random() < 0.5) {
    document.turn = "O";
  }
  document.winner = null;
  setMessage("Player "+document.turn + " gets to start.");
} //if no previous winner still start game.

function setMessage(msg) {
  document.getElementById("message").textContent = msg;
}


//turns "message" into messages defined by functions below

//if all boxes occupied and there's a winner, 1st message
function nextMove(square) {
  if (document.winner !== null) {
    setMessage("Player "+ document.winner + " has won. Restart the game!");
  } else if (square.textContent == "") {
    //if square is empty, let player move
    square.textContent = document.turn;
    switchTurn();
  } else {
    setMessage("That square is occupied.");
  }
}

function switchTurn() {
  if (checkForWinner(document.turn)) {
    setMessage("Woohoo, Player " + document.turn + "!  You win!");
    document.winner = document.turn;
  } else if (checkForTie ()) {
    setMessage("It's a TIE! How about another game?");
  } else if (document.turn == "X") {
    document.turn = "O";
    setMessage("Player " + document.turn + "'s turn!");
  } else {
    document.turn = "X";
    setMessage("Player " + document.turn + "'s turn!");
  }
}


function checkForWinner(move) {
  let result = false;
  if (checkRow(1, 2, 3, move) ||
    checkRow(4, 5, 6, move) ||
    checkRow(7, 8, 9, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(3, 6, 9, move) ||
    checkRow(1, 5, 9, move) ||
    checkRow(3, 5, 7, move)) {
//3 in a row, horizontal, vertical and diagonal
    result = true;
  }
  return result;
}

function checkForTie(){
  for(var i=1;i<10;i++){
    if(getBox(i)=="")
    return false;
    }
    return true;
}


function checkRow(a, b, c, move) {
  var winner = false;
  if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
    winner = true;
  } //check to see if squares have 3 in a row for checkForWinner
  return result;
}
//reference the s1-9 boxes
function getBox(number) {
  return document.getElementById("s" + number).textContent;
}

function clearBox(number) {
  document.getElementById("s" + number).textContent = "";
}

$(document).ready(() => {
  console.log('It works.');
});
