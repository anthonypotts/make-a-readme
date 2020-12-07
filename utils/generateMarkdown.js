// function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Website
  ${data.website}

  ## Repository
  ${data.github}

  ### Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Languages](#languages)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  1. To install this application, clone the repository into your terminal.
  2. After installation, open VS studio (or equivalent) and type "npm init" into the terminal when in the root folder.
  3. Upon completing the installation of npm, type "npm install inquirer" to initialize the program.
  4. In order to run the program, type "node index.js" into the terminal!

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Languages
  ${data.languages}

  ## License
  ${data.license}

  ## Questions
  ${data.github}
  ${data.email}

`;
};

module.exports = generateMarkdown;
