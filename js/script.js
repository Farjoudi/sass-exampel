const increaseButtonEl = document.querySelector(".conter-button-increase");
const decreaseButtonEl = document.querySelector(".conter-button-decrease");
const counterValuesEl = document.querySelector(".conter-count");
const resetButtonEl = document.querySelector(".conter-icone-reset");
const counterEl = document.querySelector(".conter");
function addCounterIncrease() {
  const curentValues = counterValuesEl.textContent;
  let curentValuesAsNumber = +curentValues;
  if (curentValuesAsNumber < 20) {
    const increaseCounterValues = curentValuesAsNumber + 1;
    counterValuesEl.textContent = increaseCounterValues;
  } else {
    curentValuesAsNumber = 20;
    counterEl.classList.add("conter-limit");
    counterEl = alert("dadash koja miri ????");
  }
}

function removeCounterDecrease() {
  const curentValues = counterValuesEl.textContent;
  const curentValuesAsNumber = +curentValues;

  if (curentValuesAsNumber > 0) {
    let decreaseCounterValues = curentValuesAsNumber - 1;
    counterValuesEl.textContent = decreaseCounterValues;
  } else {
    curentValuesAsNumber = 0;
  }
}
increaseButtonEl.addEventListener("click", addCounterIncrease);
document.addEventListener("keydown", addCounterIncrease);
decreaseButtonEl.addEventListener("click", removeCounterDecrease);

resetButtonEl.addEventListener("click", function () {
  counterValuesEl.textContent = 0;
  counterEl.classList.remove("conter-limit");
});


//    <i class="fa-solid fa-skull"></i>;