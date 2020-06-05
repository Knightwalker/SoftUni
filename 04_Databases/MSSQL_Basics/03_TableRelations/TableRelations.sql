USE [master]
GO

CREATE DATABASE [CustomDB]
GO

USE [CustomDB]
GO

-- Problem 1. One-To-One Relationship
CREATE TABLE Persons (
	PersonID INT IDENTITY(1,1) NOT NULL,
	FirstName VARCHAR(50),
	Salary DECIMAL (9,2),
	PassportID INT
);

CREATE TABLE Passports (
	PassportID INT IDENTITY(1,1) NOT NULL,
	PassportNumber VARCHAR(50)
);

ALTER TABLE Passports ADD
CONSTRAINT PK_Passports_PassportID PRIMARY KEY(PassportID);

ALTER TABLE Persons ADD
CONSTRAINT PK_Persons_PersonID PRIMARY KEY(PersonID),
CONSTRAINT FK_Persons_PassportID FOREIGN KEY(PassportID) REFERENCES Passports(PassportID);

-- Problem 2. One-To-Many Relationship
CREATE TABLE Models (
	ModelID INT IDENTITY(1,1) NOT NULL,
	Name VARCHAR(50),
	ManufacturerID INT
);

CREATE TABLE Manufacturers (
	ManufacturerID INT IDENTITY(1,1) NOT NULL,
	Name VARCHAR(50),
	EstablishedOn DATETIME2
);


ALTER TABLE Manufacturers ADD
CONSTRAINT PK_Manufacturers_ManufacturerID PRIMARY KEY(ManufacturerID);

ALTER TABLE Models ADD
CONSTRAINT PK_Models_ModelID PRIMARY KEY(ModelID),
CONSTRAINT FK_Models_ManufacturerID FOREIGN KEY(ManufacturerID) REFERENCES Manufacturers(ManufacturerID);

-- Problem 3. Many-To-Many Relationship
CREATE TABLE Students (
	StudentID INT IDENTITY(1,1) NOT NULL,
	Name VARCHAR(50)
);

CREATE TABLE Exams (
	ExamID INT IDENTITY(101,1) NOT NULL,
	Name VARCHAR(50)
);

CREATE TABLE StudentsExams (
	StudentID INT NOT NULL,
	ExamID INT NOT NULL,
);

ALTER TABLE Students ADD
CONSTRAINT PK_Students_StudentID PRIMARY KEY(StudentID)

ALTER TABLE Exams ADD
CONSTRAINT PK_Exams_ExamID PRIMARY KEY(ExamID)

ALTER TABLE StudentsExams ADD
CONSTRAINT PK_StudentsExams PRIMARY KEY (StudentID, ExamID),
CONSTRAINT FK_StudentsExams_Students FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
CONSTRAINT FK_StudentsExams_Exams FOREIGN KEY (ExamID) REFERENCES Exams(ExamID)

INSERT INTO Students (Name)
     VALUES ('Mila'),
            ('Toni'),
            ('Ron')

INSERT INTO Exams (Name)
     VALUES ('SpringMVC'),
            ('Neo4j'),
            ('Oracle 11g')

INSERT INTO StudentsExams (StudentID, ExamID)
     VALUES (1, 101),
            (1, 102),
            (2, 101),
            (3, 103),
            (2, 102),
            (2, 103)

-- Problem 4. Self-Referencing 
CREATE TABLE Teachers(
	TeacherID INT IDENTITY(101, 1) NOT NULL,
	Name VARCHAR(50),
	ManagerID INT

	CONSTRAINT PK_Teachers_TeacherID PRIMARY KEY(TeacherID)
	CONSTRAINT FK_Teachers_ManagerID FOREIGN KEY(ManagerID) REFERENCES Teachers(TeacherID)
);

INSERT INTO Teachers (Name, ManagerID) VALUES 
('John', NULL),
('Maya', 106),
('Silvia', 106),
('Ted', 105),
('Mark', 101),
('Greta', 101)

-- Problem 5. Online Store Database
CREATE DATABASE OnlineStore
GO

USE OnlineStore
GO

CREATE TABLE Orders(
	OrderID INT IDENTITY(1,1) NOT NULL,
	CustomerID INT,
	CONSTRAINT PK_Orders_OrderID PRIMARY KEY(OrderID)
);

