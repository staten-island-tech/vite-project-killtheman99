import "../styles/style.css";
import { t } from "./themes.js";
import { p } from "./array.js";

const DOM = {
  root: document.documentElement,
  button: document.getElementById("btn"),
  container: document.getElementById("container"),
  checkbox: document.getElementById("checkbox"),
  checkbox2: document.getElementById("checkbox2"),
  checkbox3: document.getElementById("checkbox3"),
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

function makecard() {
  document.getElementById("pokemon").innerHTML = "";
  p.forEach((pokemon) => {
    document.getElementById("pokemon").insertAdjacentHTML(
      "beforeend",
      `<div class="flexlr" id=${pokemon.name}>
        <img class="w-image" src="${pokemon.img}"/> </div>`
    );
  });
}
makecard();

// function buildBoard() {
//   p.filter(
//     (element) =>
//       element.img &&
//       (!flyFilter || element.includes("flying")) &&
//       (!waterFilter || element.includes("water"))
//   ).forEach((element) =>
//     DOM.container.insertAdjacentHTML(
//       "beforeend",
//       `<div>
//         <div class="flexlr">
//           <img class="image" src=${element.img}>
//           <div>
//             <h3 class="Name">${element.name.english}</h3>
//             <h4>Type: ${element.type}</h4>
//           </div>
//         </div>

//       </div>`
//     )
//   );
// }
// buildBoard();

// DOM.checkbox.addEventListener("click", function () {
//   DOM.container.innerHTML = "";
//   waterFilter = !waterFilter;
//   buildBoard();
// });
// DOM.checkbox2.addEventListener("click", function () {
//   DOM.container.innerHTML = "";
//   flyFilter = !flyFilter;
//   buildBoard();
// });
// DOM.checkbox3.addEventListener("click", function () {
//   DOM.container.innerHTML = "";
//   filterArray.length = 1;
//   buildBoard();
// });
