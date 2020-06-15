-- Problem 1. Find Names of All Employees by First Name
SELECT 
	FirstName, 
	LastName 
FROM
	Employees
WHERE
	FirstName LIKE 'SA%';

-- Problem 2. Find Names of All employees by Last Name
SELECT
	FirstName,
	LastName
FROM
	Employees
WHERE 
	LastName LIKE '%EI%';

-- Problem 3. Find First Names of All Employees
SELECT FirstName 
FROM Employees
WHERE 
	(DepartmentID = 3 OR DepartmentID = 10) 
	AND YEAR(HireDate) >= 1995 AND YEAR(HireDate) <= 2005;

-- Problem 4. Find All Employees Except Engineers
SELECT 
	e.FirstName,
	e.LastName
FROM Employees AS e
WHERE
	e.JobTitle NOT LIKE '%engineer%'

-- Problem 5. Find Towns with Name Length
SELECT t.Name
FROM Towns AS t
WHERE LEN(t.Name) >= 5 AND LEN(t.Name) <= 6
ORDER BY t.Name ASC

-- Problem 6. Find Towns Starting With
SELECT 
	t.TownID,
	t.Name
FROM Towns AS t
WHERE 
	SUBSTRING(t.Name, 1, 1) = 'M' OR
	SUBSTRING(t.Name, 1, 1) = 'K' OR
	SUBSTRING(t.Name, 1, 1) = 'B' OR
	SUBSTRING(t.Name, 1, 1) = 'E'
ORDER BY
	t.Name ASC

-- 7. Find Towns Not Starting With
SELECT 
	t.TownID,
	t.Name
FROM Towns AS t
WHERE 
	SUBSTRING(t.Name, 1, 1) != 'R' AND
	SUBSTRING(t.Name, 1, 1) != 'B' AND
	SUBSTRING(t.Name, 1, 1) != 'D'
ORDER BY
	t.Name ASC

-- Problem 8. Create View Employees Hired After 2000 Year
GO
CREATE VIEW V_EmployeesHiredAfter2000 AS
SELECT 
	e.FirstName,
	e.LastName
FROM Employees AS e
WHERE YEAR(e.HireDate) > 2000
GO

-- Problem 9. Length of Last Name
SELECT 
	e.FirstName,
	e.LastName
FROM Employees AS e
WHERE LEN(e.LastName) = 5;

-- Problem 10. Rank Employees by Salary
SELECT 
	e.EmployeeID,
	e.FirstName,
	e.LastName,
	e.Salary,
	DENSE_RANK () OVER ( 
		PARTITION BY e.Salary
		ORDER BY e.EmployeeID
	) AS [Rank]
FROM Employees AS e
WHERE e.Salary >= 10000 AND e.Salary <= 50000
ORDER BY e.Salary DESC

-- Problem 11. Find All Employees with Rank 2 *
SELECT * FROM
	(SELECT 
		e.EmployeeID,
		e.FirstName,
		e.LastName,
		e.Salary,
		DENSE_RANK () OVER ( 
			PARTITION BY e.Salary
			ORDER BY e.EmployeeID
		) AS [Rank]
	FROM Employees AS e
	WHERE e.Salary >= 10000 AND e.Salary <= 50000) AS e
WHERE e.Rank = 2
ORDER BY e.Salary DESC

-- Problem 12. Countries Holding ‘A’ 3 or More Times
SELECT
	c.CountryName,
	c.IsoCode
FROM Countries AS c
WHERE c.CountryName LIKE '%a%a%a%'
ORDER BY c.IsoCode ASC

-- Problem 13. Mix of Peak and River Names
SELECT 
	p.PeakName,
	r.RiverName,
    CONCAT(LOWER(p.PeakName), LOWER(SUBSTRING(r.RiverName, 2, LEN(r.RiverName)))) AS [Mix]       
FROM Peaks AS p, Rivers AS r 
WHERE RIGHT(p.PeakName, 1) = LEFT(r.RiverName, 1)
ORDER BY [Mix]

-- Problem 14. Games from 2011 and 2012 year
SELECT TOP 50 
	g.[Name],
	FORMAT(g.[Start], 'yyyy-MM-dd') AS [Start]
FROM Games AS g
WHERE YEAR(g.Start) IN (2011, 2012)
ORDER BY 
	[Start] ASC,
    g.Name ASC;

-- Problem 15. User Email Providers
SELECT 
	u.[Username],
	SUBSTRING(u.[Email], CHARINDEX('@', u.[Email], 1) + 1, LEN(u.[Email])) AS [Email Provider]
FROM Users AS u
ORDER BY
	[Email Provider] ASC,
	u.[Username] ASC

-- Problem 16. Get Users with IPAdress Like Pattern
SELECT 
	u.Username,
	u.IpAddress
FROM Users AS u
WHERE u.IpAddress LIKE '___.1%.%.___'
ORDER BY u.Username

-- Problem 17. Show All Games with Duration and Part of the Day
SELECT 
	g.[Name] AS [Game],
	CASE
		WHEN DATEPART(HOUR, g.Start) >= 0 AND DATEPART(HOUR, g.Start) < 12 THEN 'Morning'
        WHEN DATEPART(HOUR, g.Start) >= 12 AND DATEPART(HOUR, g.Start) < 18 THEN 'Afternoon'
        WHEN DATEPART(HOUR, g.Start) >= 18 AND DATEPART(HOUR, g.Start) < 24 THEN 'Evening'
    END AS [Part of the Day],
	CASE
		WHEN g.[Duration] <= 3 THEN 'Extra Short'
		WHEN g.[Duration] >= 4 AND g.[Duration] <= 6 THEN 'Short'
		WHEN g.[Duration] >= 6 THEN 'Long'
		ELSE 'Extra Long'
	END AS [Duration]
FROM Games AS g
ORDER BY
	[Game] ASC,
	[Duration] ASC;

-- Problem 18. Orders Table
SELECT 
	o.ProductName,
	o.OrderDate,
	DATEADD(DAY, 3, o.OrderDate) AS [Pay Due],
	DATEADD(MONTH, 1, o.OrderDate) AS [Deliver Due]
FROM Orders AS o

-- Problem 19. People Table
CREATE TABLE People (
    Id INT IDENTITY(1, 1) NOT NULL,
    Name NVARCHAR(50) NOT NULL,
    Birthdate DATETIME NOT NULL,

    CONSTRAINT PK_People
    PRIMARY KEY (Id)
)

INSERT INTO People (Name, Birthdate) 
     VALUES ('Victor', '2000-12-07'),
            ('Steven', '1992-09-10'),
            ('Stephen', '1910-09-19'),
            ('John', '2010-01-06')

SELECT p.Name,
       DATEDIFF(YEAR, p.Birthdate, GETDATE()) AS [Age in Years],
       DATEDIFF(MONTH, p.Birthdate, GETDATE()) AS [Age in Months],
       DATEDIFF(DAY, p.Birthdate, GETDATE()) AS [Age in Days],
       DATEDIFF(MINUTE, p.Birthdate, GETDATE()) AS [Age in Minutes]
  FROM People AS p