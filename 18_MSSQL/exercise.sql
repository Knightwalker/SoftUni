-- PROBLEM 1. Create Database
CREATE DATABASE Minions
GO

USE Minions
GO

-- PROBLEM 2. Create Table
CREATE TABLE Minions (
	Id INT IDENTITY(1, 1) NOT NULL,
	[Name] VARCHAR(50) NOT NULL,
	Age INT NULL
	CONSTRAINT [PK_Minions_Id] PRIMARY KEY (Id)
);

CREATE TABLE Towns (
	Id INT IDENTITY(1, 1) NOT NULL,
	[Name] VARCHAR(50) NOT NULL
	CONSTRAINT [PK_Towns] PRIMARY KEY (Id)
);
GO

-- PROBLEM 3. Alter Minions Table
ALTER TABLE Minions
	ADD TownId INT
	CONSTRAINT FK_Minions_TownsId FOREIGN KEY REFERENCES Towns(Id)

-- PROBLEM 4. Insert Records in Both Tables
SET IDENTITY_INSERT Towns ON;
GO

INSERT
INTO Towns (Id, [Name])
VALUES 
(1, 'Sofia'),
(2, 'Plovdiv'),
(3, 'Varna')

SET IDENTITY_INSERT Towns OFF;
GO

SET IDENTITY_INSERT Minions ON;
GO

INSERT
INTO Minions (Id, [Name], Age, TownId)
VALUES 
(1, 'Kevin', 22, 1), 
(2, 'Bob', 15, 3), 
(3, 'Steward', NULL, 2)

SET IDENTITY_INSERT Minions OFF;
GO

-- Problem 5. Truncate Table Minions and Towns
ALTER TABLE Minions 
DROP CONSTRAINT FK_Minions_TownsId;
GO

TRUNCATE TABLE Towns
TRUNCATE TABLE Minions

-- Problem 6. Delete Table
DROP TABLE Towns
DROP TABLE Minions

-- Problem 6.2. Delete Database
-- IF DROP fails, then in SSMS: Right click database: Properties -> Options -> Restrict Access : Set to "Single User" and perform the drop afterwards.
USE MASTER
GO

DROP DATABASE Minions

-- PROBLEM 7.
CREATE TABLE People (
	Id INT IDENTITY(1,1),
	[Name] VARCHAR(200) NOT NULL,
	Picture VARBINARY(MAX),
	Height DECIMAL(3, 2),
	[Weight] DECIMAL(5, 2),
	Gender CHAR(1) NOT NULL,
	Birthday DATETIME2 NOT NULL,
	Biography NVARCHAR(MAX),
	CONSTRAINT PK_People PRIMARY KEY(Id)
);

INSERT INTO People ([Name], Height, [Weight], Gender, Birthday, Biography) 
VALUES
('Kali', 1.73, 58.00, 'f', '1999-02-22', 'Very kind person. Study in UNSS, Softuni and NBU. Work in DSK Bank.'),
('Kris', 1.80, 64.00, 'm', '1996-03-23', 'Very kind person. Study in NSA, SoftUni and NBU. Work in DXC Technology.'),
('Dris', 1.86, 80.00, 'm', '1999-02-22', 'Train hard.'),
('Kapina', 1.60, 51.00, 'f', '1981-05-28', 'Very kind person.'),
('Malina', 1.80, 75.00, 'f', '1994-03-23', N'Обича мишичко');

-- PROBLEM 8.
CREATE TABLE Users (
	Id BIGINT IDENTITY(1,1),
	Username VARCHAR(30) NOT NULL,
	[Password] VARCHAR(26) NOT NULL,
	ProfilePicture VARBINARY(MAX) NULL,
	LastLoginTime DATETIME2 NULL,
	IsDeleted BIT CONSTRAINT DF_Users_IsDeleted DEFAULT 0 NOT NULL,
	CONSTRAINT PK_Users PRIMARY KEY(Id),
	CONSTRAINT UQ_Users UNIQUE (Username)
);

INSERT INTO Users (Username, [Password], LastLoginTime)
VALUES 
('test1', 'test123', '2022-03-01'),
('test6', 'test123', '2022-03-01'),
('test7', 'test123', '2022-03-01'),
('test8', 'test123', '2022-03-01'),
('test9', 'test123', '2022-03-01');

