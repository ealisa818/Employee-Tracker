use employeeTracker_db;

-- department
INSERT INTO department (name)
VALUES ( "IT"),
("Sales"),
("Human Resources"),
 ("R&D"),
 ("Admin");

-- role
INSERT INTO role (title, salary, department_id )
 VALUES ("Web Developer", 125000, 1), 
 ("Sales Person", 100000, 2), 
 ("Sales Manager", 115000, 2), 
 ("Hiring Manager", 85000, 3),
 ("Intern", 35000, 3),
 ("Senior Admin Asst", 70000, 5),
("Bookkeeper", 70000, 5);

-- employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Alisa", "Wolfram", 1, null),
("Jose", "Lopez", 1, null),
("Jeannie", "Shockley", 3, null),
("Mark", "Smith", 2, 3), 
("Sam", "Chung", 2, 3),
("Todd", "Williams", 4, null),
("Susan", "Klein", 5, 6),
 ("Leila", "Ashton", 6, 6)