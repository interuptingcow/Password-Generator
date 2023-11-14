// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
  var passwordLength = prompt("How long would you like your password to be? Choose between 8 and 128");
  var passwordLowerCase = confirm("Would you like to include lowercase letters?");
  var passwordUpperCase = confirm("Would you like to include uppercase letters?");
  var passwordNumbers = confirm("Would you like to include numbers?")
  var passwordSpecialCharacters = confirm("Would you like to include special characters?");
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
