// Assignment Code

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "1234567890";
const specialChars = "!@#$%^&*+-";
var passBank = [""];
var generateBtn = document.querySelector("#generate")

function writePassword() {

  let pLength = prompt("How long would you like your password to be? Choose between 8 and 128");
  pLength = parseInt(pLength);
  while (pLength < 8 || pLength > 128 || isNaN(pLength)) {
    pLength = prompt("Invalid response.  Please pick a number between 8 and 128.")
    pLength = parseInt(pLength);
  }


  const pLCase = confirm("Would you like to include lowercase letters?");
  const pUCase = confirm("Would you like to include uppercase letters?");
  const pNum = confirm("Would you like to include numbers?");
  const pSpecChars = confirm("Would you like to include special characters?");
  var password = [""];

  console.log(pLength, pLCase, pUCase, pNum, pSpecChars);


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



  let i = 0
  while (i < pLength) {
    function getRandomInt(pLength) {
      return Math.floor(Math.random() * pLength);
    }

    var passChar = passBank[getRandomInt(passBank.length)];
    password += passChar;
    i++
  }
  console.log(password);
  let str = document.getElementById("password").innerHTML;
  let res = str.replace("", password);
  document.getElementById("password").innerHTML = res;

}

generateBtn.addEventListener("click", writePassword);


