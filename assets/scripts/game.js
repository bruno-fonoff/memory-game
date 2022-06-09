class Game {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
    this.backCardSrc = "./assets/images/background-card.jpg";
    this.cards = [
      "./assets/images/meme1.jpg",
      "./assets/images/meme2.jpg",
      "./assets/images/meme3.jpg",
    ];
    this.cardsCover = [];
    this.cardsUncover = [];
  }

  boardGenerator() {
    for (let i = 0; i < 6; i++) {
      const image = document.createElement("img");
      image.setAttribute("src", this.backCardSrc);
      this.cardsCover.push(image);
    }
  }

  setUncoverCards() {
    this.cardsUncover = [...this.cards, ...this.cards];
  }

  flipCard(image, index) {
    image.setAttribute("src", this.cardsUncover[index]);
  }
}
