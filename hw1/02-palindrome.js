const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);

function handleInput() {
  const inputValue = elem.value;
  const errorMessage = document.querySelector("#errorMessage");
  const resultMessage = document.querySelector("#resultMessage");

  // Clear all messages
  errorMessage.textContent = "";
  resultMessage.textContent = "";

  // Check for invalid number
  if (inputValue === "") {
    errorMessage.textContent = "Enter a positive number.";
    resultMessage.textContent = "";
    return;
  }

  // Check for invalid number
  if (isNaN(inputValue)) {
    errorMessage.textContent = "Invalid number. Try again.";
    resultMessage.textContent = "";
    return;
  }

  // Check for negative number
  const num = parseFloat(inputValue, 10);
  if (num < 0) {
    errorMessage.textContent = "Negative number. Try again.";
    resultMessage.textContent = "";
    return;
  }

  // Check for non-integer
  if (inputValue.includes(".")) {
    errorMessage.textContent = "Number must be an integer. Try again.";
    resultMessage.textContent = "";
    return;
  }

  // Check to see if the value is a palindrome
  const reversedValue = inputValue.split("").reverse().join("");
  if (inputValue === reversedValue) {
    resultMessage.textContent = "Yes. This is a palindrome!";
    resultMessage.classList.add("text-success");
    resultMessage.classList.remove("text-danger");
  } else {
    resultMessage.textContent = "No. Try again.";
    resultMessage.classList.add("text-danger");
    resultMessage.classList.remove("text-success");
  }
}
