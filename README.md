# GA WDI Project 1 - Going toe-to-toe in Tic Tac Toe

## Approach

We all know how to play *tic tac toe*. Playing the game is quick and easy, the game logic is intuitive, but to code and render the game was a longer feat. The project required us to use the learnings we have *acquired* in the first 3 weeks of WDI: JavaScript, HTML/CSS, jQuery, Bootstrap/SaSS, JSON, API and AJAX.

To get the project started, I sketched a wireframe of some features of the *tic tac toe* web app that ended up being in the end product.

See here [`assets/images/wireframe.JPG`](wireframe).

Aside from drawing the wireframe, I wrote down the game logic so after structuring the game in HTML/CSS, I can follow that to code in Javascript, which was the coding language I had the hardest time creating.

## User Story

Without signing up, the user can start the game by clicking the cells. It's a 2-player game, so the user can play for *X* and or *O*. The game follows 3 in a row/column/diagonal winning logic. Winner and Tie at the end of the game will be declared in a message below the title. Message will also be called if the user has clicked on an already occupied game cell. On the bottom, the scoreboard will track the scores unless the user hit refresh on their browser. If the user signs up and signs into the game, the game is suppose to log the moves and the results with AJAX JSON requests.


## Unsolved Problems

API/AJAX
- Some requests not fulfilled and led to errors.
- The *change password* and *log out* should be hidden until the user has signed in.

HTML/CSS/JS
- The message alert pushes down the game board when it first displays.
- With the my code, I was not able to figure out how to use (append, replace? jQuery) images instead of letters "X" and "O". But that's an extraneous thing I plan to figure out.


## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
