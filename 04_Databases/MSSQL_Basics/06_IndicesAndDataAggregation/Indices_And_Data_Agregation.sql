USE Gringotts

-- 1. Records’ Count
SELECT COUNT(*) AS Count FROM WizzardDeposits

-- 2. Longest Magic Wand
SELECT MAX(MagicWandSize) AS LongestMagicWand FROM WizzardDeposits

-- 3. Longest Magic Wand Per Deposit Groups
SELECT 
	DepositGroup,
	MAX(MagicWandSize) AS [LongestMagicWand]
FROM WizzardDeposits
GROUP BY DepositGroup

-- 4. Smallest Deposit Group Per Magic Wand Size
SELECT TOP (2)
	DepositGroup
FROM WizzardDeposits
GROUP BY DepositGroup
ORDER BY AVG(MagicWandSize)

-- 5. Deposits Sum
SELECT 
	DepositGroup,
	SUM(DepositAmount) AS TotalSum
FROM WizzardDeposits
GROUP BY DepositGroup

-- 6. Deposits Sum for Ollivander Family
SELECT 
	DepositGroup,
	SUM(DepositAmount) AS TotalSum
FROM WizzardDeposits
WHERE MagicWandCreator = 'Ollivander family'
GROUP BY DepositGroup

-- 7. Deposits Filter
SELECT 
	DepositGroup,
	SUM(DepositAmount) AS TotalSum
FROM WizzardDeposits
WHERE MagicWandCreator = 'Ollivander family'
GROUP BY DepositGroup
HAVING SUM(DepositAmount) < 150000
ORDER BY TotalSum DESC

-- 8. Deposit Charge
SELECT 
	DepositGroup,
	MagicWandCreator,
	MIN(DepositCharge)
FROM WizzardDeposits
GROUP BY DepositGroup, MagicWandCreator

-- 9. Age Groups
SELECT
	CASE
		WHEN Age >= 0 AND Age <= 10 THEN '[0-10]'
		WHEN Age >= 11 AND Age <= 20 THEN '[11-20]'
		WHEN Age >= 21 AND Age <= 30 THEN '[21-30]'
		WHEN Age >= 31 AND Age <= 40 THEN '[31-40]'
		WHEN Age >= 41 AND Age <= 50 THEN '[41-50]'
		WHEN Age >= 51 AND Age <= 60 THEN '[51-60]'
		ELSE '[61+]'
	END AS AgeGroup,
	COUNT(Age) AS WizardCount
FROM WizzardDeposits 
GROUP BY 
	CASE
		WHEN Age >= 0 AND Age <= 10 THEN '[0-10]'
		WHEN Age >= 11 AND Age <= 20 THEN '[11-20]'
		WHEN Age >= 21 AND Age <= 30 THEN '[21-30]'
		WHEN Age >= 31 AND Age <= 40 THEN '[31-40]'
		WHEN Age >= 41 AND Age <= 50 THEN '[41-50]'
		WHEN Age >= 51 AND Age <= 60 THEN '[51-60]'
		ELSE '[61+]'
	END

-- 10. First Letter
SELECT DISTINCT
	LEFT(FirstName, 1) AS FirstLetter
FROM WizzardDeposits
WHERE DepositGroup = 'Troll Chest'

-- 11. Average Interest 
SELECT
	DepositGroup,
	IsDepositExpired,
	AVG(DepositInterest) AS [AverageInterest]
FROM WizzardDeposits
WHERE DepositStartDate > '01-01-1985'
GROUP BY DepositGroup, IsDepositExpired
ORDER BY DepositGroup DESC, IsDepositExpired ASC

-- 12* Rich Wizard, Poor Wizard
SELECT SUM(q1.[Difference]) AS SumDifference 
FROM
(
	SELECT 
		wd1.FirstName AS [Host Wizard],
		wd1.DepositAmount [Host Wizard Deposit],
		wd2.FirstName AS [Guest Wizard],
		wd2.DepositAmount AS [Guest Wizard Deposit],
		wd1.DepositAmount - wd2.DepositAmount AS [Difference]
	FROM WizzardDeposits AS wd1
	LEFT JOIN WizzardDeposits AS wd2 ON wd1.Id = wd2.Id - 1
) as q1

-- OR

SELECT SUM(TotalDiff.Diff) AS [SumDifference]
  FROM (SELECT fw.DepositAmount - (SELECT sw.DepositAmount 
                                   FROM WizzardDeposits sw 
                                   WHERE sw.Id = fw.Id + 1) AS [Diff]
        FROM WizzardDeposits fw) AS [TotalDiff]

-- 13. Departments Total Salaries
USE SoftUni

SELECT 
	DepartmentID, 
	MIN(Salary) AS [TotalSalary] 
FROM Employees
GROUP BY DepartmentID

-- 14. Employees Minimum Salaries
SELECT 
	DepartmentID, 
	MIN(Salary) AS [MinimumSalary]
FROM Employees
WHERE DepartmentID IN (2,5,7) AND HireDate > '01-01-2000'
GROUP BY DepartmentID

-- 15. Employees Average Salaries
SELECT *
INTO NewTable
FROM Employees e
WHERE e.Salary > 30000

DELETE 
FROM NewTable 
WHERE ManagerID = 42

UPDATE NewTable
SET Salary += 5000
WHERE DepartmentID = 1

SELECT 
	DepartmentID,
	AVG(Salary) AS [AverageSalary]
FROM NewTable
GROUP BY DepartmentID

-- 16. Employees Maximum Salaries
SELECT 
	DepartmentID,
	MAX(Salary) AS [MaxSalary]
FROM Employees
GROUP BY DepartmentID
HAVING MAX(Salary) < 30000 OR MAX(Salary) > 70000

-- 17. Employees Count Salaries
SELECT COUNT(*) AS [Count] 
FROM Employees
WHERE ManagerID IS NULL

-- 18. *3rd Highest Salary
SELECT DISTINCT 
	DepartmentID,
	Salary as [ThirdHighestSalary]
FROM
(
	SELECT
		DepartmentID,
		Salary,
		DENSE_RANK ( ) OVER (PARTITION BY DepartmentID ORDER BY Salary DESC) AS [Rank]
	FROM Employees
) as q1
WHERE Rank = 3

-- 19. **Salary Challenge
SELECT TOP(10)
	e1.FirstName,
	e1.LastName,
	e1.DepartmentID
FROM Employees e1
WHERE Salary >  
(
	SELECT AVG(e2.Salary) as [AverageSalaryPerDepartment]
	FROM Employees as e2
	WHERE e2.DepartmentID = e1.DepartmentID
	GROUP BY DepartmentID
)