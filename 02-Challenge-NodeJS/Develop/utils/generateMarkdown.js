// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "GPLv3":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    case "Apache 2.0":
      return "![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  }
  switch (license) {
    case "MIT":
      return "[MIT License](https://opensource.org/licenses/MIT)";
    case "GPLv3":
      return "[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
    case "Apache 2.0":
      return "[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  }
  return `## License ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

   ${renderLicenseSection(data.license)}
   
   ${renderLicenseBadge(data.license)}

    This project is licensed under the ${data.license} license.

   You can find more information here: ${renderLicenseLink(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, you can contact me via [GitHub](https://github.com/${
    data.github
  }) or via email at ${data.email}.
  
  ## Links
  Walkthrough Video ()
  `;
}

export default generateMarkdown;
