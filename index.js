const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const { resolve } = require('path');


// array of questions for user
const promptUser = () => {
    console.log(`
    =================
     Create a README
    =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }   else {
                    console.log('Please enter the name of the project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your Github username? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }   else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }   else {
                    console.log('Please provide a valid email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'website',
            message: 'Please provide a deployed link to your website',
            validate: websiteInput => {
				if (websiteInput) {
					return true;
				} else {
					console.log('Please provide your published website link!');
					return false;
				}
			}
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide a link to your Github repository:',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }   else {
                    console.log('Please provide your published website link!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmDescription',
            message: 'Would you like to provide a description of your project?',
            default: true
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project:',
            when: ({ confirmDescription }) => confirmDescription,
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What was the process and initial installation steps you followed to get your project functioning?',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                }   else {
                    console.log('Please provide your installation process!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use (use screenshots when necessary)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                }   else {
                    console.log('Please provide instructions for use!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Please list any contributors to this project (optional)'
        },
        {
			type: 'checkbox',
			name: 'languages',
			message:
				'Please select the languages associated with this project: (Required)',
			choices: ['HTML', 'CSS', 'Javascript', 'Node', 'JQuery'],
			validate: languagesInput => {
				if (languagesInput) {
					return true;
				} else {
					console.log('Please select a language for your project!');
					return false;
				}
			}
		},
        {
            type: 'list',
            name: 'license',
            message: 'Please provide the license that you used for this project',
            choices: ['MIT', 'Eclipse', 'IBM', 'Mozilla', 'Boost', 'Apache']
        }
    ]);
};

// function call to initialize program
promptUser().then(data => {
    const readMe = generateMarkdown(data);

    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', readMe, err => {
            if (err) {
                reject(err);
                return;
            }
    
            resolve({
                ok: true,
                message: "README created, check your root folder!"
            });
        });
    });
});
