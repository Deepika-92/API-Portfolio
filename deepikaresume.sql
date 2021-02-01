create database deepikaresume;
CREATE USER 'deepikaresume'@'localhost' IDENTIFIED WITH mysql_native_password BY 're$ume';
GRANT ALL ON deepikaresume.* TO 'deepikaresume'@'localhost';
use deepikaresume; 
create table about (
    id INT,
    name VARCHAR(255),
    title VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME
);
create table experience (
	id INT,
    role VARCHAR(255),
    company VARCHAR(255),
    summary VARCHAR(255),
    resumeId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME
);
create table education (
	id INT,
    degree VARCHAR(255),
    fieldOfStudy VARCHAR(255),
    institution VARCHAR(255),
    resumeId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME
);
create table skills (
	natLanguages VARCHAR(255),
    scriptLanguages VARCHAR(255),
    servers VARCHAR(255),
    frameworks VARCHAR(255),
    tools VARCHAR(255),
    resumeId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME
);
create table interests (
    hobbies VARCHAR(255),
    resumeId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME
);
create table contact (
	number INT,
    email VARCHAR(255),
    social VARCHAR(255),
    resumeId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME
);
Show TABLES;
DESC resume;

select * from resume;
select * from experience; 
select * from education;