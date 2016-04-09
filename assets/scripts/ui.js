'use strict';

let hideUi = function() {
  $('.ticboard').hide();
  $('.restart').hide();
  $('#changepw').hide();
  $('#logout-nav').hide();
};

let signInShowHide = function (){
  $('.ticboard').show();
  $('.btn').show();
  $('#signing-up').hide();
  $('#signing-in').hide();
  $('.signin-msg').hide();
  $('.signin-gif').hide();
  $('#changepw').show();
  $('#logout-nav').show();
};

let clearBoard = function (){
  $('.messages').text('');
  $('.box').text('');
};

module.exports = {
  hideUi,
  signInShowHide,
  clearBoard
};
