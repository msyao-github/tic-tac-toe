'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
//^this is not defined!!! needs to be defined!

// load sass manifest
require('../styles/index.scss');
// let playerImg = [<img src="https://i.imgsafe.org/9d441eb.gif" height="50"/>,<img src="https://i.imgsafe.org/74d6152.gif" height="50"/>];
let winner;
let player = 'X';
let xWins = 0;
let oWins = 0;
let ties = 0;


$("button").on('click', function() {
  $('.box').text('');
  $('.box').removeClass('disable');
});


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
  if(checkWinCombo(1, 2, 3) ||
    checkWinCombo(4, 5, 6) ||
    checkWinCombo(7, 8, 9) ||
    checkWinCombo(1, 4, 7) ||
    checkWinCombo(2, 5, 8) ||
    checkWinCombo(3, 6, 9) ||
    checkWinCombo(1, 5, 9) ||
    checkWinCombo(3, 5, 7)) {
      winner = player;
      $('.box').off("click");
      $('.messages').text('Congrats! Player ' + player + ' Wins!');
      score();
    } else if ($('.box').text().length === 9 ){
      winner = 'tie';
      $('.messages').text('It\'s A Tie!');
      score ();
    } else{
      return false;
    }

};

let switchPlayer = function() {
  if (player === 'X') {
    player = 'O';
  } else {
    player = 'X';
  }
};



let move = function() {
  $('.box').on('click', function() {
      if ($(this).text() !== '') {
        $('.messages').text('Select another box!');
      } else if (player === 'X') {
        $(this).text('X');
        $(this).last().addClass('disable');
        console.log ('click');
      } else {
        $(this).text('O');
        $(this).last().addClass('disable');
      }
      checkWin();
      switchPlayer();
  });
};

$(document).ready(() => {
  console.log('It works.');
  move ();
});
