import inquirer from 'inquirer';
import fs from 'fs'; 
import generatemarkdown from './generatemarkdown.js';
import path from 'path';
inquirer
  .prompt([  //promise and we're waiting for user to answer all these questions below
  //name, location, bio, github url, linked url
    {
      type: 'input',
      message: 'What is the project Description?',
      name: 'project',
    },
    {
      type: 'checkbox',
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
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please Select an Applicable License',
        choices: ['MIT', 'Apache 2.0', 'GPL', 'BSD'],
    },
    {
      type: 'input',
      message: 'How do you install this Project?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Please put any other contributors?',
      name: 'contributors',
    },
    {
      type: 'input',
      message: 'Please write any test for this project',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Please put your relative path for your screenshot',
      name: 'screenshot',
    },
    {
      type: 'input',
      message: 'Describe your screenshot?',
      name: 'alt',
    },
    
    
])

.then((data) => {
  const name = [];
    console.log(data);
    //console.log('project')
    fs.writeFile(path.join(process.cwd(), './output/README.md'), generatemarkdown(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

  
