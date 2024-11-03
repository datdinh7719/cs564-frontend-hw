// Add your code here

// Selecting different elements
const userInput = document.getElementById("userInput");
const searchButton = document.querySelector("button");
const resultsSection = document.getElementById("results");
const noMatchCard = document.getElementById("noMatch");

// A function to create a card element
const createCharacterCard = (character) => {
  const card = document.createElement("div");
  card.className = "character-card card m-2";
  card.style.width = "12rem";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = character.name;

  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = `Birth Year: ${character.birth_year}`;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  card.appendChild(cardBody);

  return card;
};

// A function to remove all cards
const removeAllCharacterCards = () => {
  const allCards = document.querySelectorAll(".character-card");
  allCards.forEach((card) => {
    resultsSection.removeChild(card);
  });
};

// Function to handle the search
const handleSearch = () => {
  // Change user input to lowercase
  const query = userInput.value.toLowerCase();
  // Clear previous result and hide the No Match card by default
  removeAllCharacterCards();
  noMatchCard.classList.add("visually-hidden");

  // Filter the characters, making it case-insensitive
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(query)
  );

  // Check for match, return no match if the user entered nothing or just a space
  if (filteredCharacters.length === 0 || query === "" || query === " ") {
    noMatchCard.classList.remove("visually-hidden");
  } else {
    filteredCharacters.forEach((character) => {
      const characterCard = createCharacterCard(character);
      resultsSection.appendChild(characterCard);
    });
  }
};

searchButton.addEventListener("click", handleSearch);

// Prevent default behavior that submit the input when pressing Enter in the input field
userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handleSearch();
  }
});
