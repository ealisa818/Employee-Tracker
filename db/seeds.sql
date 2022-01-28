use employeTracker_db;

-- department
INSERT INTO department (id, name)
VALUES (1, "IT");

INSERT INTO department (id, name)
VALUES (1, "Sales");

INSERT INTO department (id, name)
VALUES (1, "Human Resources");

INSERT INTO department (id, name)
VALUES (1, "R&D");

INSERT INTO department (id, name)
VALUES (1, "Admin");

-- role
use employeTracker_db;

-- department
INSERT INTO department (id, name)
VALUES (1, "IT");

INSERT INTO department (id, name)
VALUES (2, "Sales");

INSERT INTO department (id, name)
VALUES (3, "Human Resources");

INSERT INTO department (id, name)
VALUES (4, "R&D");

INSERT INTO department (id, name)
VALUES (5, "Admin");

-- role
INSERT INTO role (id, title, salary, department )
VALUES (1, "Web Developer" 125000, 1);

INSERT INTO role (id, title, salary, department )
VALUES (2, "Sales Person" 100000, 2);

INSERT INTO role (id, title, salary, department )
VALUES (3, "Sales Manager" 115000, 2);

INSERT INTO role (id, title, salary, department )
VALUES (4, "Hiring Manager" 85000, 3);

INSERT INTO role (id, title, salary, department )
VALUES (5, "Intern" 35000, 3);

INSERT INTO role (id, title, salary, department )
VALUES (6, "Senior Admin Asst" 70000, 5);

INSERT INTO role (id, title, salary, department )
VALUES (7, "Bookkeeper" 70000, 5);

-- employees
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Alisa", "Wolfram", 1, null)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Jose", "Lopez", 1, null)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Jeannie", "Shockley", 2, null)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Mark", "Smith", 2, null)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Sam", "Chung", 3, 5)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Todd", "Williams", 4, 6)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Susan", "Klein", 5, null)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Leila", "Ashton", 6, null)