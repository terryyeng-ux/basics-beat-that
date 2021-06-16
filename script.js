//players will take turns to first roll the dice and move on to choose the dice order
var DICE_ROLL_GAME_MODE = "DICE_ROLL_GAME_MODE";
var DICE_ORDER_GAME_MODE = "DICE_ORDER_GAME_MODE";

//players will start with dice roll game mode first hence it will be our current game mode
var currentGameMode = DICE_ROLL_GAME_MODE;

// player 1 will start first
var currentPlayer = 1;

// set an array for respective players to track their dice rolls
var player1DiceRolls = [];
var player2DiceRolls = [];

var player1DiceOrder = [];
var player2DiceOrder = [];

// random dice generator
var diceRoll = function () {
  return Math.ceil(Math.random() * 6);
};

// function to store dice rolls into player dice rolls array
var diceRolls = function () {
  var randomDiceRolls = [diceRoll(), diceRoll()];
  if (currentPlayer == 1) {
    player1DiceRolls = randomDiceRolls;
  } else {
    player2DiceRolls = randomDiceRolls;
  }
  return randomDiceRolls;
};

var checkWinner = function (player1DiceOrder, player2DiceOrder) {
  if (Number(player1DiceOrder) > Number(player2DiceOrder)) {
    return "Player1";
  } else {
    return "Player2";
  }
};

var main = function (input) {
  if (currentGameMode == DICE_ROLL_GAME_MODE) {
    var randomDiceRolls = diceRolls();
    currentGameMode = DICE_ORDER_GAME_MODE;
    return (
      "Hi Player " +
      currentPlayer +
      "! You rolled " +
      randomDiceRolls[0] +
      " for your 1st dice roll and " +
      randomDiceRolls[1] +
      " for your 2nd dice roll! Please input your preferred order of your dice rolls!"
    );
  }
  if (currentGameMode == DICE_ORDER_GAME_MODE) {
    if (currentPlayer == 1) {
      currentPlayer = 2;
      currentGameMode = DICE_ROLL_GAME_MODE;
      return (
        "Hi Player " +
        currentPlayer +
        "! Please press submit for your dice roll"
      );
    }
  }
  if (currentGameMode == DICE_ROLL_GAME_MODE && currentPlayer == 2) {
    var randomDiceRolls = diceRolls();
    return (
      "Hi Player " +
      currentPlayer +
      "! You rolled " +
      randomDiceRolls[0] +
      " for your 1st dice roll and " +
      randomDiceRolls[1] +
      " for your 2nd dice roll! Please input your preferred order of dice rolls!"
    );
  }

  var winningPlayer = checkWinner(player1DiceOrder, player2DiceOrder);

  if (currentPlayer == 1) {
    player1DiceOrder = player1DiceOrder.push(input);
    console.log(player1DiceOrder);
  }
  if (currentPlayer == 2) {
    player2DiceOrder = player2DiceOrder.push(input);
    console.log(player2DiceOrder);
  }
  console.log(winningPlayer);
  return winningPlayer;
};
