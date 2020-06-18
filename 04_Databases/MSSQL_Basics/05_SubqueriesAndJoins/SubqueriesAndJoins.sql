USE SoftUni
GO

-- Problem 1. Employee Address
SELECT TOP (5)
	e.EmployeeId,
	e.JobTitle,
	a.AddressID,
	a.AddressText
FROM Employees AS e
JOIN Addresses AS a ON e.AddressID = a.AddressID
ORDER BY AddressID

-- Problem 2. Addresses with Towns
SELECT TOP(50)
	e.FirstName, e.LastName, t.[Name] as Town, a.AddressText
FROM Employees e
JOIN Addresses a ON e.AddressID = a.AddressID
JOIN Towns t ON a.TownID = t.TownID
ORDER BY e.FirstName, e.LastName

-- Problem 3. Sales Employee
SELECT e.EmployeeID, e.FirstName, e.LastName, d.[Name] as DepartmentName
FROM Employees e
JOIN Departments d ON e.DepartmentID = d.DepartmentID
WHERE d.[Name] = 'Sales'
ORDER BY e.EmployeeID

-- Problem 4. Employee Departments
SELECT TOP (5)
	e.EmployeeID,
	e.FirstName,
	e.Salary,
	d.[Name] as DepartmentName
FROM Employees AS e
JOIN Departments AS d ON e.DepartmentID = d.DepartmentID
WHERE e.Salary > 15000
ORDER BY d.DepartmentID ASC

-- Problem 5. Employees Without Project
SELECT TOP(3) e.EmployeeID, e.FirstName
FROM Employees e
WHERE e.EmployeeID not in 
	(
		SELECT EmployeeID
		FROM EmployeesProjects
	)
ORDER BY e.EmployeeID

SELECT TOP(3) e.EmployeeID, e.FirstName
FROM Employees e
LEFT JOIN EmployeesProjects ep ON e.EmployeeID = ep.EmployeeID
WHERE ep.ProjectID is NULL
ORDER BY e.EmployeeID

-- Problem 6. Employees Hired After
SELECT e.FirstName, e.LastName, e.HireDate, d.[Name] as DeptName
FROM Employees e
JOIN Departments d ON e.DepartmentID = d.DepartmentID
WHERE e.HireDate > '01-01-1999' and d.Name in ('Sales','Finance')
ORDER BY e.HireDate

-- Problem 7. Employees with Project
SELECT TOP(5)
	e.EmployeeID,
	e.FirstName,
	p.[Name] AS ProjectName
FROM Employees AS e
JOIN EmployeesProjects AS ep ON e.EmployeeID = ep.EmployeeID
JOIN Projects AS p ON ep.ProjectID = p.ProjectID
WHERE p.StartDate > '08-13-2002' AND p.EndDate IS NULL
ORDER BY e.EmployeeID ASC

-- Problem 8. Employee 24
SELECT e.EmployeeID, e.FirstName, 
	CASE
		WHEN YEAR(p.StartDate) >= 2005 THEN NULL
		ELSE p.[Name] 
	END AS ProjectName
FROM Employees e
JOIN EmployeesProjects ep ON e.EmployeeID = ep.EmployeeID
JOIN Projects p ON ep.ProjectID = p.ProjectID
WHERE e.EmployeeID = 24

-- Problem 9. Employee Manager
SELECT e.EmployeeID, e.FirstName, e.ManagerID, e2.FirstName as [ManagerName]
FROM Employees e
JOIN Employees e2 ON e.ManagerID = e2.EmployeeID
WHERE e.ManagerID in (3, 7)
ORDER BY e.EmployeeID

-- Problem 10. Employee Summary
SELECT TOP(50)
	e.EmployeeID, 
	CONCAT(e.FirstName, ' ', e.LastName) AS EmployeeName, 
	CONCAT(e2.FirstName, ' ', e2.LastName) AS ManagerName, 
	d.[Name] AS DepartmentName
FROM Employees e
LEFT JOIN Employees e2 ON e.ManagerID = e2.EmployeeID
JOIN Departments d ON e.DepartmentID = d.DepartmentID
ORDER BY e.EmployeeID

-- Problem 11. Min Average Salary
SELECT TOP (1) 
	(
		SELECT AVG(Salary)
	)
	AS AVERAGESALARY
