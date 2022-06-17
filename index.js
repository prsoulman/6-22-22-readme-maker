const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([  //promise and we're waiting for user to answer all these questions below
  //name, location, bio, github url, linked url
    {
      type: 'input',
      message: 'What is the project Description?',
      name: 'project',
    },
    {
      type: 'list',
      message: 'What are the technologies used?',
      name: 'technologies',
      choices: ['HTML', 'CSS', 'JavaScript', 'bootstrap', 'jQuery', 'Serverside API', 'MySQL', 'NoSQL', 'Express.js', 'React.js', 'Node.js', 'MongoDB', 'MySQL', 'Git', 'Python', 'Java', 'C#','AWS']
    },
    {
        type: 'input',
        message: 'What is your github url?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your linkedin url?',
        name: 'linkedin',
    }
])

.then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.md`;


    const templateMd = `<!DOCTYPE html>
    <html lang="en-US">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" type="text/css" href="./assets/css/style.css">
      <title>About Me</title>
    </head>
    
    <body>
        <h1>Name: ${data.name}</h1>
        <h2>Location: ${data.location}</h2>
        <h2>Biography</h2>
        <p>${data.bio}</p>
        <h2>Github URL: ${data.github}</h2>
        <h2>LinkedIn URL: ${data.linkedin}</h2>
    </body>
    </html>`;

    console.log(templateMd)

    fs.writeFile(filename, templateMdL, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

  
