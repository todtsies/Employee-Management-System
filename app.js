const mysql = require('mysql');
const inquirer = require('inquirer');
const { printTable } = require('console-table-printer');
const figlet = require('figlet');
let roles;
let departments;
let managers;
let employees;

var connection = mysql.createConnection({
    host: "127.0.0.1",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Colton123!",
    database: "employees_db"
  });

  figlet('Employee Tracker', (err, result) => {
    console.log(err || result);
  });

  connection.connect(function(err) {
    if (err) throw err;
    start();
    getDepartments();
    getRoles();
    getManagers();
    getEmployees();
  });

  start = () => {

    inquirer
      .prompt({
        name: "choices",
        type: "list",
        message: "What would you like to do?",
        choices: ["ADD", "VIEW", "UPDATE", "DELETE", "EXIT"]
      })
      .then(function(answer) {
        if (answer.choices === "ADD") {
          addSomething();
        }
        else if (answer.choices === "VIEW") {
          viewSomething();
        } 
        else if (answer.choices === "UPDATE") {
          updateSomething();
        }
        else if (answer.choices === "DELETE") {
          deleteSomething();
        }
        else if (answer.choices === "EXIT") {
          figlet('Thanks for using the Employee Tracker', (err, result) => {
            console.log(err || result);
          });
        
          connection.end();
        }
        else{
          connection.end();
        }
      });
  }