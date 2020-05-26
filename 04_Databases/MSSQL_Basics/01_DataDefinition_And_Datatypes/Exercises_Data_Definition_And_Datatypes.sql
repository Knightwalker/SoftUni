-- Problem 1. Create DataBase
use [master]
GO

CREATE DATABASE Minions
GO

-- Problem 2. Create Tables
use Minions
GO

CREATE TABLE Minions(
	Id INT NOT NULL,
	Name VARCHAR(50) NULL,
	Age INT NULL,
	CONSTRAINT PK_Minions PRIMARY KEY (Id)
)

CREATE TABLE Towns
(
	Id INT NOT NULL,
	Name VARCHAR(50) NULL,
	CONSTRAINT PK_Towns PRIMARY KEY (Id)
)

-- Problem 3. Alter Minions Table
ALTER TABLE Minions
ADD TownId INT NULL,
CONSTRAINT FK_TownsId FOREIGN KEY(TownId) REFERENCES Towns(Id)

-- Problem 4. Insert Records in Both Tables
INSERT INTO Towns(Id, Name)
VALUES
(1, 'Sofia'),
(2,'Plovdiv'),
(3,'Varna')

INSERT INTO Minions(Id, Name, Age, TownId) 
VALUES 
(1,'Gosho', 20, 1),
(2,'Pesho', 30, 3),
(3,'Stavri', 23, 2)

-- Problem 5. Truncate Table Minions
TRUNCATE TABLE Minions

-- Problem 6. Drop All Tables
DROP TABLE Minions
DROP TABLE Towns

-- Problem 7. Create Table People
USE Minions
GO

CREATE TABLE People
(
	Id INT IDENTITY(1,1) NOT NULL,
	Name NVARCHAR(200) NOT NULL,
	Picture VARBINARY(MAX) NULL,
	Height DECIMAL(5, 2) NULL,
	Weight DECIMAL(5, 2) NULL,
	Gender CHAR(1) NOT NULL,
	Birthdate DATETIME2 NOT NULL,
	Biography NVARCHAR(MAX),
	CONSTRAINT PK_People PRIMARY KEY (Id),
	CONSTRAINT CHK_PeopleGender CHECK (Gender='m' OR Gender='f')
)

INSERT INTO People(Name, Height, Weight, Gender, Birthdate, Biography)
VALUES
('Kalina', 1.73, 58.00, 'f', '1999-02-22', 'Very kind person. Study in UNSS and SoftUni. Work in DSK Bank.'),
('Kris', 1.85, 64.00, 'm', '1996-03-23', 'Very kind person. Study in SoftUni. Work in HP.'),
('Dris', 1.86, 80.00, 'm', '1999-02-22', 'Train hard.'),
('Kapina', 1.60, 51.00, 'f', '1981-05-28', 'Very kind person.'),
('Malina', 1.64, 54.00, 'f', '1990-10-11', 'Some data as biography.')

-- Problem 8. Create Table Users
CREATE TABLE Users
(
	Id INT IDENTITY(1,1) NOT NULL,
	Username VARCHAR(30) NOT NULL,
	Password VARCHAR(26) NOT NULL,
	ProfilePicture VARBINARY(MAX) NULL,
	LastLoginTime DATETIME2 NULL,
	IsDeleted BIT NOT NULL
) 

ALTER TABLE Users ADD 
CONSTRAINT PK_Users PRIMARY KEY(Id),
CONSTRAINT DF_Users_IsDeleted DEFAULT 0 FOR IsDeleted,
CONSTRAINT UQ_Users UNIQUE (Username)

INSERT INTO Users(Username, Password) VALUES
('Kalina', '12345'),
('Kris', '12345'),
('Dris', '12345'),
('Kapina', '12345'),
('Malina', '12345')

-- Problem 9. Change Primary Key
ALTER TABLE USERS
DROP CONSTRAINT PK_Users
GO

ALTER TABLE USERS
ADD CONSTRAINT PK_Users PRIMARY KEY (Id, Username)

-- Problem 10. Add Check Constraint
ALTER TABLE USERS
ADD CONSTRAINT CHK_Users_Password CHECK (LEN(Password) >= 5)

-- Problem 11. Set Default Value of a Field
ALTER TABLE USERS ADD 
CONSTRAINT DF_Users_LastLoginTime DEFAULT GETDATE() FOR LastLoginTime

-- Problem 12. Set Unique Field
ALTER TABLE USERS DROP 
CONSTRAINT PK_Users

