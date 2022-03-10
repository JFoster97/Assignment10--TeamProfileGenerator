const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generateHtml');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let team = [];

function writeToFile () {
    let fileName = "team.html";
    fs.writeFile(`./dist/${fileName}`, generateHtml(team), (err) =>
    err ? console.log(err) : console.log("New data written to team.html")); 
}

const managerInfo = () => {

    return inquirer.prompt([
        {
            type:'input',
            name:'managerName',
            message: 'enter the name of the team manager:'
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's ID",   

        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email",

        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number",

        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add an employee?',
            default: false,
        },
    ])
};

const EmployeeInfo = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'what role does this employee have?',
            choices: ["Engineer", "Intern"],

        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
        },
        {
            type: 'input',
            name: 'id',
            message: "enter employee ID",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email address",
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Please enter thier github username',
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the name of their college or university',
            when: (input) => input.role === "Intern",
        }
        
    ])
}
