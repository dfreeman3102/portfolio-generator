//starts the ability for node to change the html file based on user input
const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
        type:"number",
        name:"age",
        message:"How old are you?"
    },
    {
      type: "input",
      name: "location",
      message: "Where are you from?",
    },
    {
      type: "input",
      name: "bio",
      message: "Tell me something about yourself.",
    },
    {
      type: "input",
      name: "linkedIn",
      message: "What is your LinkedIn URL?",
    },
    {
      type: "input",
      name: "gitHub",
      message: "What is your GitHub URL?",
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
