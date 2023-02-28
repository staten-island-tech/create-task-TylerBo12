import "../Styles/style.css";
import "../Styles/variables.css";
import { DOMSelectors } from "./DOMselectors";
import { bingoCard } from "./array";

let Counter = 25;

const partsOfBingo = {
  bingoBalls: function () {
    bingoCard.card1.forEach((number) => {
      storageArr.push(partsOfBingo.generateRandom(20));
    });
  },

  bingoBalls2: function () {
    storageArr.forEach((number) => {
      DOMSelectors.parent.insertAdjacentHTML(
        "beforeend",
        `<p class="child">${number}</p>`
      );
    });
  },

  promises: function (Time) {
    new Promise((resolveFirst) => {
      setTimeout(resolveFirst, Time);
    });
  },

  generateRandom: function (max) {
    const index = Math.round(Math.random() * max);
    return index;
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
    const roll = partsOfBingo.generateRandom(20);
    partsOfBingo.removeItems(".roll");
    DOMSelectors.counterContainer.insertAdjacentHTML(
      "beforeend",
      `<p class = "roll">Your Roll: ${roll}</p>`
    );
    console.log(roll);
    if (roll === storageArr) {
      console.log("pain");
      partsOfBingo.removeItems(".child");
    }
  },

  noDupes: function () {
    const duplicates = [];
    random = Number(random)
    if(duplicates.includes())
  },

  rollCounter: function () {
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
  partsOfBingo.removeItems(".gameOver");
  storageArr.splice(0, 25);
  partsOfBingo.bingoBalls();
  partsOfBingo.bingoBalls2();
});

const storageArr = [];
const uniques = new Set(storageArr);
console.log(uniques);
partsOfBingo.bingoBalls();
partsOfBingo.bingoBalls2();
