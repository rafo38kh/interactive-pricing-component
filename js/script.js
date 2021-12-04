const slider = document.querySelector("#input");
const checkbox = document.querySelector(".js-checkbox");
const view = document.querySelector(".js-views");
const price = document.querySelector(".js-price");
const discount = document.querySelector(".js-discount");
const button = document.querySelector(".js-button");

console.log(checkbox.checked === false);

const pageviews = ["10K", "50K", "100K", "500K", "1M"];
const dollar = [8, 12, 16, 24, 36];

const changeColor = () => {
  slider.addEventListener("input", () => {
    let value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    let color = `linear-gradient(90deg,
          rgb(165, 243, 235) ${value}%,
          rgb(205, 215, 238) ${value}%)`;
    slider.style.backgroundImage = color;
  });
};

const calculate = () => {
  slider.addEventListener("input", () => {
    view.textContent = pageviews[slider.value - 1];
    price.textContent = `$${dollar[slider.value - 1]}.00`;
  });
};

const sale = () => {
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      discount.textContent = `-${discount.textContent}`;
      price.textContent = `$${dollar[slider.value - 1] / 2}.00`;
    } else {
      price.textContent = `$${dollar[slider.value - 1]}.00`;
    }
  });
};

const reset = () => {
  slider.value = 3;
  view.textContent = pageviews[slider.value - 1];
  price.textContent = `$${dollar[slider.value - 1]}.00`;
  let value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  let color = `linear-gradient(90deg,
          rgb(165, 243, 235) ${value}%,
          rgb(205, 215, 238) ${value}%)`;
  slider.style.backgroundImage = color;
  checkbox.checked = false;
};

button.addEventListener("click", () => {
  reset();
});

changeColor();
calculate();
sale();
reset();
