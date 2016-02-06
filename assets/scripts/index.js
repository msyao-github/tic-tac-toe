'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');
// use require without a reference to ensure a file is bundled
require('./example');
//the api authentication

const ajax = require('./api-auth');
// load sass manifest
require('../styles/index.scss');

let winner;
let player = 'X';
let xWins = 0;
let oWins = 0;
let ties = 0;

let gameStatus = 'active';
//clear game and message board
$("button").on('click', function() {
  $('.messages').text('');
  $('.box').text('');
  gameStatus = 'active';
  createGame();
  getGames();

});

let switchPlayer = function(){
    player = player === 'X' ? 'O' : 'X';
};

let move = function() {
  $('.box').on('click', function() {
      if (gameStatus ==='active'){
        if ($(this).text() !== '') {
          $('.messages').text('Click Another Box!');
        } else if (player === 'X') {
          $(this).text('X');
          console.log ('click');
        } else {
          $(this).text('O');
        }
        checkWin();
        switchPlayer();
    }
  });
};


let score = function() {
  if (winner === 'X') {
    xWins++;
    $('#pX').text(xWins);
  } else if (winner === 'O') {
    oWins++;
    $('#pO').text(oWins);
  } else if (winner ==='tie'){
    ties++;
    $('#ties').text(ties);
  }
};

//checks Box ID in html to match with the winning combination of cells
//in checkWinCombo function
let $boxId = function(num) {
  return $('#' + num);
};

let checkWinCombo = function(a, b, c) {
  if ($boxId(a).text() === player && $boxId(b).text() === player && $boxId(c).text() === player) {
    return true;
  } else {
    return false;
  }
};

let checkWin = function() {
  if(checkWinCombo(0, 1, 2) ||
    checkWinCombo(3, 4, 5) ||
    checkWinCombo(6, 7, 8) ||
    checkWinCombo(0, 3, 6) ||
    checkWinCombo(1, 4, 7) ||
    checkWinCombo(2, 5, 8) ||
    checkWinCombo(0, 4, 8) ||
    checkWinCombo(2, 4, 6)) {
      winner = player;
      gameStatus = 'inactive';
      $('.messages').text('Congrats! Player ' + player + ' Wins!');
      score();
    } else if ($('.box').text().length === 9 ){
      winner = 'tie';
      $('.messages').text('It\'s A Tie!');
      score ();
      gameStatus = 'inactive';
    } else{
      return false;
    }

};
//



$(document).ready(() => {
  console.log('Woohoo!');
  move ();
});
