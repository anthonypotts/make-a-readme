// function to generate badges
const generateBadges = badge => {
  let result = '';

  switch (badge) {
		case 'MIT':
			result = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
			break;
		case 'Eclipse':
			result = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
			break;
		case 'IBM':
			result = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
			break;
		case 'Mozilla':
			result = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
			break;
		case 'Boost':
			result = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
			break;
		case 'Apache':
			result = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
			break;
		default:
			result = '';
	}

	return result;
};

// function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title} ${generateBadges(data.license)}

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
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Languages
  ${data.languages}

  ## License
  ${data.license}
  ${generateBadges(data.license)}

  ## Questions
  ${data.email}

`;
};

module.exports = generateMarkdown;