ALTER TABLE USERS ADD 
CONSTRAINT PK_Users PRIMARY KEY (Id),
CONSTRAINT CHK_Users_Username_MinLenght CHECK (LEN(Username) >= 3)

-- Problem 13. Movies Database
CREATE DATABASE Movies
GO

use [Movies]
GO

CREATE TABLE Directors (
	Id INT IDENTITY(1,1) NOT NULL,
	DirectorName VARCHAR(50) NULL,
	Notes NVARCHAR(MAX) NULL,
	CONSTRAINT PK_Directors PRIMARY KEY(Id)
)

CREATE TABLE Genres (
	Id INT IDENTITY(1,1) NOT NULL,
	GenreName VARCHAR(50) NULL,
	Notes NVARCHAR(MAX) NULL,
	CONSTRAINT PK_Genres PRIMARY KEY(Id)
)

CREATE TABLE Categories (
	Id INT IDENTITY(1,1) NOT NULL,
	CategoryName VARCHAR(50) NULL,
	Notes NVARCHAR(MAX) NULL,
	CONSTRAINT PK_Categories PRIMARY KEY(Id)
)

CREATE TABLE Movies (
	Id INT IDENTITY(1,1) NOT NULL,
	Title VARCHAR(50) NULL,
	DirectorId INT NULL,
	CopyrightYear INT NULL,
	Length INT NULL,
	GenreId INT NULL,
	CategoryId INT NULL,
	Rating INT Null,
	Notes NVARCHAR(MAX) NULL,
)

ALTER TABLE Movies ADD
	CONSTRAINT PK_Movies PRIMARY KEY(Id),
	CONSTRAINT FK_DirectorId FOREIGN KEY(DirectorId) REFERENCES Directors(Id),
	CONSTRAINT FK_GenreId FOREIGN KEY(GenreId) REFERENCES Genres(Id),
	CONSTRAINT FK_CategoryId FOREIGN KEY(CategoryId) REFERENCES Categories(Id)

INSERT INTO Directors(DirectorName, Notes) VALUES
('Joni', 'Notes1'),
('Joni Bravo', 'Notes2'),
('Bravo Joni', 'Notes3'),
('Heres Joni', 'Notes4'),
('Joni is here', 'Notes5')

INSERT INTO Genres(GenreName, Notes) VALUES
('Comedy', 'Funny'),
('Drama', 'Sad'),
('Love', 'love'),
('Action', 'BS'),
('Documental', 'Learning')

INSERT INTO Categories(CategoryName, Notes) VALUES
('cat1','Notes1'),
('cat2','Notes2'),
('cat3','Notes3'),
('cat4','Notes4'),
('cat5','Notes5');

INSERT INTO Movies(Title, DirectorId, CopyrightYear, Length, CategoryId, Rating, Notes) VALUES 
('Titanic', 1, 1998, 120, 4, 4, 'TItanicNotes'),
('Interstellar', 3, 2011, 140, 2, 5, 'InterstellarNotes'),
('IDK', 2, 2014, 90, 5, 5, 'IDKNotes'),
('Suits', 4, 2015, 48, 1, 2, 'SuitsNotes'),
('The100', 5, 2012, 49, 3, 5, 'The100Notes')

-- Problem 14. Car Rental Database
CREATE DATABASE CarRental 
GO

USE CarRental
GO

CREATE TABLE Categories (
	Id INT IDENTITY(1,1) NOT NULL,
	CategoryName VARCHAR(50) NULL,
	DailyRate DECIMAL(9,2) NULL,
	WeeklyRate DECIMAL(9,2) NULL,
	MonthlyRate DECIMAL(9,2) NULL,
	WeekendRate DECIMAL(9,2) NULL
)

ALTER TABLE Categories ADD
CONSTRAINT PK_Categories_Id PRIMARY KEY(Id)

CREATE TABLE Cars (
	Id INT IDENTITY(1,1) NOT NULL,
	PlateNumber VARCHAR(50) NULL,
	Manufacturer VARCHAR(50) NULL,
	Model VARCHAR(50) NULL,
	CarYear DATETIME2 NULL,
	CategoryId INT NULL,
	Doors VARCHAR(50) NULL,
	Picture VARBINARY(MAX) NULL,
	Condition VARCHAR(50) NULL,
	Available VARCHAR(3) NULL,
)

ALTER TABLE Cars ADD
CONSTRAINT PK_Cars_Id PRIMARY KEY(Id),
CONSTRAINT FK_Cars_CategoryId  FOREIGN KEY(CategoryId) REFERENCES Categories(Id),
CONSTRAINT DF_Cars_Available DEFAULT 'no' FOR Available