FROM Employees
GROUP BY DepartmentID
ORDER BY AVERAGESALARY

SELECT   
	MIN(a.AverageSalary) AS MinAverageSalary
  FROM 
  (
     SELECT e.DepartmentID, 
            AVG(e.Salary) AS AverageSalary
       FROM Employees AS e
   GROUP BY e.DepartmentID
  ) AS a

SELECT 
	MIN(t1.AverageSalaryByDepartments) AS MinAverageSalary
FROM
	(
		SELECT
			d.[Name],
			AVG(e.Salary) AS AverageSalaryByDepartments
		FROM Employees AS e
		JOIN Departments AS d ON e.DepartmentID = d.DepartmentID
		GROUP BY d.[Name]
	) AS t1

-- Problem 12. Highest Peaks in Bulgaria
USE [Geography]
GO

SELECT c.CountryCode, m.MountainRange, p.PeakName, p.Elevation
FROM Countries c
JOIN MountainsCountries mc ON c.CountryCode = mc.CountryCode
JOIN Mountains m ON mc.MountainId = m.Id
JOIN Peaks p ON m.Id = p.MountainId
WHERE c.CountryName = 'Bulgaria' and p.Elevation > 2835
ORDER BY Elevation DESC

SELECT
	mc.CountryCode,
	m.MountainRange,
	p.PeakName,
	p.Elevation
FROM Mountains AS m
JOIN Peaks AS p ON m.Id = p.MountainId
JOIN MountainsCountries as mc ON m.Id = mc.MountainId
WHERE mc.CountryCode = 'BG' AND p.Elevation >= 2835
ORDER BY p.Elevation DESC

-- Problem 13. Count Mountain Ranges
-- SELECT c.CountryCode, COUNT(MountainRange) as MountainRanges
-- FROM Countries c
-- JOIN MountainsCountries mc ON c.CountryCode = mc.CountryCode
-- JOIN Mountains m ON mc.MountainId = m.Id
-- WHERE c.CountryName in ('United States', 'Russia', 'Bulgaria')
-- GROUP BY c.CountryCode

SELECT 
	mc.CountryCode,
	COUNT(m.MountainRange) AS MountainRanges
FROM Mountains AS m
JOIN MountainsCountries AS mc ON m.Id = mc.MountainId
WHERE mc.CountryCode = 'BG' OR mc.CountryCode = 'RU' OR mc.CountryCode = 'US'
GROUP BY mc.CountryCode

-- Problem 14. Countries with Rivers
SELECT TOP(5)
	c.CountryName,
	r.RiverName
FROM Countries AS c
LEFT JOIN CountriesRivers AS cr ON c.CountryCode = cr.CountryCode
LEFT JOIN Rivers AS r ON cr.RiverId = r.Id
WHERE c.ContinentCode = 'AF'
ORDER BY c.CountryName ASC

-- Problem 15. *Continents and Currencies
SELECT d1.ContinentCode, d1.CurrencyCode, d1.CurrencyUsage
FROM
    (SELECT	c.ContinentCode,
		c.CurrencyCode,
		COUNT(c.CurrencyCode) AS CurrencyUsage 
	FROM countries as c
	GROUP BY c.CurrencyCode, c.ContinentCode 
	HAVING COUNT(c.CurrencyCode) > 1) as d1
LEFT JOIN
    (SELECT	c.ContinentCode,
		c.CurrencyCode,
		COUNT(c.CurrencyCode) AS CurrencyUsage 
	FROM countries as c
	GROUP BY c.CurrencyCode, c.ContinentCode 
	HAVING COUNT(c.CurrencyCode) > 1) as d2
ON d1.ContinentCode = d2.ContinentCode AND d2.CurrencyUsage > d1.CurrencyUsage
WHERE d2.CurrencyUsage IS NULL
ORDER BY d1.ContinentCode, d1.CurrencyCode;

-- v2
SELECT
	ContinentCode,
	CurrencyCode,
	CurrencyCount
