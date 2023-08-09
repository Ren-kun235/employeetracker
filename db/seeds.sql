INSERT INTO department ( id, name )
VALUES  (1, "R&D"),
        (2, "Customer Service"),
        (3, "Receiving"),
        (4, "Shipping"),
        

INSERT INTO role ( id, title, salary, department_id )
        (1, "Junior Technician", 30000, 1),
        (2, "Senior Technician", 60000, 1),
        (3, "Sales Lead", 80000, 2),
        (4, "Sales Representative", 50000, 2),
        (5, "Deliveries Coordinator", 45000, 3),
        (6, "Returns Inspection", 40000, 3),
VALUES  (7, "Materials Handler", 35000, 4),
        (8, "Shipping Coordinator", 45000, 4),


INSERT INTO employee ( id, first_name, last_name, role_id, manager_id )
VALUES  (1, "Leon", "Kennedy", 7, 4),
        (2, "Claire", "Redfield", 4, 2),
        (3, "Chris", "Redfield", 5, 3),
        (4, "Ada", "Wong", 3, 2),
        (5, "Annette", "Birkin", 1, 1),
        (6, "William", "Birkin", 2, 1),
        (7, "Jill", "Valentine", 6, 3),
        (8, "Carlos", "Oliveira", 8, 4),
