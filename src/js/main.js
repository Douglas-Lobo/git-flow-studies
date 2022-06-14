import { sum } from "./sum.js";
import { sub } from "./sub.js";

const btnSum = document.getElementById("sum");
const btnSub = document.getElementById("sub");
const spanSum = document.getElementById("valueSum");
const spanSub = document.getElementById("valueSub");

btnSum.addEventListener("click", () => {
  let value = parseInt(spanSum.innerText);
  spanSum.innerText = sum(value);
});

btnSub.addEventListener("click", () => {
  let value = parseInt(spanSub.innerText);
  spanSub.innerText = sub(value);
});
