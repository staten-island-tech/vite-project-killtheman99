import "../styles/style.css";
import t from "./themes.js";

const DOM = {
  root = document.documentElement
}
function changetheme(theme) {
  let keys1 = theme.keys();
  keys1.forEach(element => {
    root.setProperty(element, theme[element])
  });
}
changetheme(t["light"])