class Company {
  constructor() {
    this.departments = [];
  }

  addEmployee(username, Salary, Position, Department) {

    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] == "" || arguments[i] == undefined || arguments[i] == null) {
        throw "Invalid input!";
      }
    }

    if (Salary < 0) {
      throw "Invalid input!";
    }

    if (!this.departments.some(x => x.DeptName == Department)) {
      this.departments.push(
        {
          DeptName: Department,
          DeptSalary: 0,
          DeptMembers: []
        }
      );
    }
  
    let index = this.departments.findIndex(x => x.DeptName == Department);
    this.departments[index].DeptSalary += Salary;
    this.departments[index].DeptMembers.push({
      name: username,
      salary: Salary,
      position: Position
    });

    return `New employee is hired. Name: ${username}. Position: ${Position}`;
  }

  bestDepartment() {
    this.departments.sort(function(a, b){
      if (a.DeptSalary / a.DeptMembers.length > b.DeptSalary / b.DeptMembers.length) {
        return -1;
      } else if (a.DeptSalary / a.DeptMembers.length < b.DeptSalary / b.DeptMembers.length) {
        return 1;
      }
    });

    this.departments[0].DeptMembers.sort(function(a, b){
      if (a.salary > b.salary) {
        return -1;
      } else if (a.salary < b.salary) {
        return 1;
      } else {
        return a.name.localeCompare(b.name);
      }
    });

    let sb = "";
    sb += `Best Department is: ${this.departments[0].DeptName}\n`;
    sb += `Average salary: ${(this.departments[0].DeptSalary / this.departments[0].DeptMembers.length).toFixed(2)}\n`;

    for (let member of this.departments[0].DeptMembers) {
      sb += `${member.name} ${member.salary} ${member.position}\n`;
    }
    
    return sb.trim();
  }

}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());