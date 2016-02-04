'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
//^this is not defined!!! needs to be defined!

// load sass manifest
require('../styles/index.scss');
let winner;
let player = 'x';
let xWins = 0;
let oWins = 0;
let ties = 0;

let clearBoard = function() {
  $('.box').text('');
};

$('.restart-button').on('click', clearBoard());

let score = function() {
  if (winner === 'x') {
    xWins++;
    $('#p1').append(xWins);
  } else if (winner === 'o') {
    oWins++;
    $('#p2').append(oWins);
  } else {
    ties++;
    $('#ties').append(xWins);
  }

};

let $BoxId = function(num) {
  return $('#' + num);
};

let checkWinCombo = function(a, b, c) {
  if ($BoxId(a).text() === player && $BoxId(b).text() === player && $BoxId(c).text() === player) {
    return true;
  } else {
    return false;
  }
};

let checkWin = function(event) {
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
      $('.messages').text('Congrats! ' + player + ' wins!');
      score();
    } else {
      return false;
    }
};

let switchPlayer = function() {
  if (player === 'x') {
    player = 'o';
  } else {
    player = 'x';
  }
};

let move = function() {
  $('.box').on('click', function() {
      if ($(this).text() !== '') {
        $('.messages').text('Select another box!');
      } else if (player === 'x') {
        $(this).text('x');
        $(this).last().addClass('disable');
        console.log ('click');
      } else {
        $(this).text('o');
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
