import { sum } from "./sum.js";

const btnSum = document.getElementById("sum");
const spanValue = document.getElementById("value");

btnSum.addEventListener("click", () => {
  let value = parseInt(spanValue.innerText);
  spanValue.innerText = sum(value);
});
