// Add your code here

// Set up variables
let intervalID;
let isRunning = false;
const defaultInterval = 3000;
const intervalInput = document.getElementById("interval");
const toggleButton = document.getElementById("toggle");
const errorMessage = document.getElementById("errorMessage");

// Function to generate random color
const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random() * 0.5 + 0.5;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

// Function to change background color
const changeBackgroundColor = () => {
  document.body.style.backgroundColor = getRandomColor();
};

// Toggle function
const toggleColorChange = () => {
  errorMessage.classList.add("visually-hidden");
  if (intervalInput.value < 1) {
    errorMessage.classList.remove("visually-hidden");
  } else {
    if (isRunning) {
      clearInterval(intervalID);
      isRunning = false;
      toggleButton.textContent = "Start";
      toggleButton.classList.remove("btn-danger");
      toggleButton.classList.add("btn-primary");
    } else {
      const intervalTime = Math.max(
        1000,
        intervalInput.value * 1000 || defaultInterval
      );
      intervalID = setInterval(changeBackgroundColor, intervalTime);
      isRunning = true;
      toggleButton.textContent = "Stop";
      toggleButton.classList.remove("btn-primary");
      toggleButton.classList.add("btn-danger");
    }
  }
};

toggleButton.addEventListener("click", toggleColorChange);

window.onload = () => {
  changeBackgroundColor();
};
