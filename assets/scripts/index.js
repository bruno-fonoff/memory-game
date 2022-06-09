console.log("Salve!");
const gameBoard = document.getElementById("game-board");
const startBtn = document.getElementById("start");

const game = new Game(gameBoard);

startBtn.addEventListener("click", () => {
  game.boardGenerator();
  console.log(game.cardsCover);

  for (let i = 0; i < game.cardsCover.length; i++) {
    game.gameBoard.appendChild(game.cardsCover[i]);
  }

  game.setUncoverCards();
  console.log(game.cardsUncover);

  for (let i = 0; i < game.cardsCover.length; i++) {
    game.cardsCover[i].addEventListener("click", () => {
      console.log("Ta rolando!");
      game.flipCard(game.cardsCover[i], i);
    });
  }

  startBtn.setAttribute("disabled", true);
});