-- PROBLEM 9.
ALTER TABLE Users
DROP CONSTRAINT PK_Users
GO

ALTER TABLE Users
ADD CONSTRAINT PK_Users PRIMARY KEY(Id, Username)
GO

-- PROBLEM 10.
ALTER TABLE Users
ADD CONSTRAINT CH_PasswordIsAtleast5Symbols CHECK (LEN(Password) >= 5)
GO

-- PROBLEM 11.
ALTER TABLE Users
ADD CONSTRAINT DF_LastLoginTime DEFAULT GETDATE() FOR LastLoginTime

-- PROBLEM 12.
ALTER TABLE Users
DROP CONSTRAINT PK_Users
GO

ALTER TABLE Users
ADD CONSTRAINT PK_Users PRIMARY KEY(Id)
GO

ALTER TABLE Users
ADD CONSTRAINT CH_UsernameIsAtleast3Symbols CHECK (LEN(Username) >= 3)
GO

-- PROBLEM 13. Movies Database

CREATE DATABASE Movies
GO

USE Movies
GO

CREATE TABLE Directors (
	Id INT IDENTITY(1,1) NOT NULL,
	DirectorName VARCHAR(50) NOT NULL,
	Notes NVARCHAR(MAX) NULL
	CONSTRAINT PK_Directors PRIMARY KEY (Id)
);

CREATE TABLE Genres (
	Id INT IDENTITY(1,1) NOT NULL,
	GenreName VARCHAR(50) NOT NULL,
	Notes NVARCHAR(MAX) NULL,
	CONSTRAINT PK_Genres PRIMARY KEY (Id)
);

CREATE TABLE Categories (
	Id INT IDENTITY(1,1) NOT NULL,
	CategoryName VARCHAR(50) NOT NULL,
	Notes NVARCHAR(MAX) NULL,
	CONSTRAINT PK_Categories PRIMARY KEY (Id)
);

CREATE TABLE Movies (
	Id INT IDENTITY(1,1) NOT NULL,
	Title VARCHAR(50) NOT NULL,
	DirectorId INT,
	CopyrightYear DATETIME2,
	[Length] INT,
	GenreId INT,
	CategoryId INT,
	Rating INT,
	Notes NVARCHAR(MAX) NULL,
	CONSTRAINT PK_Movies PRIMARY KEY (Id),
	CONSTRAINT FK_DirectorId FOREIGN KEY(DirectorId) REFERENCES Directors(Id),
	CONSTRAINT FK_GenreId FOREIGN KEY(GenreId) REFERENCES Genres(Id),
	CONSTRAINT FK_CategoryId FOREIGN KEY(CategoryId) REFERENCES Categories(Id)
);

INSERT INTO Directors (DirectorName, Notes) 
VALUES
('bob', 'nice movies for next week'),
('bob2', 'nice movies for next week'),
('bob3', 'nice movies for next week'),
('bob4', 'nice movies for next week'),
('bob5', 'nice movies for next week')

INSERT INTO Genres (GenreName, Notes) 
VALUES
('fantasy', 'nice movie for good kids'),
('horror', 'nice movie for bad kids'),
('horror', 'nice movie for bad kids'),
('horror', 'nice movie for bad kids'),
('horror', N'някав филм')

INSERT INTO Categories(CategoryName, Notes) 
VALUES
('top10', 'for netflix promotions'),
('mind bending', 'for twisted souls'),
('action', 'for batman'),
('adult', '+18 only'),
('kids', 'for kids')

INSERT INTO Movies(Title, DirectorId, CopyrightYear, [Length], GenreId, CategoryId, Rating, Notes) 
VALUES 
('Titanic', 1, '2000-12-03', 120, 1, 1, 10, 'some notes'),
('Interstellar', 1, '2000-12-03', 140, 1, 1, 10, 'some notes'),
('IDK', 1, '2000-12-03', 90, 1, 1, 10, 'some notes'),
('Suits', 1, '2000-12-03', 48, 1, 1, 10, 'some notes'),
('The100', 1, '2000-12-03', 49, 1, 1, 10, 'some notes')

-- PROBLEM 14. Car Rental Database

CREATE DATABASE CarRental
GO

USE CarRental
GO

