'use strict';

//const below lets you edit the home url in one place instead of inside each form. You can use as part of a path to change values
//This script works with index.html
const myApp = {
  baseUrl: 'http://tic-tac-toe.wdibos.com',
};

// creates a new game when player signs in
let createGame = function() {
  $.ajax({
    url: myApp.baseUrl + '/games',
    type: 'POST',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    data: {}
  }).done(function(data) {
    myApp.game = data.game;
    console.log('Game created - createGame AJAX');
    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

let gameData = {
};

// get all games associated with a user

let getGames = function() {
  $.ajax({
    url: myApp.baseUrl +'/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    }
  }).done(function(responseBody) {
    gameData = responseBody;
    console.log(responseBody);
    $('.getGames').text(gameData.games.length);
  }).fail(function(requestObject) {
    console.error(requestObject);
  });
};

// updates the moves of each player
let updateGame = function() {
  console.log('It\'s saving');
  $.ajax({
    url: myApp.baseUrl + '/games/' + myApp.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    data: {
  "game": {
    "cell": {
      "index": 0,
      "value": "x",
    },
    "over": false
  }
}
  }).done(function(data) {
    myApp.game = data.game;
    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};


//sign up sign in change pw log out
$(document).ready(() => {
  $('#sign-up-button').on('click', function(e) {
    e.preventDefault();
    var formData = new FormData($("#sign-up")[0]);
    $.ajax({
      url: myApp.baseUrl + '/sign-up',
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });


  $('#sign-in-button').on('click', function(e) {
    e.preventDefault();
    var formData = new FormData($("#sign-in")[0]);
    $.ajax({
      url: myApp.baseUrl + '/sign-in',
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      myApp.user = data.user;
      createGame();
      getGames();
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });


  $('#change-password-button').on('click', function(e) {
    e.preventDefault();
    if (!myApp.user) {
      console.error('wrong');
    }
    var formData = new FormData($("#change-password")[0]);
    $.ajax({
      url: myApp.baseUrl + '/change-password/' + myApp.user.id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + myApp.user.token,
      },
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      console.log('successfully changed password');
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });

  $('#logout').on('click', function(e) {
    e.preventDefault();
    if (!myApp.user) {
      console.error('wrong');
    }
    $.ajax({
      url: myApp.baseUrl + '/sign-out/' + myApp.user.id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + myApp.user.token,
      },
    }).done(function(data) {
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });

});
module.exports = true;
