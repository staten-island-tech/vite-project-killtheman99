import "../styles/style.css";
import { t } from "./themes.js";
import { p } from "./array.js";

const DOM = {
  root: document.documentElement,
  button: document.getElementById("btn"),
  container: document.getElementById("container"),
};
function changetheme(theme) {
  let keys1 = Object.keys(theme);
  keys1.forEach((element) => {
    DOM.root.style.setProperty(element, theme[element]);
  });
}
changetheme(t.dark);
let theme = "dark";
DOM.button.addEventListener("click", function () {
  if (theme === "dark") {
    changetheme(t.light);
    theme = "light";
  } else {
    changetheme(t.dark);
    theme = "dark";
  }
});
p.filter((element) => element.img).forEach((element) =>
  DOM.container.insertAdjacentHTML(
    "beforeend",
    `<div>
      <div class="flexlr">

    <img src=${element.img}>
    <p1>Milotic</p1>
    </div>
    </div>`
  )
);
