
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What's the title of the project?",
    name: "title",
},
{
    type: "input",
    message: "Explain step by step on how to install your project.",
    name: "installation",
},
{
    type: "input",
    message: "How does your project function?",
    name: "usage",
},
{
    type: "input",
    message: "Add credits to your project.",
    name: "credits",
},
{
    type: "input",
    message: "Put your license.",
    name: "license",
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, text, (error) => {
        err ? console.error(err): console.log("Saved!");
    });
}

// TODO: Create a function to initialize app
function init() {
 inquirer.prompt(
    questions).then(answer => {
        writeToFile('${answer.title}.md', (answer));
    })
}

// Function call to initialize app
init();
