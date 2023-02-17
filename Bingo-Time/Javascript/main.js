import "../Styles/style.css";
import "../Styles/variables.css";
import { DOMSelectors } from "./DOMselectors";
import { bingoCard } from "./array";

let Counter = 25;

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
      partsOfBingo.removeNumbers();
    }
  },

  rollCounter: function () {
    console.log(Counter);
    while (Counter <= 25 && Counter > 0) {
      partsOfBingo.display();
      return Counter;
    }
    if ((Counter = 0)) {
      const parent = document.querySelector("#parent");
      parent.remove();
      console.log();
    }
  },

  display: function () {
    DOMSelectors.buttonContainer.insertAdjacentHTML(
      "beforeend",
      `
         <p class="counter">${Counter--}</p>`
    );
    return Counter;
  },

  removeNumbers: function () {
    const numbers = document.querySelectorAll(".counter");
    const numbersArray = Array.from(numbers);
    numbersArray.forEach((number) => {
      number.remove();
    });
  },
};

DOMSelectors.pickNumber.addEventListener("click", function () {
  partsOfBingo.removeNumbers();
  partsOfBingo.rollCounter();
});

partsOfBingo.randomNumber();
partsOfBingo.bingoBalls();
partsOfBingo.noDupes();
partsOfBingo.rollCounter();
