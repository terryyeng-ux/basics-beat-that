// Determine the different game modes first
var DICE_ROLL = "DICE_ROLL";
var DICE_ORDER = "DICE_ORDER";
var WINNER = "CHECK_WINNER";

// Game will first be dice roll before moving onto dice order
var currentGameMode = DICE_ROLL;

// Player 1 starts first before player 2 will play
var currentPlayer = 1;

// After player rolls the dice, we will have to log down their respective rolls in array form
var player1DiceRolls = [];
var player2DiceRolls = [];

// After rolling, they will select their dice order and we will keep track of their dice orders
var player1DiceOrder;
var player2DiceOrder;

var diceRoll = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger;
  return diceNumber;
};

var diceRolls = function () {
  var randomDiceRolls = [diceRoll(), diceRoll()];

  if (currentPlayer == 1) {
    player1DiceRolls = randomDiceRolls;
  } else {
    player2DiceRolls = randomDiceRolls;
  }
  return randomDiceRolls;
};

var main = function (input) {
  var beatThatWinner;

  if (currentGameMode == DICE_ROLL) {
    var randomDiceRolls = diceRolls();

    currentGameMode = DICE_ORDER;

    return (
      "Hi Player " +
      currentPlayer +
      ". You rolled Dice 1: " +
      randomDiceRolls[0] +
      " and Dice 2: " +
      randomDiceRolls[1] +
      ". Choose the order of the dice numbers by entering into the input box!"
    );
  }

  if (currentGameMode == DICE_ORDER) {
    player1DiceOrder = input;
    console.log(player1DiceOrder);

    if (currentPlayer == 1) {
      currentPlayer = 2;
      currentGameMode = DICE_ROLL;
      return (
        "Hi Player " +
        currentPlayer +
        "! Please press submit to roll your dice!"
      );
    }

    if (currentGameMode == DICE_ROLL) {
      var randomDiceRolls = diceRolls();

      currentGameMode = DICE_ORDER;

      return (
        "Hi Player " +
        currentPlayer +
        ". You rolled Dice 1: " +
        randomDiceRolls[0] +
        " and Dice 2: " +
        randomDiceRolls[1] +
        ". Choose the order of the dice numbers by entering into the input box!"
      );
    }
    if (currentGameMode == DICE_ORDER) {
      player2DiceOrder = input;
      currentGameMode = WINNER;
      console.log(player2DiceOrder);
    } else if (currentGameMode == WINNER) {
      var beatThatWinner = checkWinner();
      console.log(beatThatWinner);
      if (beatThatWinner == "Player1") {
        return "Player 1 wins!";
      } else {
        return "Player 2 wins!";
      }
    }
  }
};

var checkWinner = function (player1DiceOrder, player2DiceOrder) {
  if (player1DiceOrder > player2DiceOrder) {
    return "Player1";
  } else {
    return "Player2";
  }
};
