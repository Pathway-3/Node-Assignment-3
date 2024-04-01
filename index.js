"use strict";

const inquirer = require("inquirer");
const { question_1 } = require("./lib/favoriteLanguage");
const { default: question_2 } = require("./lib/preferredFramework");

inquirer
  .prompt(question_1)
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// Question 2 is optional, so

inquirer
  .prompt(question_2)
  .then((answers) => {
    console.log(answers || "No answer");
    if (answers) {
      console.log("Thank you for your valuable feedback!");
    } else {
      console.log("Thank you for your valuable feedback!");
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

question_1;
question_2;