CREATE TABLE Employees(
	Id INT IDENTITY(1,1) NOT NULL,
	FirstName VARCHAR(50) NULL, 
	LastName VARCHAR(50) NULL, 
	Title VARCHAR(50) NULL,
	Notes NVARCHAR(MAX) NULL
)

ALTER TABLE Employees ADD
CONSTRAINT PK_Employees_Id PRIMARY KEY(Id)

CREATE TABLE Customers (
	Id INT IDENTITY(1,1) NOT NULL,
	DriverLicenceNumber VARCHAR(50) NULL,
	FullName VARCHAR(50) NULL,
	Address VARCHAR(255) NULL,
	City VARCHAR(50) NULL, 
	ZIPCode VARCHAR(50) NULL,
	Notes NVARCHAR(max) NULL, 
);

ALTER TABLE Customers ADD
CONSTRAINT PK_Customers_Id PRIMARY KEY(Id)

CREATE TABLE RentalOrders (
	Id INT IDENTITY(1,1) NOT NULL,
	EmployeeId INT NOT NULL,
	CustomerId INT NOT NULL,
	CarId INT NOT NULL,
	TankLevel DECIMAL(9,2),
	KilometrageStart INT, 
	KilometrageEnd INT, 
	TotalKilometrage INT, 
	StartDate DATETIME2, 
	EndDate DATETIME2, 
	TotalDays INT,
	RateApplied DECIMAL(9,2), 
	TaxRate DECIMAL(9,2), 
	OrderStatus VARCHAR(50),
	Notes NVARCHAR(MAX)
);

ALTER TABLE RentalOrders ADD
CONSTRAINT PK_RentalOrders_Id PRIMARY KEY(Id),
CONSTRAINT FK_RentalOrders_EmployeeId FOREIGN KEY(EmployeeId) REFERENCES Employees(Id),
CONSTRAINT FK_RentalOrders_CustomerId FOREIGN KEY(CustomerId) REFERENCES Customers(Id),
CONSTRAINT FK_RentalOrders_CarId FOREIGN KEY(CarId) REFERENCES Cars(Id)

INSERT INTO Categories(CategoryName, DailyRate, WeeklyRate, MonthlyRate, WeekendRate) VALUES
('Sport', 20, 120, 400, 50),
('Van', 10, 60, 200, 30),
('Jeep', 15, 80, 300, 40);

INSERT INTO Cars(PlateNumber, Manufacturer, Model, CarYear, CategoryId, Doors, Condition) VALUES
('CA1234CP', 'Renault', 'Laguna2', '2020-05-26', 1, 5, 'Used'),
('CA4321PC', 'Peugeot', '307', '2020-05-26', 2, 5, 'New'),
('CD9876OC', 'Subaru', 'WSX', '2009-03-01', 3, 3, 'Used');

INSERT INTO Employees(FirstName, LastName, Title) VALUES
('Pesho','Ivanov','bastun'),
('Gosho','Ivanov','bastun'),
('Stavri','Petkov','pulen bastun');

INSERT INTO Customers(DriverLicenceNumber, FullName, ZIPCode) VALUES
('123456789','Damian Ivanov',1281),
('987654321','Ivan Ivanov',1280),
('654321789','Pesho Petrov',1212);

INSERT INTO RentalOrders(EmployeeId, CustomerId, CarId) VALUES
(1,1,1),
(2,2,2),
(3,3,3);

-- Problem 15. Hotel Database
CREATE DATABASE Hotel 
GO

USE [Hotel]
GO

CREATE TABLE Employees (
	Id INT IDENTITY(1, 1) NOT NULL,
	FirstName VARCHAR(25),
	LastName VARCHAR(25),
	Title VARCHAR(25),
	Notes VARCHAR(255)
);

ALTER TABLE Employees ADD
CONSTRAINT PK_Employees_Id PRIMARY KEY(Id)

CREATE TABLE Customers (
	AccountNumber VARCHAR(255) NOT NULL,
	FirstName VARCHAR(25),
	LastName VARCHAR(25),
	PhoneNumber VARCHAR(50),
	EmergencyName VARCHAR(25),
	EmergencyNumber VARCHAR(50),
	Notes VARCHAR(255)
);

ALTER TABLE Customers ADD
CONSTRAINT PK_Customers_AccountNumber PRIMARY KEY(AccountNumber)

CREATE TABLE RoomStatus (
	RoomStatus VARCHAR(25) NOT NULL,
	Notes VARCHAR(255)
)

ALTER TABLE RoomStatus ADD
CONSTRAINT PK_RoomStatus_RoomStatus PRIMARY KEY(RoomStatus)

