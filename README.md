# JsPasswordGenerator
## This Repository

This repository ("JsPasswordGenerator") is where I have stored my changes to the assignment. This source code is available to everyone under the standard MIT license.

## Usage 

This project was designed as a homework assignment for OSU's coding bootcamp.

This application emphasizes the use of Javascript to generate a random, secure password for the user.

This project has been deployed to GitHub Pages. To get this project up and running, you can follow the deployment link. Or, download the sources files to use this as a template.

Here is the link to my application: [Password Generator](https://erobinson3672.github.io/JsPasswordGenerator/)

## Getting Started

This project has been deployed to GitHub Pages. To get this project up and running, you can follow the deployment link. Or, download the sources files to use this as a template.

[GitHub Repository](https://github.com/erobinson3672/JsPasswordGenerator/tree/master)
[Password Generator](https://erobinson3672.github.io/JsPasswordGenerator/)

## Prerequisites

To view this code locally, you will need to download the zip file in this repo or utilize GitHub's guidelines to clone the repo. You will also need a text editor. I suggest VS Code. [Download VS Code](https://code.visualstudio.com/Download)

## Summary

I used HTML, CSS and Javascript to create this 'Password Generator'. This project really showcases the use of Javascript. How powerful it can be with only using a small portion of its functionality. 

![Password-Generator-Photo](https://github.com/erobinson3672/JsPasswordGenerator/blob/master/Screen%20Shot%202020-11-02%20at%2012.23.01%20PM.png)

## This project has the following features:

- A generate button
  - This will send the user a series of prompts and confirms
  - After user data is collected, a random password will be generated using Javascript

![Button-Generator-Photo](https://github.com/erobinson3672/JsPasswordGenerator/blob/master/Screen%20Shot%202020-11-02%20at%2012.24.49%20PM.png)

- A Textarea
  - This textarea will display the users password once it is generated
  
![Textarea-Photo](https://github.com/erobinson3672/JsPasswordGenerator/blob/master/Screen%20Shot%202020-11-02%20at%2012.25.16%20PM.png)

## Psuedo Code and Project Requirements:

- The user will be prompted to choose from the following password criteria: 8 and 128 characters
- The user will recieve a confirm for:
  - Password containing special characters, numbers, lowercase, and uppercase.
  - Either 4 variables individual ones, or 3 with toLowerCase to Uppercase conversion.
  - This will need to randomly generate a selection or randomly select array data, so <b> math.random </b> and <b> math.floor</b> will need to be used.

- The application should validate user input and ensure that at least one character type is selected.
  - If, else if statement
  
- Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.
  - Event listener will determine the password output with function to populate the value into the test area.

## This project has script features of:

- Variable declaration area.
- An event listener (onclick) called generatePassword.
  - This will prompt the user for input between 8-128.
  - This variable is changed to an interger using ParseInt().
  - This will validate that the input is a number within range, or is a number.
  - This then uses the input to determine the types (or choices) or letters of characters used, using an if statement.
  - This then assigns values to the variables using arrays for character, number or alphabet.
  
- Another variable is created to concatenate the above variables
- A for loop will loop through the enter prompt until it reaches the number entered by user.
- A password variable takes the value from the for loop, and converts it to a string.
- The string value then populates into the text area for the user using a UserInput function.
- An event listener (onlick) has also been created for the copy to clipboard feauture.

## To Execute File:
Open in browser

## Features:
- One HTML Pages
  - Index.html
  - Contains basic user input items and buttons with divs and ids

- One CSS Page
  - Styles.css
   - Contains centering and styling for html user input features
   - Contains media queries

- One Javascript Page * Contains: * Variables, including arrays and value placeholders * Event listeners * if/else if statements * 
- function outside of first event listener

## Authors
<b> Evan Robinson </b>

## Credits

Credit for this project goes to my instructor @aaronjewell, my TA's along with my fellow peers from Group - 5 for answering questions. They all assist me with my assignment. By posting helpful links, our class lectures and most importantly all the practice that was given. 
I viewed snippets of code from the following sites:

- https://www.geeksforgeeks.org/how-to-generate-a-random-password-using-javascript/
- https://www.freecodecamp.org/news/javascript-addeventlistener-example-code/
- https://nabendu82.medium.com/create-a-password-generator-in-javascript-67ce0724c9c

## License

MIT License

Copyright (c) [2020] [<b> Evan Robinson </b>]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---
© 2020 OSU Boot Camp.
