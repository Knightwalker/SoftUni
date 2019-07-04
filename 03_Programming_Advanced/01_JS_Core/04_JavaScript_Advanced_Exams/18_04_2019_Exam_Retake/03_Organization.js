class Organization {
  constructor(name, budget) {
    this.name = name;
    this.budget = budget;
    this.employees = [];
    this._departmentsBudget = {
      "marketing": this.budget * 0.4,
      "finance": this.budget * 0.25,
      "production": this.budget * 0.35
    };
  }

  set departmentsBudget(newObj) {
    this._departmentsBudget = newObj;
  }

  get departmentsBudget() {
    let currentObj = this._departmentsBudget;
    return currentObj;
  }

  add(employeeName, department, salary) {
    let currentDepartmentsBudget = this._departmentsBudget;
    if (currentDepartmentsBudget[department] >= Number(salary)) {
      let employeeObj = {
        "employeeName": employeeName,
        "department": department,
        "salary": Number(salary)
      }

      this.employees.push(employeeObj);
      currentDepartmentsBudget[department] -= Number(salary);
      this._departmentsBudget = currentDepartmentsBudget;
      //this.budget -= Number(salary);

      return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;

    } else {
      let currentDepartmentsBudget = this._departmentsBudget;
      let departmentBudget = currentDepartmentsBudget[department]; 

      return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${departmentBudget}.`
    }

  }

  employeeExists(employeeName) {
    let currentemployeesArr = this.employees;
    let employeeExists = false;
    let employeeDepartment = "";

    for(let employeesObj in currentemployeesArr) {
      let currentEmployeeObj = currentemployeesArr[employeesObj];
      
      if(currentEmployeeObj.employeeName == employeeName) {
        employeeExists = true;
        employeeDepartment = currentEmployeeObj.department;
        break;
      }
    }

    if(employeeExists) {
      return `Mr./Mrs. ${employeeName} is part of the ${employeeDepartment} department.`;
    } else {
      return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
    }
  }

  leaveOrganization(employeeName) {
    let currentemployeesArr = this.employees;
    let employeeExists = false;

    for (let i = 0; i < currentemployeesArr.length; i++) {
      let currentEmployeeObj = currentemployeesArr[i];
      let currentEmployeeName = currentEmployeeObj.employeeName;
      let currentEmployeeDepartment = currentEmployeeObj.department;
      let currentEmployeeSalary = Number(currentEmployeeObj.salary);

      if (currentEmployeeName == employeeName) { employeeExists = true; }

      if (employeeExists) {
        let currentDepartmentsBudget = this._departmentsBudget;

        // console.log(currentDepartmentsBudget);
        // console.log(currentDepartmentsBudget[currentEmployeeDepartment]);
        // console.log(currentEmployeeSalary);

        currentDepartmentsBudget[currentEmployeeDepartment] += currentEmployeeSalary;
        this._departmentsBudget = currentDepartmentsBudget;

        currentemployeesArr.splice(i, 1);
        this.employees = currentemployeesArr;

        return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;
      } else {
        return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
      }

    }
  }

status() {
    let res = "";
    res += `${this.name.toUpperCase()} DEPARTMENTS:`;

    let marketingArr = [];
    let financeArr = [];
    let productionArr = [];

    let marketingEmployeesCount = 0;
    let financeEmployeesCount = 0;
    let productionEmployeesCount = 0;

    let currentemployeesArr = this.employees;
    for (let i = 0; i < currentemployeesArr.length; i++) {
      let currentEmployeeObj = currentemployeesArr[i];
      let currentEmployeeName = currentEmployeeObj.employeeName;
      let currentEmployeeDepartment = currentEmployeeObj.department;
      let currentEmployeeSalary = Number(currentEmployeeObj.salary);
    
      if (currentEmployeeDepartment == "marketing") {
        marketingArr.push(currentEmployeeObj);
        marketingEmployeesCount++;
      } else if (currentEmployeeDepartment == "finance") {
        financeArr.push(currentEmployeeObj);
        financeEmployeesCount++;
      } else if (currentEmployeeDepartment == "production") {
        productionArr.push(currentEmployeeObj);
        productionEmployeesCount++;
      }
    }

    marketingArr.sort(function(a, b) {
      let aSalary = a["salary"];
      let bSalary = b["salary"];

      if (aSalary > bSalary) {
        return -1;
      } else if (aSalary < bSalary) {
        return 1;
      }
    });

    financeArr.sort(function(a, b) {
      let aSalary = a["salary"];
      let bSalary = b["salary"];

      if (aSalary > bSalary) {
        return -1;
      } else if (aSalary < bSalary) {
        return 1;
      }
    });

    productionArr.sort(function(a, b) {
      let aSalary = a["salary"];
      let bSalary = b["salary"];

      if (aSalary > bSalary) {
        return -1;
      } else if (aSalary < bSalary) {
        return 1;
      }
    });

    let marketingEmployeeNamesArr = [];
    for (let i = 0; i < marketingArr.length; i++) {
      let currentEmployeeObj = marketingArr[i];
      let currentEmployeeName = currentEmployeeObj.employeeName;
      marketingEmployeeNamesArr.push(currentEmployeeName);
    }

    let financeEmployeeNamesArr = [];
    for (let i = 0; i < financeArr.length; i++) {
      let currentEmployeeObj = financeArr[i];
      let currentEmployeeName = currentEmployeeObj.employeeName;
      financeEmployeeNamesArr.push(currentEmployeeName);
    }

    let productionEmployeeNamesArr = [];
    for (let i = 0; i < productionArr.length; i++) {
      let currentEmployeeObj = productionArr[i];
      let currentEmployeeName = currentEmployeeObj.employeeName;
      productionEmployeeNamesArr.push(currentEmployeeName);
    }

    let currentDepartmentsBudget = this._departmentsBudget;
    let marketingRemainingBudget = currentDepartmentsBudget["marketing"];
    let financeRemainingBudget = currentDepartmentsBudget["finance"];
    let productionRemainingBudget = currentDepartmentsBudget["production"];

    res += `\nMarketing | Employees: ${marketingEmployeesCount}: ${marketingEmployeeNamesArr.join(", ")} | Remaining Budget: ${marketingRemainingBudget}`;
   
    res += `\nFinance | Employees: ${financeEmployeesCount}: ${financeEmployeeNamesArr.join(", ")} | Remaining Budget: ${financeRemainingBudget}`;

    res += `\nProduction | Employees: ${productionEmployeesCount}: ${productionEmployeeNamesArr.join(", ")} | Remaining Budget: ${productionRemainingBudget}`;  

    return res;

  }

}