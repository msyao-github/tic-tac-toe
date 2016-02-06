'use strict';

//const below lets you edit the home url in one place instead of inside each form. You can use as part of a path to change values
//This script works with index.html
const myApp = {
  baseUrl: 'http://tic-tac-toe.wdibos.com',
};
// Create game state
let createGame = function() {
   $.ajax({
     url: myApp.baseUrl + '/games',
     headers: {
       Authorization: 'Token token=' + myApp.user.token,
     },
     method: 'POST',
     contentType: false,
     processData: false,
     data: {}
   }).done(function(data) {
     console.log(data);
     console.log('Game created');
     myApp.game = data.game;
   })
    .fail(function(jqxhr) {
     console.error(jqxhr);
     console.log('Sorry, game failed');
   });
};
//count games
let countGames = function() {
  $.ajax({
    url: myApp.baseUrl + '/games',
    type: 'GET',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    // data: {}
  }).done(function(data) {
    $('#countGames').html(data.games.length);
    console.log(data.games.length);
  })
    .fail(function(jqxhr){
    console.error(jqxhr);
  });
};
//update game moves
let updateGame = function(player, index) {
  $.ajax({
      url: myApp.baseUrl + '/games/' + myApp.game.id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + myApp.user.token,
      },
      data: {
        "game": {
          "cell": {
            "index": index,
            "value": player
          },
          "over": false
        }
    }
  })
  .done(function(data){
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
      createGame ();
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
