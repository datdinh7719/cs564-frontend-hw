// Add your code here

// Set up variables
const form = document.getElementById("inputForm");
const modalBody = document.getElementById("modalBody");
const userModal = new bootstrap.Modal(document.getElementById("userModal"));

// Function to display user input in the modal
const displayUserInput = (event) => {
  event.preventDefault();

  // Gather user input
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const registration = document.getElementById("registration").value;

  // Gather checkbox values
  const programmingLanguages = document.getElementById(
    "programmingLanguages"
  ).checked;
  const operatingSystems = document.getElementById("operatingSystems").checked;
  const fullStack = document.getElementById("fullStack").checked;

  // Create an array to hold the selected courses
  const coursesTaken = [];
  if (programmingLanguages) coursesTaken.push("Programming Languages");
  if (operatingSystems) coursesTaken.push("Operating Systems");
  if (fullStack) coursesTaken.push("Full Stack Web Development");
  const courseStatus =
    coursesTaken.length > 0 ? coursesTaken.join(", ") : "None";

  // Gather additional info
  const additionalInfo = document.getElementById("additionalInfo").value;

  // Create modal body content
  modalBody.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Registration Status:</strong> ${registration}</p>
      <p><strong>Courses Taken:</strong> ${courseStatus}</p>
      <p><strong>Additional Information:</strong> ${additionalInfo}</p>
    `;

  userModal.show();
};

form.addEventListener("submit", displayUserInput);
