// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquire");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your github userName?",
    },
     
    {
        type: "input",
        name: "github",
        message: "What is your email address?",
    },

    {
        type: "input",
        name: "github",
        message: "What is your facebook?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your linkin profile?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((questionResponses) => {
        console.log("Generating Readme..");
        console.log(inquirerResponses);
    });
}

// Function call to initialize app
init();
