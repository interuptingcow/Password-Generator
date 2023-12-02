// Define character sets for different types of characters
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "1234567890";
const specialChars = "!@#$%^&*+-";

// Initialize an array to store the password bank
var passBank = [""];

// Get the button element with the id "generate"
var generateBtn = document.querySelector("#generate");

// Function to write the password to the HTML page
function writePassword() {

  // Prompt the user for the desired password length
  let pLength = prompt("How long would you like your password to be? Choose between 8 and 128");

  // Convert the user input to a number
  pLength = parseInt(pLength);

  // Validate the user input for password length
  while (pLength < 8 || pLength > 128 || isNaN(pLength)) {
    pLength = prompt("Invalid response. Please pick a number between 8 and 128.");
    pLength = parseInt(pLength);
  }

  // Confirm the inclusion of different types of characters
  const pLCase = confirm("Would you like to include lowercase letters?");
  const pUCase = confirm("Would you like to include uppercase letters?");
  const pNum = confirm("Would you like to include numbers?");
  const pSpecChars = confirm("Would you like to include special characters?");

  // Initialize an array to store the generated password
  var password = [""];

  // Log the user's choices to the console
  console.log(pLength, pLCase, pUCase, pNum, pSpecChars);

  // Build the password bank based on user choices
  if (pLCase) {
    passBank += lowercaseChars;
  }

  if (pUCase) {
    passBank += uppercaseChars;
  }

  if (pNum) {
    passBank += numberChars;
  }

  if (pSpecChars) {
    passBank += specialChars;
  }

  // Generate the password by randomly selecting characters from the password bank
  let i = 0;
  while (i < pLength) {
    // Function to get a random integer within the length of the password bank
    function getRandomInt(pLength) {
      return Math.floor(Math.random() * pLength);
    }

    // Get a random character from the password bank
    var passChar = passBank[getRandomInt(passBank.length)];
    password += passChar;
    i++;
  }

  // Log the generated password to the console
  console.log(password);

  // Replace the content of the HTML element with the generated password
  let str = document.getElementById("password").innerHTML;
  let res = str.replace("", password);
  document.getElementById("password").innerHTML = res;
}

// Add a click event listener to the "Generate Password" button
generateBtn.addEventListener("click", writePassword);