// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var numberOfCharacters = 1;

// Write password to the #password input
function writePassword(event)
  {
    event.preventDefault();
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create Function to randomly generate password
function generatePassword ()
  {
    numberOfCharacters = prompt("How many characters? (Choose between 8 and 128)");

    if ((numberOfCharacters <= 7) || (numberOfCharacters >= 128))
      {
        alert("Not a valid number of Characters.  Please try again.");
        numberOfCharacters = prompt("How many characters? (Choose between 8 and 128)");
      }
    console.log(numberOfCharacters);

    var passwordCharacters = ""
  
    //I had originally written this with a series of prompts.  Ask BCS suggested using confirm so I rewrote using confirm method.      
    if (confirm("Do you want your password to contain lowercase letters?"))
      {
        passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
        console.log(passwordCharacters);
      }

    if (confirm("Do you want your password to contain uppercase letters?"))
      {
        passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        console.log(passwordCharacters);
      }

    if (confirm("Do you want your password to contain numbers?"))
      {
        passwordCharacters += "0123456789";
        console.log(passwordCharacters);
      }

    if (confirm("Do you want your password to contain special characters?"))
      {
        passwordCharacters += " !#$%&()*+,-./:;<=>?@^_`{|}~]";
        console.log(passwordCharacters);
      }

    console.log(passwordCharacters);
    var randomPassword = "";
    
    for (var i = 0; i < numberOfCharacters; i++) 
      {
        var passwordLoop = Math.floor(Math.random() * passwordCharacters.length);
        randomPassword += passwordCharacters[passwordLoop]; 
        console.log(randomPassword);
      }
      
    return randomPassword  //at first it didn't work in my searching I found this that suggested trying the return.  // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values 
  }