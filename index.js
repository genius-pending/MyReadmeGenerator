const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const genrateMarkdown = require("./generateMarkdown");

//questions for user
const questions = [
{
    type: "input",
    message: "What is the title of your project?",
    name: "Title"
},
{
    type: "input",
    message: "Please write a description of your project?",
    name: "Description"
},
{
    type: "input",
    message: "Installation instructions?",
    name: "Install"
},
{
    type: "input",
    message: "Explain how to use the app?",
    name: "Usage"
},
{
    type: "List",
    message: "Which License are you using?",
    name: "License",
    choices: [
        "MIT License",
        "GVL GPL License",
        "Apache License",
        "No License"
    ]
},
{
    type: "input",
    message: "Are there any contributors?",
    name: "Contributors"
},
{
    type: "input",
    message: "How to test the app?",
    name: "Test"
},
{
    type: "input",
    message: "Any Questions?",
    name: "Questions"
},
{
    type: "input",
    message: "What is your Github Username?",
    name: "Github"
},
{
    type: "input",
    message: "What is your email?",
    name: "Email"
} ];

// function to write readme file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("ReadMe was created");
    });
}

// function to initialise program
function init() {
    inquirer.prompt(questions).then((answers) => {

        const response = genrateMarkdown(answers);
        console.log(answers);

        writeToFile("README.md", response);
    })
}