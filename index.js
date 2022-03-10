const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generateHtml');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let team = [];

function writeToFile () {
    let fileName = "team.html";
    fs.writeFile(`./dist/${fileName}`, generateHtml(team), (err)) 
}