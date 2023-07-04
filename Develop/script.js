// Assignment code here


// Get references to the #generate element

function generatePassword (length)
  {
    var passwordCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !#$%&'()*+,-./:;<=>?@^_`{|}~";
    var password = "";

    for (var i = 0; i < length; i++) 
      {
        var passwordLoop = Math.floor(Math.random() * passwordCharacters.length);
        password += passwordCharacters[passwordLoop];
      }
      console.log(password);
  }

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values 

var numberOfCharacters = prompt("How many characters? (Choose between 8 and 128)");

if ((numberOfCharacters <= 8) || (numberOfCharacters >= 128))
  {
    alert("Not a valid number of Characters.  Please try again.");
    numberOfCharacters = prompt("How many characters? (Choose between 8 and 128)");
  }

generatePassword(numberOfCharacters);
//could declare a variable here like testThis = generatePassword(numberOfCharacters); and then console log that variable to test.  




// var generateBtn = document.querySelector("#generate");
// var passwordArray = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !#$%&'()*+,-./:;<=>?@^_`{|}~"];
// var passwordLength = 10;
// console.log(passwordArray);
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword(passwordLength)
//     {
//       for (var i = 0; i < passwordLength; i++)
//         {
//           var iAmConfused = Math.floor(Math.random() * passwordArray.passwordLength);
//           password += passwordArray[iAmConfused]; 
//         } 

//     }
// console.log(password);


//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword)
//   {
//     // writePassword.preventDefault();
 
//   }

//   var passwordText = document.querySelector("#password");
//   var numberOfCharacters = prompt("How many characters? (Choose between 8 and 128)");
//   console.log(numberOfCharacters);
//   var lowercaseLetters = prompt("Would you like to include lowercase letters?");
//   console.log(lowercaseLetters);
//   var uppercaseLetters = prompt("Would you like to include uppercase letters?");
//   console.log(uppercaseLetters);
//   var numbers = prompt("Would you like to include numbers?");
//   console.log(numbers);
//   var specialCharacters = prompt("Would you like to include special characters?");
//   console.log(specialCharacters);

// if (lowercaseLetters && uppercaseLetters && numbers && specialCharacters)
//     passwordArray = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !#$%&'()*+,-./:;<=>?@^_`{|}~"];  //rather than escaping out I chose to emmit some of the special characters from this list
//     console.log(passwordArray);


// - figure out how to present series of prompts on password crietera when push the generate password GamepadButton
// - use click event that we learned.  May also need the prevent default
// - password length between 8 and 128 characters (first step.  Console log to see if it comes up)
// - character types lowercase,uppercase, numberic, and/or special characters 
// - When answer prompt validate selection and give error or proceede 
// - when validation good then generates password and it is desplayed as an alert or written to the pageXOffset.  Could use data set for this or just declare the element to write to.  

// The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

// ## User Story

// ```
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
// ```

// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```