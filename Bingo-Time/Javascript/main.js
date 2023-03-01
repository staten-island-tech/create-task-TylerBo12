import "../Styles/style.css";
import "../Styles/variables.css";
import { DOMSelectors } from "./DOMselectors";
import { bingoCard } from "./array";

let Counter = 35;

const partsOfBingo = {
  generateRandom: function (max) {
    const index = Math.round(Math.random() * max);
    return index;
  },

  removeItems: function (Items) {
    const numbers = document.querySelectorAll(Items);
    const numbersArray = Array.from(numbers);
    numbersArray.forEach((number) => {
      number.remove();
    });
  },

  randomNumber: function () {
    const roll =
      partsOfBingo.noDupes(90) && partsOfBingo.noDupes2(storageArr, 1);
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

  display: function () {
    DOMSelectors.counterContainer.insertAdjacentHTML(
      "beforeend",
      `
         <p class="counter"># of rolls left: ${Counter--}</p>`
    );
    return Counter;
  },

  rollCounter: function () {
    while (Counter <= 35 && Counter > 0) {
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

  noDupes: function (maxNr) {
    let random = (Math.random() * 90).toFixed();
    random = Number(random);
    if (!duplicates.includes(random)) {
      duplicates.push(random);
      return random;
    } else if (duplicates.length < maxNr) {
      //Recursively generate number
      return partsOfBingo.noDupes(maxNr);
    } else {
      console.log("No more numbers available.");
      return false;
    }
  },

  noDupes2: function (Array, n) {
    const output = [];
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * Array.length);
      output.push(Array[randomIndex]);
      Array.splice(randomIndex, 1);
    }
    return output;
  },

  bingoBalls: function () {
    bingoCard.card1.forEach((number) => {
      storageArr.push(partsOfBingo.noDupes(100));
      /* console.log(partsOfBingo.noDupes2(storageArr, 1)); */
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
  partsOfBingo.removeItems(".counter");
  partsOfBingo.rollCounter();
  partsOfBingo.randomNumber();
});

DOMSelectors.generateCard.addEventListener("click", function () {
  partsOfBingo.removeItems(".child");
  partsOfBingo.removeItems(".gameOver");
  storageArr.splice(0, 25);
  duplicates.splice(0, 90);
  partsOfBingo.bingoBalls();
  partsOfBingo.bingoBalls2();
});

/* const tempArr = DOMSelectors.bingoCard.card2; */
const storageArr = [];
const duplicates = [];
console.log(storageArr);

partsOfBingo.bingoBalls();
partsOfBingo.bingoBalls2();