CREATE TABLE Categories (
	Id INT IDENTITY(1,1) NOT NULL
		CONSTRAINT PK_Categories PRIMARY KEY (Id),
	CategoryName VARCHAR(50) NOT NULL,
	DailyRate DECIMAL(9, 2) NULL,
	WeeklyRate DECIMAL(9, 2) NULL,
	MonthlyRate DECIMAL(9, 2) NULL,
	WeekendRate DECIMAL(9, 2) NULL,
);

CREATE TABLE Cars (
	Id INT IDENTITY(1,1) NOT NULL
		CONSTRAINT PK_Cars PRIMARY KEY (Id), 
	PlateNumber VARCHAR(50) NOT NULL,
	Manufacturer VARCHAR(50) NOT NULL, 
	Model VARCHAR(50) NOT NULL, 
	CarYear DATETIME2 NOT NULL, 
	CategoryId INT NULL
		CONSTRAINT FK_Cars_CategoryId FOREIGN KEY(CategoryId) REFERENCES Categories(Id), 
	Doors INT NOT NULL, 
	Picture VARBINARY(MAX) NULL, 
	Condition VARCHAR(50) NOT NULL, 
	Available BIT NULL
		CONSTRAINT DF_Cars_Available DEFAULT 0,
);

CREATE TABLE Employees (
	Id INT IDENTITY(1,1) NOT NULL
		CONSTRAINT PK_Employees PRIMARY KEY (Id), 
	FirstName VARCHAR(50) NULL, 
	LastName VARCHAR(50) NULL, 
	Title VARCHAR(50) NULL, 
	Notes NVARCHAR(MAX) NULL,
);

CREATE TABLE Customers (
	Id INT IDENTITY(1,1) NOT NULL
		CONSTRAINT PK_Customers PRIMARY KEY (Id), 
	DriverLicenceNumber VARCHAR(50) NOT NULL, 
	FullName VARCHAR(50) NULL,
	[Address] VARCHAR(50) NULL,
	City VARCHAR(50) NULL,
	ZIPCode VARCHAR(50) NULL,
	Notes NVARCHAR(MAX) NULL,
);

