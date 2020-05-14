/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
var currentScore, roundScore, activePlayer, gamePlaying












function getRandomIntRng(min, max) {
          min = Math.ceil(min)
          max = Math.floor(max)
          return Math.floor(Math.random() * (max - min + 1)) + min
}




init()

function init() {
          scores = [0, 0]
          roundScore = 0
          activePlayer = 0
          gamePlaying = true

          document.getElementById('score-0').textContent = '0'
          document.getElementById('score-1').textContent = '0'
          document.getElementById('current-0').textContent = '0'
          document.getElementById('current-1').textContent = '0'

          document.querySelector('.dice').style.display = 'none'

          document.querySelector('.player-0-panel').classList.remove('winner')
          document.querySelector('.player-1-panel').classList.remove('winner')
          document.querySelector('.player-0-panel').classList.remove('active')
          document.querySelector('.player-1-panel').classList.remove('active')

          document.querySelector('.player-0-panel').classList.add('active')

          document.getElementById('name-0').textContent = 'Player-1'
          document.getElementById('name-1').textContent = 'Player-2'
}




document.querySelector('.btn-roll').addEventListener( 'click', () => {
          if ( gamePlaying ) {
                    console.log( 'btn-roll' )
                    // RANDOM DICE
                    var dice = getRandomIntRng(1, 6)

                    // DISPLAY RESULT
                    var diceDOM = document.querySelector('.dice')
                    diceDOM.style.display = 'block'
                    diceDOM.src = 'dice-' + dice + '.png'

                    // UPDATE ROUND SCORE IF DICE VALUE WAS NOT A 1
                    if (dice !== 1) {
                              // ADD SCORE
                              roundScore += dice
                              document.querySelector('#current-' + activePlayer).textContent = roundScore
                    } else {
                              // NEXT PLAYER
                              nextPlayer()
                    }
          }
})


document.querySelector('.btn-hold').addEventListener('click', () => {
          if ( gamePlaying ) {
                    // STORE SCORES
                    scores[activePlayer] += roundScore

                    // UPDATE SCORES
                    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

                    // CHECK IF PLAYER WON THE GAME
                    if (scores[activePlayer] >= 20) {
                              document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
                              document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
                              document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
                              document.querySelector('.dice').style.display = 'none'
                              gamePlaying = false
                    } else {
                              // NEXT PLAYER
                              nextPlayer()
                    }
          }
})


function nextPlayer() {
          activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
          roundScore = 0

          document.getElementById('current-0').textContent = '0'
          document.getElementById('current-1').textContent = '0'

          document.querySelector('.player-0-panel').classList.toggle('active')
          document.querySelector('.player-1-panel').classList.toggle('active')

          document.querySelector('.dice').style.display = 'none'
}


document.querySelector('.btn-new').addEventListener( 'click', init )*/










/* __________ CHALLENGES
1. A player loses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn (Hint: LAways save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. 
3. Add another dice to the game, so that there are two dices now, The player loses his current score when one of them is a 1. 
*/

var currentScore, roundScore, activePlayer, gamePlaying , lastDice, lastDice2












function getRandomIntRng(min, max) {
          min = Math.ceil(min)
          max = Math.floor(max)
          return Math.floor(Math.random() * (max - min + 1)) + min
}




init()

function init() {
          scores = [0, 0]
          roundScore = 0
          activePlayer = 0
          gamePlaying = true

          document.getElementById('score-0').textContent = '0'
          document.getElementById('score-1').textContent = '0'
          document.getElementById('current-0').textContent = '0'
          document.getElementById('current-1').textContent = '0'

          hideDice()

          document.querySelector('.player-0-panel').classList.remove('winner')
          document.querySelector('.player-1-panel').classList.remove('winner')
          document.querySelector('.player-0-panel').classList.remove('active')
          document.querySelector('.player-1-panel').classList.remove('active')

          document.querySelector('.player-0-panel').classList.add('active')

          document.getElementById('name-0').textContent = 'Player-1'
          document.getElementById('name-1').textContent = 'Player-2'
}




document.querySelector('.btn-roll').addEventListener( 'click', () => {
          if ( gamePlaying ) {
                    // RANDOM DICE
                    var dice = getRandomIntRng(1, 6)
                    var dice2 = getRandomIntRng(1, 6)

                    // DISPLAY RESULT
                    var diceDOM = document.querySelector('.dice')
                    var diceDOM2 = document.querySelector('.dice2')
                    showDice()
                    diceDOM.src = 'dice-' + dice + '.png'
                    diceDOM2.src = 'dice-' + dice2 + '.png'

                    // UPDATE ROUND SCORE IF DICE VALUE WAS NOT A 1
                    if ( lastDice === 6 && dice === 6 || lastDice2 === 6 && dice2 === 6 ) {
                              scores[activePlayer] = 0
                              document.querySelector('#score-' + activePlayer).textContent = 0
                              nextPlayer() 
                    } else if ( dice !== 1 && dice2 !== 1 ) {
                              // ADD SCORE
                              roundScore += dice + dice2
                              document.querySelector('#current-' + activePlayer).textContent = roundScore
                    } else {
                              // NEXT PLAYER
                              nextPlayer()
                    }

                    lastDice = dice
                    lastDice2 = dice2
          }
})


document.querySelector('.btn-hold').addEventListener('click', () => {
          if ( gamePlaying ) {
                    // STORE SCORES
                    scores[activePlayer] += roundScore

                    // UPDATE SCORES
                    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

                    // CHECK IF PLAYER WON THE GAME
                    var input = document.querySelector( '.input' ).value
                    var finalScore
                    if ( input ) {
                              finalScore = input
                    } else {
                              finalScore = 20
                    }

                    if (scores[activePlayer] >= finalScore) {
                              document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
                              document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
                              document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
                              hideDice()
                              gamePlaying = false
                    } else {
                              // NEXT PLAYER
                              nextPlayer()
                    }
          }
})


function nextPlayer() {
          activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
          roundScore = 0

          document.getElementById('current-0').textContent = '0'
          document.getElementById('current-1').textContent = '0'

          document.querySelector('.player-0-panel').classList.toggle('active')
          document.querySelector('.player-1-panel').classList.toggle('active')

          hideDice()
}

function hideDice () {
          document.querySelector('.dice').style.display = 'none'
          document.querySelector('.dice2').style.display = 'none'
}

function showDice () {
          document.querySelector('.dice').style.display = 'block'
          document.querySelector('.dice2').style.display = 'block'
}


document.querySelector('.btn-new').addEventListener( 'click', init )