CREATE TABLE RoomTypes (
	RoomType VARCHAR(25) NOT NULL,
	Notes VARCHAR(255)
)

ALTER TABLE RoomTypes ADD
CONSTRAINT PK_RoomTypes_RoomType PRIMARY KEY(RoomType)

CREATE TABLE BedTypes (
	BedType VARCHAR(25) NOT NULL,
	Notes VARCHAR(255)
)

ALTER TABLE BedTypes ADD
CONSTRAINT PK_BedTypes_BedType PRIMARY KEY(BedType)

CREATE TABLE Rooms (
	RoomNumber VARCHAR(25),
	RoomStatus VARCHAR(25),
	RoomType VARCHAR(25),
	BedType VARCHAR(25),
	Rate DECIMAL(9,2),
	Notes VARCHAR(255)
)

ALTER TABLE Rooms ADD
CONSTRAINT FK_Rooms_RoomStatus FOREIGN KEY(RoomStatus) REFERENCES RoomStatus(RoomStatus),
CONSTRAINT FK_Rooms_RoomType FOREIGN KEY(RoomType) REFERENCES RoomTypes(RoomType),
CONSTRAINT FK_Rooms_BedType FOREIGN KEY(BedType) REFERENCES BedTypes(BedType)

CREATE TABLE Payments (
	Id INT IDENTITY(1,1) NOT NULL, 
	EmployeeId INT NOT NULL, 
	PaymentDate DATETIME2,
	AccountNumber VARCHAR(255) NOT NULL, 
	FirstDateOccupied DATETIME2, 
	LastDateOccupied DATETIME2, 
	TotalDays INT, 
	AmountCharged DECIMAL(9, 2), 
	TaxRate DECIMAL(9, 2), 
	TaxAmount DECIMAL(9, 2), 
	PaymentTotal DECIMAL(9, 2),
	Notes VARCHAR(255)
);

ALTER TABLE Payments ADD
CONSTRAINT PF_Payments_Id PRIMARY KEY(Id),
CONSTRAINT FK_Payments_AccountNumber FOREIGN KEY(AccountNumber) REFERENCES Customers(AccountNumber),
CONSTRAINT FK_Payments_EmployeeId FOREIGN KEY(EmployeeId) REFERENCES Employees(Id)

CREATE TABLE Occupancies (
	Id INT IDENTITY(1,1) NOT NULL, 
	EmployeeId INT NOT NULL,
	DateOccupied DATETIME2,
	AccountNumber VARCHAR(255) NOT NULL,
    RoomNumber VARCHAR(25),
	RateApplied DECIMAL(9,2), 
	PhoneCharge DECIMAL(9,2), 
	Notes VARCHAR(255)
);

ALTER TABLE Occupancies ADD
CONSTRAINT PF_Occupancies_Id PRIMARY KEY(Id),
CONSTRAINT FK_Occupancies_EmployeeId FOREIGN KEY(EmployeeId) REFERENCES Employees(Id),
CONSTRAINT FK_Occupancies_AccountNumber FOREIGN KEY(AccountNumber) REFERENCES Customers(AccountNumber)

INSERT INTO Employees(FirstName, LastName, Title, Notes) VALUES
('Gosho', 'Goshov', 'Host', 'whatever1'),
('Pesho', 'Peshov', 'Host', 'whatever2'),
('Stavri', 'Petkov', 'Host', 'whatever2');

INSERT INTO Customers(AccountNumber, FirstName, LastName, PhoneNumber) VALUES
('HOTEL-GG-11', 'Gosho', 'Goshov', '0889-999-99'),
('HOTEL-GG-222', 'Pesho', 'Peshov', '0889-999-99'),
('HOTEL-GG-333', 'Stavri', 'Petkov', '0889-999-99');

INSERT INTO RoomStatus(RoomStatus) VALUES
('ready'),
('taken'),
('cleaning');

INSERT INTO RoomTypes(RoomType) VALUES
('family'),
('double'),
('single');

INSERT INTO BedTypes(BedType) VALUES
('single'),
('double'),
('kingsize');

INSERT INTO Rooms(RoomNumber, RoomStatus, RoomType, BedType) VALUES
('420', 'ready', 'family', 'double'),
('520', 'ready', 'family', 'double'),
('620', 'taken', 'double', 'kingsize');

INSERT INTO Payments(EmployeeId, PaymentDate, AccountNumber, PaymentTotal, TaxRate) VALUES
(1, '2019-07-30', 'HOTEL-GG-11', 200, 20),
(2, '2019-08-30', 'HOTEL-GG-222', 300, 20),
(3, '2019-09-30', 'HOTEL-GG-333', 400, 20);

