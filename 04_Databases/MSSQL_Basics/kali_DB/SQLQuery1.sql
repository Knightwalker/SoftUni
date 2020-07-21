--Problem 01. Employees with Salary Above 35000
CREATE PROC usp_GetEmployeesSalaryAbove35000
AS
	SELECT FirstName, LastName
	FROM Employees
	WHERE Salary > 35000
GO

EXEC usp_GetEmployeesSalaryAbove35000

--Problem 02. Employees with Salary Above Number
CREATE PROC usp_GetEmployeesSalaryAboveNumber(@Number DECIMAL(18,4))
AS
	SELECT FirstName, LastName
	FROM Employees
	WHERE Salary >= @Number
GO

EXEC usp_GetEmployeesSalaryAboveNumber 43100
EXEC usp_GetEmployeesSalaryAboveNumber @Number = 43100

--Problem 03. Town Names Starting With
CREATE PROC usp_GetTownsStartingWith (@Str varchar(20))
AS
	DECLARE @StrCount int = LEN(@Str)
	SELECT [Name]
	FROM Towns
	Where LEFT([Name], @StrCount) = @Str
GO

--Problem 04. Employees from Town
CREATE PROC usp_GetEmployeesFromTown (@TownName varchar(50))
AS
	SELECT FirstName, LastName
	FROM Employees e
		INNER JOIN Addresses a ON e.AddressID = a.AddressID
		INNER JOIN Towns t ON a.TownID = t.TownID
	WHERE t.Name = @TownName
GO

--Problem 5. Salary Level Function
CREATE FUNCTION ufn_GetSalaryLevel(@Salary DECIMAL(18,4))
RETURNS varchar(7)
AS
	BEGIN
		IF(@Salary < 30000)
			RETURN 'Low'
		ELSE IF (@Salary >= 30000 AND @Salary <= 50000)
			RETURN 'Average'
		RETURN 'High'
	END
GO

SELECT * FROM dbo.ufn_GetSalaryLevel(431000)

--Problem 06. Employees by Salary Level
CREATE PROC usp_EmployeesBySalaryLevel(@LevelOfSalary varchar(7))
AS
	SELECT FirstName, LastName
	FROM Employees e
	WHERE dbo.ufn_GetSalaryLevel(e.Salary) = @LevelOfSalary
GO

EXEC usp_EmployeesBySalaryLevel 'high'

--Problem 07. Define Function
CREATE FUNCTION ufn_IsWordComprised(@setOfLetters nvarchar(20), @word nvarchar(20))
RETURNS BIT
AS
	BEGIN
		DECLARE @Temp BIT = 1;
		DECLARE @count int = 1;
			WHILE (@count <= LEN(@word))
			BEGIN
				IF CHARINDEX(SUBSTRING(@word, @count, 1), @setOfLetters) = 0
					RETURN 0;
				SET @count += 1;
			END
		RETURN @temp;
	END
GO

SELECT * FROM [SoftUni].[dbo].[ufn_IsWordComprised]('oistmiahf', 'Sofia');

--Problem 08. Delete Employees and Departments
CREATE PROC usp_DeleteEmployeesFromDepartment (@departmentId INT)
AS
	BEGIN
		DECLARE @EmployeesIdToDelete  TABLE (ID INT);

		INSERT INTO @EmployeesIdToDelete
		SELECT e.EmployeeID
		FROM Employees e
		WHERE e.DepartmentID = @departmentId

		ALTER TABLE Departments
		ALTER COLUMN ManagerID INT NULL

		DELETE FROM EmployeesProjects
		WHERE EmployeeID IN (SELECT Id FROM @EmployeesIdToDelete)

		UPDATE Employees
		SET ManagerID = NULL
		WHERE ManagerID IN (SELECT Id FROM @EmployeesIdToDelete)

		UPDATE Departments
		SET ManagerID = NULL
		WHERE ManagerID IN (SELECT Id FROM @EmployeesIdToDelete)

		DELETE FROM Employees
		WHERE EmployeeID IN (SELECT Id FROM @EmployeesIdToDelete)

		DELETE FROM Departments
		WHERE DepartmentID = @departmentId

		SELECT COUNT(*) AS [Employees Count]
		FROM Employees e
		INNER JOIN Departments d ON e.DepartmentID = d.DepartmentID
		WHERE e.DepartmentID = @departmentId
	END
GO

--Problem 9. Find Full Name
CREATE PROC usp_GetHoldersFullName
AS
	SELECT CONCAT(FirstName, ' ', LastName) AS [Full Name]
	FROM [AccountHolders]
GO

--Problem 10. People with Balance Higher Than
CREATE PROC usp_GetHoldersWithBalanceHigherThan (@num DECIMAL(18, 2))
AS
	SELECT ah.FirstName, ah.LastName
	FROM [Accounts] acc
	INNER JOIN [AccountHolders] ah ON acc.AccountHolderId = ah.Id
	GROUP BY FirstName, LastName
	HAVING SUM(acc.Balance) > @num
	ORDER BY ah.FirstName, ah.LastName
GO

--Problem 11. Future Value Function
CREATE FUNCTION ufn_CalculateFutureValue 
	(@sum DECIMAL(18, 2),
	@yearlyInterestRate FLOAT,
	@numberOfYears INT)
RETURNS DECIMAL(18, 4)
AS
	BEGIN
		DECLARE @futureValue DECIMAL(18, 4);
		SET @futureValue = @sum * (POWER(1+ @yearlyInterestRate, @numberOfYears));

		RETURN @futureValue;
	END
GO

SELECT * FROM dbo.ufn_CalculateFutureValue (1000, 0.1, 5)

--Problem 12. Calculating Interest
CREATE PROC usp_CalculateFutureValueForAccount (@accId int, @interestRate FLOAT)
AS
	SELECT	acc.Id,
			ah.FirstName,
			ah.LastName,
			acc.Balance,
			dbo.ufn_CalculateFutureValue (acc.Balance, @interestRate, 5)
	FROM [AccountHolders] ah
	INNER JOIN [Accounts] acc ON ah.Id = acc.AccountHolderId
	WHERE acc.Id = @accId
GO

--Problem 13. *Cash in User Games Odd Rows
CREATE FUNCTION ufn_CashInUsersGames (@GameName NVARCHAR(50))
RETURNS TABLE
AS
RETURN (
    WITH CTE_CashInRows (Cash, RowNumber)
    AS
    (
         SELECT ug.Cash,
                ROW_NUMBER() OVER (ORDER BY ug.Cash DESC)
           FROM UsersGames ug
     INNER JOIN Games g
             ON g.Id = ug.GameId
          WHERE g.Name = @GameName
    )

    SELECT SUM(Cash) AS [SumCash]
      FROM CTE_CashInRows
     WHERE RowNumber % 2 = 1
)