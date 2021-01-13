const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeReadMe = util.promisify(fs.writeFile);

const readMePrompt = () =>
  inquirer.prompt([
    {
      type: "input",
      message: "What is the title of the project?",
      name: "title",
    },
    {
      type: "input",
      message: "Provide me a description of your project.",
      name: "desc",
    },
    {
      type: "input",
      message: "What are the installation instructions?",
      name: "install",
    },
    {
      type: "input",
      message: "Any usage information?",
      name: "usage",
    },
    {
      type: "input",
      message: "Who are the contributers to the project?",
      name: "contr",
    },
    {
      type: "input",
      message: "What are the test instruction if any?",
      name: "test",
    },
    {
      type: "list",
      message: "Which license does your project has?",
      name: "license",
      choices: [
        "MIT",
        "Mozilla",
        "Boost",
        "Apache",
        "BSD",
        "Eclipse",
        "GNU",
        "IBM",
        "Perl",
        "Unlicense",
      ],
    },
    {
      type: "input",
      message: "What is your Github username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ]);
const ReadMeString = (sentence) => ``;

readMePrompt().then((post) => console.log(post));
