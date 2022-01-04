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

-- PROBLEM 13.