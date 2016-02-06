# GA WDI Project 1 - Going toe-to-toe in Tic Tac Toe

## Approach

We all know how to play *tic tac toe*. Playing the game is quick and easy, the game logic is intuitive, but to code and render the game was a longer feat. The project required us to use the learnings we have *acquired* in the first 3 weeks of WDI: JavaScript, HTML/CSS, jQuery, Bootstrap/SaSS, JSON, API and AJAX.

To get the project started, I sketched a wireframe of some features of the *tic tac toe* web app that ended up being in the end product.

See here [`assets/images/wireframe.JPG`](wireframe).

Aside from drawing the wireframe, I wrote down the steps of completing a game so after structuring the game in HTML/CSS, I can follow that to code in Javascript, which I had the hardest time creating from scratch.

## User Story

Without signing up, the user can start the game by clicking the cells. It's a 2-player game, so the user can play for *X* and or *O*. The game follows  3-in-a-row/column/diagonal winning logic. The game starts with player X and the game begins.

Winner and Tie at the end of the game will be declared in a message below the title. Message will also be called if the user has clicked on an already occupied game cell. On the bottom, the scoreboard will keep the scores even when user clicks *Restart*, the scores will disappear if the user hit refresh on their browser. However, with AJAX/API requests, the game moves and results of a user, who have signed up and signed into the game, should be tracked stored on the server.

The Tic Tac Toe site can be viewed [here](http://msyao-ga.github.io/tic-tac-toe/).


## Unsolved Problems / To be solved

⋅⋅* To fix errors in AJAX code.
⋅⋅* The *change password* and *log out* buttons should show when the user has signed in and hide before the user has signed in and when the user has logged out.
⋅⋅* To adjust the CSS when the message alert pushes down the game board when it first displays.
⋅⋅* To fix code conflicts in different files.


## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
