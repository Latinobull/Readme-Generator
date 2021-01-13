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
      message: "What are the contributings to the project?",
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
    {
      type: "input",
      message: "What is your first and last name?",
      name: "nameFL",
    },
  ]);
const ReadMeString = (sentence) => `
# ${sentence.title}
${sentence.desc}
# Tables of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Credits](#credits)
# Installation
${sentence.install}
# Usage
${sentence.usage}
# Contributing
${sentence.contr}
# Test
${sentence.test}
# Questions
If you have any questions, feel free to email me at ${sentence.email}.
# Credits
Github: www.github.com/${sentence.username}
Copyright ${sentence.nameFL}. All Rights Reserved.
`;

readMePrompt()
  .then((post) => {
    console.log(post);
    return writeReadMe("README.md", ReadMeString(post));
  })

  .then(() => console.log("You're Readme file is ready"))
  .catch((err) => console.error(err));
