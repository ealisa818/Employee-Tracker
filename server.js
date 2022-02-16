const db = require("./db");
require("console.table");
const inquirer = require("inquirer");
const res = require("express/lib/response");

startQuestions();

function startQuestions() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "choices",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "quit",
        ],
      },
    ])
    .then(function (answer) {
      switch (answer.choices) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add a department":
          addADepartment();
          break;
        case "Add a role":
          addARole();
          break;
        case "Add an employee":
          addAnEmployee();
          break;
        case "Update an employee role":
          updateAnEmployeeRole();
          break;
        default:
          process.exit();
      }
    });
}

function viewAllDepartments() {
  db.findAllDepartments()
    .then(([depts]) => {
      console.table(depts);
    })
    .then(() => startQuestions());
}

function viewAllRoles() {
  db.findAllRoles()
    .then(([roles]) => {
      console.table(roles);
    })
    .then(() => startQuestions());
}

function viewAllEmployees() {
  db.findAllEmployees()
    .then(([employees]) => {
      console.table(employees);
    })
    .then(() => startQuestions());
}

function addADepartment() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Enter the department:",
      },
    ])
    .then((res) => {
      db.createDepartment(res).then(() => startQuestions());
    });
}
function addARole() {
  db.findAllDepartments().then(([depts]) => {
    const departmentList = depts.map(({ id, name }) => ({
      name: name,
      value: id,
    }));

    inquirer.prompt([
      {
        name: "title",
        type: "input",
        message: "Enter the title:",
      },
      {
        name: "salary",
        type: "input",
        message: "Enter the salary:",
      },
      {
        name: "department_id",
        type: "list",
        message: "Please select the department the rolebBelongs to:",
        choices: departmentList
      },
    ]).then((res)=>{
      db.createRole(res).then(()=> startQuestions())
    })
  });
}
function addAnEmployee() {
  inquirer.prompt([
    {
      name: "first_name",
      type: "input",
      message: "What is the employee's first name?",
    },
    {
      name: "last_name",
      type: "input",
      message: "What is the employee's last name?",
    }
    // {
    //   name: "role",
    //   type: "input",
    //   message: "What is the employee's role?",
    // },
    // {
    //   name: "manager",
    //   type: "input",
    //   message: "Who is the employee's manager?",
    // },
  ]).then((res)=>{
    const firstName = res.first_name;
    const lastName =  res.last_name;

    db.findAllRoles().then(([roles])=>{
      const roleList = roles.map(({id, title})=>({
        name: title, 
        value: id
      }));

      inquirer.prompt([{
        name: "role_id", 
        type: "list", 
        message: "please select the employees role:",
        choices: roleList
      }]).then((ans)=>{
        const roleId =  ans.role_id

        db.findAllEmployees().then(([employees])=>{
          const managerList = employees.map(({first_name, last_name, id})=>({
            name: `${first_name} ${last_name}`,
            value: id
          }))

          managerList.unshift({name: 'None', value: null})

          inquirer.prompt([{
            name:'manager_id',
            type: 'list', 
            message: 'Who is the manager for the employee', 
            choices: managerList
          }]).then((data)=>{
            const employee = {
              first_name: firstName,
              last_name: lastName,
              role_id: roleId,
              manager_id: data.manager_id
            }

            db.createEmployee(employee).then(()=> startQuestions())
          })
        })
      })

    })
  })
};
// function updateAnEmployee() {
//   inquirer.prompt([
//     {
//       db.findAllEmployees().then(([employees])=>{
//       const employeeList = employee.map(({first_name, last_name})=>({
//         name: first_name, 
//         value: last_name
//       }));

//       inquirer.prompt([{
//         name: "role_id", 
//         type: "list", 
//         message: "please select the employees role:",
//         choices: roleList
//       }]).then((ans)=>{
//         const roleId =  ans.role_id


        // db.updateEmployee(employee).then(()=> startQuestions())