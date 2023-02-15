import "../Styles/style.css";
import "../Styles/variables.css";
import { DOMSelectors } from "./DOMselectors";
import { bingoCard } from "./array";

const bingoBalls = function () {
  bingoCard.card1.forEach((number) => {
    DOMSelectors.parent.insertAdjacentHTML(
      "beforeend",
      '<sub class="child">1</sub>'
    );
  });
};

bingoBalls();
