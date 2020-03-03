const fs = require("fs");

console.log("Creating README.md");

const cwd = process.cwd();

const package = JSON.parse(fs.readFileSync(`${cwd}/package.json`, "utf8"));

const data = {
  "repo-name": package.name,
  "npm-name": package.name,
  description: package.description,
  license: package.license
};

const readmeTemplate = fs.readFileSync(
  `${__dirname}/templates/README.template.md`,
  "utf8"
);

const output = readmeTemplate;

fs.writeFileSync(`${cwd}/README.md`, output);

console.log(readmeTemplate);