CREATE TABLE Customers(
	CustomerID INT IDENTITY(1,1) NOT NULL,
	Name VARCHAR(50),
	Birthday DATETIME2,
	CityID INT
	CONSTRAINT PK_Customers_CustomerID PRIMARY KEY(CustomerID)
);

CREATE TABLE Cities(
	CityID INT IDENTITY(1,1) NOT NULL,
	Name VARCHAR(50),
	CONSTRAINT PK_Cities_CityID PRIMARY KEY(CityID)
);

CREATE TABLE OrderItems(
	OrderID INT NOT NULL,
	ItemID INT NOT NULL
); 

CREATE TABLE Items(
	ItemID INT IDENTITY(1,1) NOT NULL,
	Name VARCHAR(50),
	ItemTypeID INT
	CONSTRAINT PK_Items_ItemID PRIMARY KEY(ItemID)
);

CREATE TABLE ItemTypes(
	ItemTypeID INT IDENTITY(1,1) NOT NULL,
	Name VARCHAR(50)
	CONSTRAINT PK_ItemTypes_ItemTypeID PRIMARY KEY(ItemTypeID)
);

ALTER TABLE Orders ADD
CONSTRAINT FK_Orders_CustomerID FOREIGN KEY(CustomerID) REFERENCES Customers(CustomerID)

ALTER TABLE Customers ADD
CONSTRAINT FK_Customers_CityID FOREIGN KEY(CityID) REFERENCES Cities(CityID)

ALTER TABLE OrderItems ADD
CONSTRAINT PK_OrderItems_OrderID_ItemID PRIMARY KEY (OrderID, ItemID),
CONSTRAINT FK_OrderItems_OrderID FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
CONSTRAINT FK_OrderItems_ItemID FOREIGN KEY (ItemID) REFERENCES Items(ItemID)

ALTER TABLE Items ADD
CONSTRAINT FK_Items_ItemTypeID FOREIGN KEY (ItemTypeID) REFERENCES ItemTypes(ItemTypeID)

-- Problem 6. University Database
CREATE DATABASE UniversityDatabase
GO

Use UniversityDatabase
GO

CREATE TABLE Majors(
	MajorID INT IDENTITY(1,1) NOT NULL,
	Name VARCHAR(50),
	CONSTRAINT PK_Majors_MajorID PRIMARY KEY(MajorID)
);

CREATE TABLE Students(
	StudentID INT IDENTITY(1,1) NOT NULL,
	StudentNumber INT,
	StudentName VARCHAR(50),
	MajorID INT,
	CONSTRAINT PK_Students_StudentID PRIMARY KEY(StudentID),
	CONSTRAINT FK_Students_MajorID FOREIGN KEY(MajorID) REFERENCES Majors(MajorID)
);

CREATE TABLE Payments(
	PaymentID INT IDENTITY(1,1) NOT NULL,
	PaymentDate DATETIME2,
	PaymentAmount DECIMAL(9,2),
	StudentID INT,
	CONSTRAINT PK_Payments_PaymentID PRIMARY KEY(PaymentID),
	CONSTRAINT FK_Payments_StudentID FOREIGN KEY(StudentID) REFERENCES Students(StudentID)
);

CREATE TABLE Subjects(
	SubjectID INT IDENTITY(1,1) NOT NULL,
	SubjectName VARCHAR(50),
	CONSTRAINT PK_Subjects_SubjectID PRIMARY KEY(SubjectID)
);

CREATE TABLE Agenda(
	StudentID INT,
	SubjectID INT,
	CONSTRAINT PK_Agenda_StudentID_SubjectID PRIMARY KEY(StudentID, SubjectID),
	CONSTRAINT FK_Agenda_StudentID FOREIGN KEY(StudentID) REFERENCES Students(StudentID),
	CONSTRAINT FK_Agenda_SubjectID FOREIGN KEY(SubjectID) REFERENCES Subjects(SubjectID),
);

-- Problem 7. SoftUni Design
-- DONE

-- Problem 8. Geography Design
-- DONE

-- Problem 9. *Peaks in Rila
  
    SELECT m.MountainRange,
           P.PeakName,
           P.Elevation
      FROM Peaks p
INNER JOIN Mountains m
        ON m.Id = P.MountainId
     WHERE m.MountainRange = 'Rila'
  ORDER BY P.Elevation DESC