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

SELECT *
FROM Employees