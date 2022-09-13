// TODO: Include packages needed for this application
const inquirer  = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
      type: 'input',
      message: 'Describe your Project',
      name: 'description',
    },
  {
      type: 'input',
      message: 'Provide Instalation Instructions',
      name: 'install',
    },
  {
      type: 'input',
      message: 'How should your tool be used?',
      name: 'usage',
    },
  {
      type: 'input',
      message: 'How should others contribute?',
      name: 'contribution',
    },  
  {
      type: 'input',
      message: 'How should the tool be tested?',
      name: 'testing',
    }, 
    {
    type: 'checkbox',
    message: 'What liscence should be used?',
    name: 'liscence',
    choices: ['MIT','Simplified BSD License','BSD-2-Clause Plus Patent License'],
  },
  {
      type: 'input',
      message: 'What is your Github username?',
      name: 'github',
    }, 
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },]

    // Prompt and log response

 // fs.writeFile(`${fileName}.json`, JSON.stringify(response, null, '\t'), (err) =>
    // err ? console.error(err) : console.log('Success!'))

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {inquirer
  .prompt(questions)
.then((response) => {
    const {title, description, install, usage, contribution, testing, liscence, github, email} = response;
    let readmeTemp = `# <${title}>

    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    
    ## Description
    
    ${description}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    In order to install the ${title} a user shoud:
        ${install}
    
    ## Usage
    
    The ${title} is used by:
        ${usage} 
    
    ## License
    
    ${liscence}
    
    ## How to Contribute
    
    Suggestions for contribution can be ${contribution} or emailed to ${email}. Additional suggestions for enhancements can be provided to ${github} on github.
    
    ## Tests
    
    ${testing}
    
    ## Questions
    
    For questions pleas contact ${github}`
fs.writeFile("README.md", readmeTemp, (err) => 
        err ? console.log(err) : console.log(`Writing Read Me`)
            );
})}

// Function call to initialize app
init();
