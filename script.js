// Assignment Code
// var generateBtn = document.querySelector("#generate");
// var pLength = "";
// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
  // var pLength = prompt("How long would you like your password to be? Choose between 8 and 128");
  // var pLCase = confirm("Would you like to include lowercase letters?");
  // var pUCase = confirm("Would you like to include uppercase letters?");
  // var pNum = confirm("Would you like to include numbers?")
  // var pSpecChars = confirm("Would you like to include special characters?");
  
//   function getRandomInt(pLength) {
//     return Math.floor(Math.random() * pLength);
    
// }
  
//    if (pLCase === "true" && pUCase === "false" && pNum === "false" && pSpecChars === "false") {
//     var pOption1 = "abcdefghijklmnopqrstuvwxyz".split("");
//     console.log (pOption1);
//    }
//   var pOption2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

//   var pOption3 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

//   var pOption4 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*".split("")

// }
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
// console.log(pLength);
// var pLCase = confirm("Would you like to include lowercase letters?");
// var passBank = "v";

// if (pLCase === "true") {
//   passBank += "abcdefghijklmnopqrstuvwxyz";
//   console.log(passBank);
// }


var pLength = prompt("How long would you like your password to be? Choose between 8 and 128");
var pLCase = confirm("Would you like to include lowercase letters?");
var pUCase = confirm("Would you like to include uppercase letters?");
var pNum = confirm("Would you like to include numbers?");
var pSpecChars = confirm("Would you like to include special characters?");

console.log(pLength, pLCase, pUCase, pNum, pSpecChars);
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "1234567890";
const specialChars = "!@#$%^&*+-";
var password = [""]
var passBank = [""];

  if (pLCase) {
    passBank += lowercaseChars;
 };

  if (pUCase) {
    passBank += uppercaseChars;
  };

  if (pNum) {
    passBank += numberChars;
  };

  if (pSpecChars) {
    passBank += specialChars;
  };

console.log(passBank);

let i = 0
while (i < pLength) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  var passChar = passBank[getRandomInt(passBank.length)];
  password += passChar;

  i++
}
console.log(password);