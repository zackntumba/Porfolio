const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let index = 0; index < buttonsEl.length; index++) {
  buttonsEl[index].addEventListener("click", () => {
    const buttonValue = buttonsEl[index].textContent;

    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputFieldEl.value = "";
}

function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue) {
  // inputFieldEl.value = inputFieldEl.value + buttonValue;
  inputFieldEl.value += buttonValue;
}
