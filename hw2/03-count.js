// Add your code here

// Select the different elements
const input = document.getElementById("userInput");
const textContainer = document.getElementById("textContainer");
// Save the text
const text = textContainer.textContent;

// Function to for when the user type anything
const handleKeyUp = (event) => {
  event.preventDefault();
  highlightMatches();
};

// Function to highlight matching words
const highlightMatches = () => {
  // Remove any white space
  const query = input.value.trim();
  if (query) {
    // Create a search
    const regularExpression = new RegExp(`\\b(${query})\\b`, "gi");
    // Highlights the matches
    const highlightedText = text.replace(
      regularExpression,
      '<span style="background-color: yellow;">$1</span>'
    );
    textContainer.innerHTML = highlightedText;
  } else {
    // Reset to the original text
    textContainer.innerHTML = text;
  }
};

input.addEventListener("keyup", handleKeyUp);
