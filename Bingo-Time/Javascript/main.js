import "../Styles/style.css";
import "../Styles/variables.css";
import { DOMSelectors } from "./DOMselectors";
import { bingoCard } from "./array";

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
    /* console.log(randomInteger); */
    return randomInteger;
  },

  randomNumber: function () {
    const roll = partsOfBingo.generateRandom(90);
    console.log(roll);
    if (roll === partsOfBingo.generateRandom(90)) {
      alert("Hello");
    }
  },

  noDupes: function () {
    if (partsOfBingo.generateRandom(90) === 1) {
      this.removeNumbers();
    }
  },

  removeNumbers: function () {
    const numbers = document.querySelectorAll(".child");
    const numbersArray = Array.from(numbers);
    numbersArray.forEach((number) => {
      number.remove();
    });
  },
};

partsOfBingo.randomNumber();
partsOfBingo.bingoBalls();
partsOfBingo.noDupes();
