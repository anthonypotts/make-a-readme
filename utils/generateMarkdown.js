// function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Website
  ${data.website}

  ## Repository
  ${data.github}

  

`;
}

module.exports = generateMarkdown;
