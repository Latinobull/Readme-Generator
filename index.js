const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeReadMe = util.promisify(fs.writeFile);
var badge;
var isLicense = `${post.license} is the licensed used in this project`;
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
# ${sentence.title} ${badge}
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
# License 
${isLicense}
# Questions
If you have any questions, feel free to email me at ${sentence.email}.
# Credits
Github: www.github.com/${sentence.username}
Copyright ${sentence.nameFL}. All Rights Reserved.
`;

readMePrompt()
  .then((post) => {
    console.log(post.license);
    if (post.license == "MIT") {
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (post.license == "Mozilla") {
      badge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (post.license == "Boost") {
      badge =
        "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (post.license == "Apache") {
      badge =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (post.license == "BSD") {
      badge =
        "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else if (post.license == "Eclipse") {
      badge =
        "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    } else if (post.license == "GNU") {
      badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (post.license == "IBM") {
      badge =
        "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    } else if (post.license == "Perl") {
      badge =
        "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
    } else {
      badge =
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      isLicense = "There are no licenses for this project";
    }
    return writeReadMe("README.md", ReadMeString(post));
  })

  .then(() => console.log("You're Readme file is ready"))
  .catch((err) => console.error(err));