CREATE TABLE RentalOrders (
	Id INT IDENTITY(1,1) NOT NULL
		CONSTRAINT PK_RentalOrders PRIMARY KEY (Id),
	EmployeeId INT NOT NULL
		CONSTRAINT FK_RentalOrders_EmployeeId FOREIGN KEY(EmployeeId) REFERENCES Employees(Id),
	CustomerId INT NOT NULL
		CONSTRAINT FK_RentalOrders_CustomerId FOREIGN KEY(CustomerId) REFERENCES Customers(Id),
	CarId INT NOT NULL
		CONSTRAINT FK_RentalOrders_CarId FOREIGN KEY(CarId) REFERENCES Cars(Id),
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


INSERT INTO Categories(CategoryName, DailyRate, WeeklyRate, MonthlyRate, WeekendRate) VALUES
('Sport', 20, 120, 400, 50),
('Van', 10, 60, 200, 30),
('Jeep', 15, 80, 300, 40);

INSERT INTO Cars(PlateNumber, Manufacturer, Model, CarYear, CategoryId, Doors, Condition) VALUES
('CA1234CP', 'Renault', 'Laguna2', '2020-05-26', 1, 4, 'Used'),
('CA4321PC', 'Peugeot', '307', '2020-05-26', 2, 4, 'New'),
('CD9876OC', 'Subaru', 'WSX', '2009-03-01', 3, 2, 'Used');

INSERT INTO Employees(FirstName, LastName, Title) VALUES
('Pesho','Ivanov','bastun'),
('Gosho','Ivanov','bastun'),
('Stavri','Petkov','pulen bastun');

INSERT INTO Customers(DriverLicenceNumber, FullName, ZIPCode) VALUES
('123456789','Damian Ivanov', '1281'),
('987654321','Ivan Ivanov', '1280'),
('654321789','Pesho Petrov', '1212');

INSERT INTO RentalOrders(EmployeeId, CustomerId, CarId) VALUES
(1,1,1),
(2,2,2),
(3,3,3);

-- PROBLEM 15.

CREATE DATABASE Hotel
GO

USE Hotel
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

INSERT INTO Payments(EmployeeId, PaymentDate, AccountNumber, PaymentTotal) VALUES
(1, '2019-07-30', 'HOTEL-GG-11', 200),
(2, '2019-08-30', 'HOTEL-GG-222', 300),
(3, '2019-09-30', 'HOTEL-GG-333', 400);

INSERT INTO Occupancies(EmployeeId, AccountNumber, RateApplied) VALUES
(1,'HOTEL-GG-11',200),
(2,'HOTEL-GG-222',300),
(3,'HOTEL-GG-333',500);

-- PROBLEM 16.

CREATE DATABASE Softuni
GO

USE Softuni
GO

CREATE TABLE Towns (
	Id INT IDENTITY(1,1) NOT NULL
		CONSTRAINT PK_Towns_Id PRIMARY KEY,
	[Name] VARCHAR(50) NOT NULL
);

CREATE TABLE Addresses (
	Id INT IDENTITY(1,1) NOT NULL
		CONSTRAINT PK_Addresses_Id PRIMARY KEY, 
	AddressText VARCHAR(50) NOT NULL, 
	TownId INT NULL
		CONSTRAINT FK_Adresses_TownId REFERENCES Towns(Id)
);

CREATE TABLE Departments (
	Id INT IDENTITY(1,1) NOT NULL
		CONSTRAINT PK_Departments_Id PRIMARY KEY,
	[Name] VARCHAR(50) NOT NULL
);

CREATE TABLE Employees (
	Id INT IDENTITY(1,1) NOT NULL
		CONSTRAINT PK_Employees_Id PRIMARY KEY,
	FirstName VARCHAR(50) NOT NULL, 
	MiddleName VARCHAR(50) NOT NULL, 
	LastName VARCHAR(50) NOT NULL, 
	JobTitle VARCHAR(50) NULL, 
	DepartmentId INT NULL
		CONSTRAINT FK_Employees_DepartmentId REFERENCES Departments(Id), 
	HireDate DATETIME NULL, 
	Salary DECIMAL (9, 2) NULL, 
	AddressId INT NULL
		CONSTRAINT FK_Employees_AdressId REFERENCES Addresses(Id)
);

-- PROBLEM 17. Backup Database

-- PROBLEM 18. Basic Insert
INSERT INTO Towns([Name]) VALUES
('Sofia'),
('Plovdiv'),
('Varna'),
('Burgas')

INSERT INTO Departments([Name]) VALUES
('Engineering'),
('Sales'),
('Marketing'),
('Software Development'),
('Quality Assurance')

INSERT INTO Employees(FirstName, MiddleName, LastName, JobTitle, DepartmentId, HireDate, Salary) VALUES
('Ivan', 'Ivanov', 'Ivanov', '.NET Developer', 4, 01/02/2013, 3500.00),
('Petar', 'Petrov', 'Petrov',	'Senior Engineer',	1, 02/03/2004, 4000.00),
('Maria', 'Petrova', 'Ivanova', 'Intern', 5, 28/08/2016, 525.25),
('Georgi', 'Teziev', 'Ivanov', 'CEO', 2, 09/12/2007, 3000.00),
('Peter', 'Pan', 'Pan',	'Intern', 3, 28/08/2016, 599.88);

-- PROBLEM 19. Basic Select All Fields
SELECT * FROM Towns;
SELECT * FROM Departments;
SELECT * FROM Employees;

-- Problem 20. Basic Select All Fields and Order Them
SELECT * FROM Towns 
ORDER BY Name ASC;

SELECT * FROM Departments 
ORDER BY Name ASC;

SELECT * FROM Employees 
ORDER BY Salary DESC;

-- Problem 21. Basic Select Some Fields
SELECT [Name] FROM Towns 
ORDER BY Name ASC;

SELECT [Name] FROM Departments 
ORDER BY Name ASC;

SELECT FirstName, LastName, JobTitle, Salary FROM Employees 
ORDER BY Salary DESC;

-- Problem 22. Increase Employees Salary
UPDATE Employees
SET Salary = Salary * 1.1

SELECT Salary FROM Employees;

-- PROBLEM 23. Decrease Tax Rate
USE Hotel
GO

UPDATE Payments
SET TaxRate /= 1.03;

SELECT TaxRate FROM Payments;

-- Problem 24. Delete All Records
TRUNCATE TABLE Occupancies