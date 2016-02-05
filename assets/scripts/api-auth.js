'use strict';

//const below lets you edit the home url in one place instead of inside each form. You can use as part of a path to change values
//This script works with index.html
const myApp = {
  baseUrl: 'http://tic-tac-toe.wdibos.com',
};
// Create game state
const createGame = function() {
   $.ajax({
     url: myApp.baseUrl + '/games',
     headers: {
       Authorization: 'Token token=' + myApp.user.token,
     },
     method: 'POST',
     data: {}
   }).done(function(data) {
     console.log(data);
     console.log('Game created');
     myApp.game = data.game;
   }).fail(function(jqxhr) {
     console.error(jqxhr);
     console.log('Sorry, game failed');

   });
};

// get all games associated with a user
const getGames = function() {
  $.ajax({
    url: myApp.baseUrl + '/games' + myApp.game.id,
    type: 'GET',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    data: {}
  }).done(function(data) {
    myApp.game = data.game;
    $('.games').html(data.games.length);
    console.log(myApp.game);

  }).fail(function(requestObject){
    console.error(requestObject);
  });
};

// updates the server of player moves
const saveGame = function($boxId) {
  let gameActive;
  if (gameStatus === "inactive") {
    gameActive = true;
  } else {
    gameActive = false;
  }
  console.log("trying to update server with move");
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
          "value": move(),
        },
        "over": gameActive
      }
    }
  })
  .done(function(data) {
    console.log('turn submitted');
    myApp.game = data.game;
  }).fail(function(jqxhr) {
    console.error(jqxhr);
    console.log("update to server failed");
  });
};

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