FROM 
	(
		SELECT
			ContinentCode,
			CurrencyCode,
			CurrencyCount,
			DENSE_RANK() OVER(PARTITION BY ContinentCode ORDER BY CurrencyCount DESC) AS CurrencyRank
		FROM (
				SELECT 
					c.ContinentCode,
					c.CurrencyCode,
					COUNT(*) AS [CurrencyCount]
				FROM Countries AS c
				GROUP BY c.ContinentCode, c.CurrencyCode 
			) AS q1
		WHERE CurrencyCount > 1
	) as q2
WHERE CurrencyRank = 1

-- Problem 16. Countries without any Mountains
SELECT COUNT(*) AS [Count]
FROM Countries c
LEFT JOIN MountainsCountries mc ON c.CountryCode = mc.CountryCode
WHERE mc.MountainId IS NULL

-- Problem 17. Highest Peak and Longest River by Country
--	SELECT 
--		t1.CountryName,
--		t1.Elevation as HighestPeakElevation
--	FROM 
--	(
--		SELECT 
--			c.CountryName,
--			p.PeakName,
--			p.Elevation,
--			DENSE_RANK() OVER (
--				PARTITION BY c.CountryName
--				ORDER BY p.Elevation DESC
--			) as PeaksRankings
--		FROM Countries AS c
--		JOIN MountainsCountries AS mc ON c.CountryCode = mc.CountryCode
--		JOIN Mountains as m ON mc.MountainId = m.Id
--		JOIN Peaks as p ON m.Id = p.MountainId
--		GROUP BY c.CountryName, p.Elevation, p.PeakName
--	) AS t1
--	WHERE t1.PeaksRankings = 1
--	
--	
--	SELECT 
--		t2.CountryName,
--		t2.Length as LongestRiverLength
--	FROM 
--	(
--		SELECT 
--			c.CountryName,
--			r.RiverName,
--			r.Length,
--			DENSE_RANK() OVER (
--				PARTITION BY c.CountryName
--				ORDER BY r.Length DESC
--			) as RiverRankings
--		FROM Countries AS c
--		JOIN CountriesRivers AS cr ON c.CountryCode = cr.CountryCode
--		JOIN Rivers AS r ON cr.RiverId = r.Id
--		GROUP BY c.CountryName, r.Length, r.RiverName
--	) AS t2
--	WHERE t2.RiverRankings = 1

SELECT TOP(5)
	c.CountryName,
	MAX(P.Elevation) AS [HighestPeakElevation],
	MAX(r.Length) AS [LongestRiverLength]
FROM Countries c
JOIN MountainsCountries AS mc ON c.CountryCode = mc.CountryCode
JOIN Peaks AS p ON mc.MountainId = p.MountainId
JOIN CountriesRivers AS cr ON c.CountryCode = cr.CountryCode
JOIN Rivers as r ON cr.RiverId = r.Id
GROUP BY CountryName
ORDER BY 
	[HighestPeakElevation] DESC,
	[LongestRiverLength] DESC,
	c.CountryName

-- 18. Highest Peak Name and Elevation by Country
SELECT TOP(5)
	c.CountryName,
	ISNULL(p.PeakName, '(no highest peak)') AS [Highest Peak Name],
	ISNULL(MAX(p.Elevation), 0) AS [Highest Peak Elevation],
	ISNULL(m.MountainRange, '(no mountain)') AS [Mountain]
FROM Countries AS c
LEFT JOIN MountainsCountries AS mc ON c.CountryCode = mc.CountryCode
LEFT JOIN Mountains AS m ON mc.MountainId = m.Id
LEFT JOIN Peaks AS p ON m.Id = p.MountainId
GROUP BY c.CountryName, p.PeakName, m.MountainRange
ORDER BY c.CountryName, p.PeakName

-- v2
SELECT
           c.CountryName,
           ISNULL(p.PeakName, '(no highest peak)') AS [Highest Peak Name],
           ISNULL(P.Elevation, 0) AS [Highest Peak Elevation],
           ISNULL(m.MountainRange, '(no mountain)') AS [Mountain]
      FROM Countries c
 LEFT JOIN MountainsCountries mc
        ON mc.CountryCode = c.CountryCode
 LEFT JOIN Mountains m
        ON m.Id = mc.MountainId
 LEFT JOIN Peaks p
        ON p.MountainId = mc.MountainId
  ORDER BY c.CountryName,
           P.PeakName