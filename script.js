// Assignment Code
var generateBtn = document.querySelector("#generate");

function promptLength(){
  leng = prompt("Please enter the desired length of your password. \nMust be between 8 and 128");

  if(leng < 8 || leng > 128)
  {
    alert("Error: Length is out of bounds");
    promptLength();
  }
  console.log(leng);
  return leng;
}

function upper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function lower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function num() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function specChar() {
  return String.fromCharCode(Math.floor(Math.random() * 16) + 32);
}

function generatePassword(){
  var pass = [];
  var passLeng = pass.length;
  console.log(please);
  console.log(passLeng);
  console.log(confirmUppercase);

  while(passLeng < please){
    if(confirmUppercase === true){
      randoUp = upper();
      console.log(randoUp);
      passLeng = pass.push(randoUp);
    }
    if(confirmLowercase === true){
      randoLow = lower();
      passLeng = pass.push(randoLow);
    }
    if(confirmCharacter === true){
      randoChar = specChar();
      passLeng = pass.push(randoChar);
    }
    if(confirmNumber === true){
      randoNum = num();
      passLeng = pass.push(randoNum);
    }
  }
  return pass.join('');

}


// Write password to the #password input
function writePassword() {
confirmUppercase = confirm("Will this password contain Uppercase letters? \nSelect OK for yes and Cancel for no");
confirmLowercase = confirm("Will this password contain Lowercase letters? \nSelect OK for yes and Cancel for no");
confirmNumber = confirm("Will this password contain numbers? \nSelect OK for yes and Cancel for no");
confirmCharacter = confirm("Will this password contain special characters? \nSelect OK for yes and Cancel for no");
please = promptLength();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
