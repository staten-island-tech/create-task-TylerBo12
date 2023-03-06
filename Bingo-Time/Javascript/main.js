import "../Styles/style.css";
import "../Styles/variables.css";
import { DOMSelectors } from "./DOMselectors";
import { bingoCard } from "./array";

let rN = 0;

const partsOfBingo = {
  removeItems: function (Items) {
    const numbers = document.querySelectorAll(Items);
    const numbersArray = Array.from(numbers);
    numbersArray.forEach((number) => {
      number.remove();
    });
  },

  randomNumber: function () {
    rN = partsOfBingo.noDupes(100) && partsOfBingo.noDupes2(storageArr, 1);
    partsOfBingo.removeItems(".roll");
    DOMSelectors.counterContainer.insertAdjacentHTML(
      "beforeend",
      `<p class = "roll">Your Roll: ${rN}</p>`
    );
    console.log(rN);
  },

  display: function () {
    DOMSelectors.counterContainer.insertAdjacentHTML(
      "beforeend",
      `
         <p class="counter"># of rolls left: ${Counter--}</p>`
    );
    return Counter;
  },

  rollCounter: function (rollsLeft) {
    while (rollsLeft <= 25 && rollsLeft > -1) {
      partsOfBingo.removeItems(".counter");
      partsOfBingo.display();
      return rollsLeft;
    }
    if (rollsLeft < 1) {
      partsOfBingo.removeItems(".child");
      partsOfBingo.removeItems(".gameOver");
      DOMSelectors.parent.insertAdjacentHTML(
        "beforeend",
        `<p class = "gameOver">Game Over :(</p> <p class = "tryAgain">(To try again refresh the page)</p>`
      );
    }
  },

  noDupes: function (maxNr) {
    let random = Math.round(Math.random() * 90);
    if (!duplicates.includes(random)) {
      duplicates.push(random);
      return random;
    } else if (duplicates.length < maxNr) {
      return partsOfBingo.noDupes(maxNr);
    } else if (Counter < 0) {
    }
  },

  noDupes2: function (Array, n) {
    const output = [];
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.round(Math.random() * Array.length);
      output.push(Array[randomIndex]);
      Array.splice(randomIndex, 1);
    }
    if (Counter < 0) {
    }
    return output;
  },

  bingoBalls: function () {
    bingoCard.card1.forEach((number) => {
      storageArr.push(partsOfBingo.noDupes(100000));
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
};

DOMSelectors.pickNumber.addEventListener("click", function () {
  partsOfBingo.removeItems(".gameOver");
  partsOfBingo.removeItems(".tryAgain");
  partsOfBingo.rollCounter(Counter);
  partsOfBingo.randomNumber();
});

DOMSelectors.generateCard.addEventListener("click", function () {
  partsOfBingo.removeItems(".child");
  storageArr.splice(0, 25);
  duplicates.splice(0, 90);
  partsOfBingo.bingoBalls();
  partsOfBingo.bingoBalls2();
  console.log(storageArr);
});

let Counter = 24;
const storageArr = [];
const duplicates = [];

console.log(rN);
partsOfBingo.bingoBalls();
partsOfBingo.bingoBalls2();
