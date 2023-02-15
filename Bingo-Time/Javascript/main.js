import "../Styles/style.css";
import { DOMSelectors } from "./DOMselectors";
import { bingoCard } from "./array";

const bingoBalls = function () {
  bingoCard.forEach((card) => {
    card.forEach((number) => {
      DOMSelectors.parent.insertAdjacentHTML(
        "beforeend",
        '<div id="parent"><sub class="child"></sub></div>'
      );
    });
  });
};

bingoBalls();
