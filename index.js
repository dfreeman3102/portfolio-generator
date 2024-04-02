//starts the ability for node to change the html file based on user input
const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      validate: (input) => !!input || "Cannot be empty",
    },
    {
      type: "number",
      name: "age",
      message: "How old are you?",
      validate: (input) => !!input || "Cannot be empty",
    },
    {
      type: "input",
      name: "location",
      message: "Where are you from?",
      validate: (input) => !!input || "Cannot be empty",
    },
    {
      type: "input",
      name: "bio",
      message: "Tell me something about yourself.",
      validate: (input) => !!input || "Cannot be empty",
    },
    {
      type: "input",
      name: "linkedIn",
      message: "What is your LinkedIn URL?",
      validate: (input) => !!input || "Cannot be empty",
    },
    {
      type: "input",
      name: "gitHub",
      message: "What is your GitHub URL?",
      validate: (input) => !!input || "Cannot be empty",
    },
  ])
  .then((data) => {
    fs.writeFile(
      "index.html",
      `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio Generator</title>
        <link rel="stylesheet" href="./css/styles.css" />
      </head>
      <body>
        <header id="name">
        <h1>${data.name}</h1>
        </header>
        <section id="age">
          <h2>Age</h2>
          <p>I am ${data.age} years old.</p>
        </section>
        <section id="location">
          <h2>Location</h2>
          <p>I am from ${data.location}.</p>
        </section>
        <section id="bio">
          <h2>Biography</h2>
          <p>
          ${data.bio}.
          </p>
        </section>
        <section id="url">
          <section id="linkedIn">
            <p>My LinkedIn url is: <a href="${data.linkedIn}">${data.linkedIn}</a>.</p>
          </section>
          <section id="gitHub">
            <p>My GitHub url is: <a href="${data.gitHub}">${data.gitHub}</a>.</p>
          </section>
        </section>
        <script src="./js/index.js"></script>
      </body>
    </html>
     
       
     `,
      (err) => (err ? console.log(err) : console.log("Success!"))
    );
  });
