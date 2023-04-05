const inquirer = require('inquirer');
const fs = require('fs');
const managerPage = require('./lib/Manager');
const internPage = require('./lib/Intern');
const engineerPage = require('./lib/Engineer');



function engineerForm() {
    const engineer = [{
        type: 'input',
        name: 'engineerName',
        message: 'Please enter engineer name',
    },
    {
        type: 'number',
        name: 'engineerId',
        message: 'Enter employee ID',
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Enter engineer email address',
    },
    {
        type: 'input',
        name: 'githubUrl',
        message: 'Please provide engineer Github URL link',
    },
    ]
    inquirer.prompt(engineer).then((answers) => {
        const engineerContent = engineerPage(answers);
        fs.appendFile('./dist/index.html', (engineerContent), (err) =>
            err ? console.log(err) : console.log('Successfully appended answers to HTML')
        );
    });
};


function internForm() {
    const intern = [
        {
            type: 'input',
            name: 'internName',
            message: 'Please enter intern name',
        },
        {
            type: 'number',
            name: 'internId',
            message: 'Enter intern Id',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school institution is intern attending?',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Provide intern email',
        },
    ]
    inquirer.prompt(intern).then((answers) => {
        const internContent = internPage(answers);
        fs.appendFile('./dist/index.html', (internContent), (err) =>
            err ? console.log(err) : console.log('Successfully appeneded answers to HTML')
        );
    });
};

const questions = [
    {
        type: 'input',
        name: 'manager',
        message: 'Please enter manager name',
    },
    {
        type: 'number',
        name: 'managerId',
        message: 'Enter employee ID',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter manager email address',
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: 'Enter manager office number',
    },
    {
        type: 'list',
        name: 'member',
        message: 'Please select your next team member',
        choices: ['intern', 'engineer']
    },
]
function init() {
    inquirer.prompt(questions).then((answers) => {
        let userChoice = answers.member;
        function switchQuestions() {
            if (userChoice === 'engineer') {
                console.log("engineer")
                engineerForm();
                return;

            } else if (userChoice === 'intern') {
                console.log("intern")
                internForm();
                return;
            }

        }
        switchQuestions();
        const managerContent = managerPage(answers);
        fs.writeFile('./dist/index.html', (managerContent), (err) =>
            err ? console.log(err) : console.log('Successfully created HTML file!')
        );
    });
};
init();