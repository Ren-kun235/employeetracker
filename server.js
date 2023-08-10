const inquirer = require('inquirer');
const mysql = require('mysql2');

require("dotenv").config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const db = mysql.createConnection(
  {
    host: "localhost",
    database: dbName,
    user: dbUser,
    password: dbPassword
  },
  console.log(`Connected to the employee_db.`)
);

function init() {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "choice",
      choices: ["View Departments", "View Employees", "View Roles", "Add Department",
                "Add Employee", "Add Role", "Update Employee", "Exit"]
    }
  ]).then((answers) => {
      console.log(answers)
      if (answers.choice === "View Departments") {
        viewDepartments()
      } else if (answers.choice === "View Employees") {
        viewEmployees()
      } else if (answers.choice === "View Roles") {
        viewRoles()
      } else if (answers.choice === "Add Department") {
        addDepartment()
      } else if (answers.choice === "Add Employee") {
        addEmployee()
      } else if (answers.choice === "Add Role") {
        addRole()
      } else if (answers.choice === "Update Employee") {
        updateEmployee()
      } else {
        exit()
      };
    });
  };
  
init()

function viewDepartments() {
  console.log('viewDepartments')
  db.query('SELECT * FROM department', function (err, results) {
    console.log(results);
  });
};
function viewEmployees() {
  db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  });
};
function viewRoles() {
  db.query('SELECT * FROM role', function (err, results) {
    console.log(results);
  });
};
function addDepartment() {
  db.query('SELECT * FROM department', function (err, results) {
    console.log(results);
  });
};
function addEmployee() {
  db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  });
};
function addRole() {
  db.query('SELECT * FROM role', function (err, results) {
    console.log(results);
  });
};
function updateEmployee() {
  db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  });
};
// function exit() {
//   db.query('', function (err, results) {
//     console.log(results);
//   });
// };

// function selection(answer) {
//   if (answers.choice === "View Departments") {
//     db.query('SELECT * FROM department', function (err, results) {
//       console.log(results);
//     });
//   }
// }

