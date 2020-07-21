CREATE DATABASE Airport
GO

USE Airport
GO
--Problem 01. Database Design
CREATE TABLE Planes(
	Id INT PRIMARY KEY IDENTITY(1, 1),
	[Name] varchar(30) NOT NULL,
	Seats INT NOT NULL,
	Range INT NOT NULL
);

CREATE TABLE Flights(
	Id INT PRIMARY KEY IDENTITY(1, 1),
	DepartureTime DATETIME,
	ArrivalTime DATETIME,
	Origin varchar(50) NOT NULL,
	Destination varchar(50) NOT NULL,
	PlaneId INT NOT NULL
);

ALTER TABLE Flights
ADD FOREIGN KEY (PlaneId) REFERENCES Planes(Id);

CREATE TABLE Passengers(
	Id INT PRIMARY KEY IDENTITY(1, 1),
	FirstName varchar(30) NOT NULL,
	LastName varchar(30) NOT NULL,
	Age INT NOT NULL,
	[Address] varchar(30) NOT NULL,
	PassportId varchar(11) NOT NULL,
);

CREATE TABLE LuggageTypes(
	Id INT PRIMARY KEY IDENTITY(1, 1),
	[Type] varchar(30) NOT NULL,
);

CREATE TABLE Luggages(
	Id INT PRIMARY KEY IDENTITY(1, 1),
	LuggageTypeId INT NOT NULL,
	PassengerId INT NOT NULL,
);

ALTER TABLE Luggages
ADD FOREIGN KEY (LuggageTypeId) REFERENCES LuggageTypes(Id),
	FOREIGN KEY (PassengerId) REFERENCES Passengers(Id);


CREATE TABLE Tickets(
	Id INT PRIMARY KEY IDENTITY(1, 1),
	PassengerId INT NOT NULL,
	FlightId INT NOT NULL,
	LuggageId INT NOT NULL,
	Price DECIMAL(9, 2) NOT NULL
);

ALTER TABLE Tickets
ADD FOREIGN KEY (PassengerId) REFERENCES Passengers(Id),
	FOREIGN KEY (FlightId) REFERENCES Flights(Id),
	FOREIGN KEY (LuggageId) REFERENCES Luggages(Id);

--Problem 02. Insert
INSERT INTO Planes([Name], [Seats], [Range])
VALUES
('Airbus 336', 112, 5132),
('Airbus 330', 432, 5325),
('Boeing 369', 231, 2355),
('Stelt 297', 254, 2143),
('Boeing 338', 165, 5111),
('Airbus 558', 387, 1342),
('Boeing 128', 345, 5541)

INSERT INTO [LuggageTypes] ([Type])
VALUES
('Crossbody Bag'),
('School Backpack'),
('Shoulder Bag')

--Problem 03. Update
UPDATE t
SET Price = Price + 0.13 * Price
FROM [Tickets] t
INNER JOIN Flights f ON t.FlightId = f.Id
WHERE Destination = 'Carlsbad'

--Problem 04. Delete
ALTER TABLE Tickets
ALTER COLUMN FlightId INT NULL

UPDATE Tickets
SET FlightId = NULL
FROM Tickets t
JOIN Flights f ON t.FlightId = f.Id
WHERE Destination = 'Ayn Halagim'

DELETE
FROM Flights
WHERE Destination = 'Ayn Halagim'

--Problem 05. The "Tr" Planes
SELECT *
FROM Planes p
WHERE p.[Name] LIKE '%tr%'
ORDER BY Id, Name, Seats, Range

--Problem 06. Flight Profits
SELECT FlightId, SUM(t.Price) AS 'Price'
FROM Tickets t
GROUP BY FlightId
ORDER BY Price DESC, FlightId

--Problem 07. Passenger Trips
SELECT CONCAT(p.FirstName, ' ', p.LastName) AS [FullName], f.Origin, f.Destination
FROM Passengers p
JOIN Tickets t ON t.PassengerId = p.Id
JOIN Flights f ON t.FlightId = f.Id
ORDER BY [FullName], f.Origin, f.Destination

--Problem 08. Non Adventures People
SELECT p.FirstName, p.LastName, p.Age
FROM Passengers p
WHERE p.Id NOT IN (SELECT PassengerId FROM Tickets)
ORDER BY p.Age DESC, p.FirstName, p.LastName

--Problem 09. Full Info
SELECT  CONCAT(p.FirstName, ' ', p.LastName) AS [FullName],
		pl.Name AS [PlaneName],
		CONCAT(f.Origin, ' - ', f.Destination) AS Trip,
		lt.Type AS [LuggageType]
FROM Passengers p
INNER JOIN Tickets t ON t.PassengerId = p.Id
INNER JOIN Flights f ON t.FlightId = f.Id
INNER JOIN Planes pl ON f.PlaneId = pl.Id
INNER JOIN Luggages l ON l.Id = t.LuggageId
INNER JOIN LuggageTypes lt ON lt.Id = l.LuggageTypeId
ORDER BY FullName, Name, f.Origin, f.Destination, LuggageType

--Problem 10. PSP
SELECT p.Name, p.Seats AS Seats, COUNT(t.PassengerId) AS [PassengersCount]
FROM Planes p
LEFT JOIN Flights f ON p.Id = f.PlaneId
LEFT JOIN Tickets t ON t.FlightId = f.Id
GROUP BY p.Name, p.Seats
ORDER BY [PassengersCount] DESC, p.Name, Seats

--Problem 11. Vacation
CREATE FUNCTION udf_CalculateTickets(@origin VARCHAR(50), @destination VARCHAR(50), @peopleCount INT)
RETURNS VARCHAR(40)
AS
	BEGIN
		IF @peopleCount <= 0
			RETURN 'Invalid people count!'
		DECLARE @flight INT = (
			SELECT Id
			FROM Flights
			WHERE Origin = @origin AND Destination = @destination
			)
		IF @flight IS NULL
			RETURN 'Invalid flight!'

		DECLARE @totalPrice DECIMAL(9,2) = (
			SELECT Price
			FROM Tickets
			WHERE FlightId = @flight
		)

		RETURN CONCAT('Total price ', (@peopleCount * @totalPrice)) 
	END
GO

--Problem 12. Wrong Data
CREATE PROC usp_CancelFlights
AS
	UPDATE Flights
	SET ArrivalTime = NULL,
	DepartureTime = NULL
	WHERE ArrivalTime > DepartureTime
GO