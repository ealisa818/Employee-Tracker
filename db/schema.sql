DROP DATABASE IF EXISTS employeTracker_db;
CREATE DATABASE employeTracker_db;

USE employeTracker_db;

CREATE TABLE department (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(30),
);

CREATE TABLE role (
  id INT NOT NULL PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id,
  FOREIGN KEY (role_id)
  REFERENCES role(id)
  ON DELETE SET NULL
  manager_id,
  FOREIGN KEY (employee_id)
  REFERENCES employee(id)
  ON DELETE SET NULL
);

