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