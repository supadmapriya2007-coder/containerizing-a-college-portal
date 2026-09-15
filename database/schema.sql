CREATE DATABASE IF NOT EXISTS college_portal;

USE college_portal;

CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    course VARCHAR(100),
    semester INT
);

CREATE TABLE IF NOT EXISTS courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(20),
    name VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS marks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_id INT,
    mark INT,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE TABLE IF NOT EXISTS attendance (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_id INT,
    percentage INT,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE TABLE IF NOT EXISTS notices (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200),
    message TEXT
);


-- Sample Student

INSERT INTO students (name, course, semester)
VALUES ('Student 1', 'Computer Science', 6);


-- Sample Courses

INSERT INTO courses (code, name)
VALUES
('CS301', 'Web Development'),
('CS302', 'Database Management'),
('CS303', 'Cloud Computing'),
('CS304', 'Cyber Security');


-- Sample Marks

INSERT INTO marks (student_id, course_id, mark)
VALUES
(1, 1, 85),
(1, 2, 78),
(1, 3, 88),
(1, 4, 82);


-- Sample Attendance

INSERT INTO attendance (student_id, course_id, percentage)
VALUES
(1, 1, 92),
(1, 2, 88),
(1, 3, 95),
(1, 4, 90);


-- Sample Notices

INSERT INTO notices (title, message)
VALUES
(
    'Semester Examination',
    'The semester examination timetable will be published soon.'
),
(
    'College Event',
    'Annual college cultural event registrations are now open.'
);