const slider = document.querySelector("#input");
const checkbox = document.querySelector(".js-checkbox");
const view = document.querySelector(".js-views");
const price = document.querySelector(".js-price");
const discount = document.querySelector(".js-discount");
const button = document.querySelector(".js-button");

const pageviews = ["10K", "50K", "100K", "500K", "1M"];
const dollar = [8, 12, 16, 24, 36];
const dollarSale = dollar.slice().map((el) => el - el * 0.25);

const changeColor = function () {
  let value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  let color = `linear-gradient(90deg,
          rgb(165, 243, 235) ${value}%,
          rgb(205, 215, 238) ${value}%)`;
  slider.style.backgroundImage = color;
};

const calculate = function () {
  view.textContent = pageviews[slider.value - 1];
  price.textContent = isChecked
    ? `$${dollar[slider.value - 1] - dollar[slider.value - 1] * 0.25}.00`
    : `$${dollar[slider.value - 1]}.00`;
};

let isChecked = false;

const sale = function () {
  if (checkbox.checked) {
    isChecked = true;
    price.textContent = `$${
      dollar[slider.value - 1] - dollar[slider.value - 1] * 0.25
    }.00`;
  } else {
    isChecked = false;
    price.textContent = `$${dollar[slider.value - 1]}.00`;
  }
};

const reset = function () {
  isChecked = false;
  slider.value = 3;
  view.textContent = pageviews[slider.value - 1];
  price.textContent = `$${dollar[slider.value - 1]}.00`;
  let color = `linear-gradient(90deg,
          rgb(165, 243, 235) 50%,
          rgb(205, 215, 238) 50%)`;
  slider.style.backgroundImage = color;
  checkbox.checked = false;
};

button.addEventListener("click", reset);
slider.addEventListener("input", calculate);
slider.addEventListener("input", changeColor);
checkbox.addEventListener("click", sale);
window.addEventListener("load", reset);
