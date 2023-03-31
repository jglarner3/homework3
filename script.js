// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var length = 10,
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#)$(%+&'*,-./:;<=>?@[\]^_`{|}~";
      returnValue = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      returnValue += charset.charAt(Math.floor(Math.random() * n));
  }
  return returnValue;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
