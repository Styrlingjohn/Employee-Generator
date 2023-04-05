const inquirer = require("inquirer");
module.exports = managerPage;


function managerPage(answers) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>My Team Members </title>
    </head>
    
    <body>
    
        <header class="col-12 text-center">
            <h1>TEAM MEMBER INFORMATION</h1>
        </header>
    
        <main class="container">
            <section class="row justify-content-around">
                <div class="col-12 col-sm-6 col-lg-4 mb-3">
                    <div class="card">
                        <h3 class="card-header bg-success">
                            MANAGER
                        </h3>
                        <div class="card-body">
                            <p class="card-text">
                                Name: ${answers.manager}
                            </p>
                            <p>
                                Employee ID: ${answers.managerId}
                            </p>
                            <p>Email Address: <a href="mailto:${answers.managerEmail}" target="_blank">${answers.managerEmail}</a></p> </br>
                            <p>Phone Number: <a href="tel:${answers.officeNumber}">${answers.officeNumber}</a></p>
                        </div>
                    </div>
                </div>`
};

