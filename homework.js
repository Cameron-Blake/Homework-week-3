// Assignment Code
var generateBtn = document.querySelector("#generate");
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var confirmNumber;
var confirmCharacter;
var confirmLowercase;
var confirmUppercase;


function generatePassword() {
 var characteramount = (prompt("How many characters would you like 8-128?"));

  
  if (characteramount < 8 || characteramount > 128) {
      alert("Choose between 8 and 128!");
    }
    else {
      var confirmNumber = confirm("Click OK to confirm if you would like to include Numeric characters");
      var confirmCharacter = confirm("Click OK to confirm if you would like to include Special characters");
      var confirmLowercase = confirm("Click OK to confirm if you would like to include Lowercase characters");
      var confirmUppercase = confirm("Click OK to confirm if you would like to include Uppercase characters");

    }
  }



// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
