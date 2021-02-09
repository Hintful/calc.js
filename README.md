# calc.js

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). A simple React/JavaScript-based calculator application. The expression evaluation follows the formula logic, where the order of operations is conserved.



## Live Demo

Feel free to try the live demo of this project on my website at: https://kurtchoi.dev/calc.js.



## Implementation Description

The UI layout of the calculator has been made with CSS Flexbox and CSS Grid Template. Input logic has been carefully coded to disallow all invalid sequence of inputs - sequence of inputs are stored in form of `string` within Calculator React component's `state`. When '=' button is pressed, the expression stored is evaluated via `evaluate()` function from [Math.js](https://mathjs.org/) library.



## How To Run

Simply run: `npm start` from the root working directory - website will be deployed locally at: https://localhost:3000.

