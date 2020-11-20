const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");

inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your title for this Project?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe this project?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license',
        default: 'MIT',
        choices: [
            'Apache 2.0',
            'MIT',
            'GNU GPL v3.0',
            'No license'
        ]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage of this application'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Describe how to test this application'
    },

    {
        type: 'input',
        name: 'contributors',
        message: 'Who all contributed to this project?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Do you have any questions?'
    }

]).then(function (data) {
    axios
        .get(`https://api.github.com/users/${data.username}`)
        .then(function (res) {
            console.log(data.license)
            const getLicense = (license) => {
                if (license[0] === 'MIT'){
                    return  `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`; 
                } else if (license [0] === 'GNU GPL v3.0') {
                    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
                } else if (license [0] === 'Apache 2.0') {
                    return `[![License](https://img.shields.io/badge/License-Apache%202.0-red.svg)](https://opensource.org/licenses/Apache-2.0)`; 
                }
            }

                const readMe = `
# ${data.title}



# Table of Contents
1. Description
2. Installation
3. Usage
4. License
5. Test
6. Contributors
7. Questions
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
## ${getLicense(data.license)}
## Test
${data.test}
## Contributors
${data.contributors}
## Questions
${data.questions}
## ${data.username} | ${data.email}
## ![img](${res.data.avatar_url})`

                fs.writeFile('README.md', readMe, (err) => {
                    if (err) {
                        throw err;
                    }
                });
            })})
