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
var choices;

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

    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("You must choose a criteria!");

  }
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

      choices = character.concat(number, lowercase, uppercase);
  }
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = character.concat(number, uppercase);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
      choices = character.concat(number, lowercase);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      choices = character.concat(lowercase, uppercase);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = number.concat(lowercase, uppercase);
  }
  else if (confirmCharacter && confirmNumber) {
      choices = character.concat(number);

  } else if (confirmCharacter && confirmLowercase) {
      choices = character.concat(lowercase);

  } else if (confirmCharacter && confirmUppercase) {
      choices = character.concat(uppercase);
  }
  else if (confirmLowercase && confirmNumber) {
      choices = lowercase.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
      choices = lowercase.concat(uppercase);

  } else if (confirmNumber && confirmUppercase) {
      choices = number.concat(uppercase);
  }
  else if (confirmCharacter) {
      choices = character;
  }
  else if (confirmNumber) {
      choices = number;
  }
  else if (confirmLowercase) {
      choices = lowercase;
  }
  else if (confirmUppercase) {
      choices = uppercase;
  };

  var randompassword = [];

  for (var i = 0; i < characteramount; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      randompassword.push(pickChoices);
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
