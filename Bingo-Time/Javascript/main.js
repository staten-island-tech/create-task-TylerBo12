import "../Styles/style.css";
import "../Styles/variables.css";
import { DOMSelectors } from "./DOMselectors";
import { bingoCard } from "./array";

let Counter = 5;

const partsOfBingo = {
  bingoBalls: function () {
    bingoCard.card1.forEach((number) => {
      DOMSelectors.parent.insertAdjacentHTML(
        "beforeend",
        `<sub class="child">${partsOfBingo.generateRandom(90)}</sub>`
      );
    });
  },

  generateRandom: function (max) {
    const randomInteger = Math.floor(Math.random() * max);
    return randomInteger;
  },

  display: function () {
    DOMSelectors.counterContainer.insertAdjacentHTML(
      "beforeend",
      `
         <p class="counter"># of rolls left: ${Counter--}</p>`
    );
    return Counter;
  },

  randomNumber: function () {
    const roll = partsOfBingo.generateRandom(90);
    partsOfBingo.removeItems(".roll");
    DOMSelectors.counterContainer.insertAdjacentHTML(
      "beforeend",
      `<p class = "roll">Your Roll: ${roll}</p>`
    );
  },

  noDupes: function () {
    if (partsOfBingo.generateRandom(90) === 1) {
      partsOfBingo.removeItems();
    }
  },

  rollCounter: function () {
    console.log(Counter);
    while (Counter <= 25 && Counter > 0) {
      partsOfBingo.display();
      return Counter;
    }
    if (Counter === 0) {
      partsOfBingo.removeItems(".child");
      partsOfBingo.removeItems(".gameOver");
      DOMSelectors.parent.insertAdjacentHTML(
        "beforeend",
        `<p class = "gameOver">Game Over :(</p>`
      );
    }
  },

  removeItems: function (Items) {
    const numbers = document.querySelectorAll(Items);
    const numbersArray = Array.from(numbers);
    numbersArray.forEach((number) => {
      number.remove();
    });
  },
};

DOMSelectors.pickNumber.addEventListener("click", function () {
  partsOfBingo.removeItems(".counter");
  partsOfBingo.rollCounter();
  partsOfBingo.randomNumber();
});

DOMSelectors.generateCard.addEventListener("click", function () {
  partsOfBingo.removeItems(".child");
  partsOfBingo.bingoBalls();
  partsOfBingo.noDupes();
});

partsOfBingo.bingoBalls();