INSERT INTO Occupancies(EmployeeId, AccountNumber, RateApplied) VALUES
(1, 'HOTEL-GG-11', 200),
(2, 'HOTEL-GG-222', 300),
(3, 'HOTEL-GG-333', 500);

-- Problem 16. Create SoftUni Database
CREATE DATABASE SoftUni
GO

USE SoftUni
GO

CREATE TABLE Towns(
	Id INT IDENTITY(1,1) NOT NULL,
	Name VARCHAR(50)
)

ALTER TABLE Towns ADD
CONSTRAINT PK_Towns_Id PRIMARY KEY(Id)

CREATE TABLE Addresses(
	Id INT IDENTITY(1,1) NOT NULL,
	AddressText VARCHAR(50),
	TownId INT
)

ALTER TABLE Addresses ADD
CONSTRAINT PK_Addresses_Id PRIMARY KEY(Id),
CONSTRAINT FK_Addresses_TownId FOREIGN KEY(TownId) REFERENCES Towns(Id)

CREATE TABLE Departments (
	Id INT IDENTITY(1,1) NOT NULL,
	Name VARCHAR(50)
);

ALTER TABLE Departments ADD
CONSTRAINT PK_Departments_Id PRIMARY KEY(Id)

CREATE TABLE Employees (
	Id INT IDENTITY(1,1) NOT NULL,
	FirstName VARCHAR(50),
	MiddleName VARCHAR(50),
	LastName VARCHAR(50),
	JobTitle VARCHAR(50),
	DepartmentId INT,
	HireDate DATETIME2,
	Salary DECIMAL(9,2),
	AddressId INT
)

ALTER TABLE Employees ADD
CONSTRAINT PK_Employees_Id PRIMARY KEY(Id),
CONSTRAINT FK_Employees_DepartmentId FOREIGN KEY(DepartmentId) REFERENCES Departments(Id),
CONSTRAINT FK_Employees_AddressId FOREIGN KEY(AddressId) REFERENCES Addresses(Id)

-- Problem 17.	Backup Database
-- Databases -> SoftUni -> Tasks -> BackUp

-- Problem 18. Basic Insert
INSERT INTO Towns(Name) VALUES
('Sofia'), 
('Plovdiv'), 
('Varna'), 
('Burgas')

INSERT INTO Departments(Name) VALUES
('Engineering'), 
('Sales'), 
('Marketing'), 
('Software Development'),
('Quality Assurance')

INSERT INTO Employees(FirstName, MiddleName, LastName, JobTitle, DepartmentId, HireDate, Salary) VALUES
('Ivan', 'Ivanov', 'Ivanov', '.NET Developer', 4, '2013-02-01', 3500.00),
('Petar', 'Petrov', 'Petrov', 'Senior Engineer', 1, '2004-03-02', 4000.00),
('Maria', 'Petrova', 'Ivanova', 'Intern', 5, '2016-08-28', 525.25),
('Georgi', 'Teziev', 'Ivanov', 'CEO', 2, '2007-12-09', 3000.00),
('Peter', 'Pan', 'Pan', 'Intern', 3, '2016-08-28', 599.88)

-- Problem 19.	Basic Select All Fields
SELECT * FROM Towns;
SELECT * FROM Departments;
SELECT * FROM Employees;

-- Problem 20.	Basic Select All Fields and Order Them
SELECT * FROM Towns ORDER BY Name ASC;
SELECT * FROM Departments ORDER BY Name ASC;
SELECT * FROM Employees ORDER BY Salary DESC;

-- Problem 21.	Basic Select Some Fields
SELECT Name FROM Towns ORDER BY Name ASC;
SELECT Name FROM Departments ORDER BY Name ASC;
SELECT FirstName, LastName, JobTitle, Salary FROM Employees ORDER BY Salary DESC;

-- Problem 22.	Increase Employees Salary
UPDATE Employees
SET Salary *= 1.1

SELECT Salary FROM Employees;

-- Problem 23. Decrease Tax Rate
USE Hotel
UPDATE Payments
SET TaxRate /= 1.03;

SELECT TaxRate FROM Payments;

-- Problem 24.	Delete All Records
USE Hotel
TRUNCATE TABLE Occupancies

-- DROP EVERYTHING FROM EXERCISE
USE [master]
DROP DATABASE Minions
DROP DATABASE Movies
DROP DATABASE CarRental
DROP DATABASE Hotel
DROP DATABASE SoftUni
