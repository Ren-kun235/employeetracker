const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
  {

    host: 'localhost',
    user: 'root',
    password: 'Passionate651!',
    database: 'employee_db'

  },

  console.log(`Connected to the employee_db database.`)

);

function init() {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "choice",
      choices: ["View Departments", "View Employees", "View Roles", "Add Department",
        "Add Employee", "Add Role", "Update Employee"]
    },
  ])
    .then((answers) => {
      console.log(answers.choice)
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
        console.log("Please choose an option!")
      };

    });

};

function viewDepartments() {
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

// function selection(answer) {
//   if (answers.choice === "View Departments") {
//     db.query('SELECT * FROM department', function (err, results) {
//       console.log(results);
//     });
//   }
// }

init()
