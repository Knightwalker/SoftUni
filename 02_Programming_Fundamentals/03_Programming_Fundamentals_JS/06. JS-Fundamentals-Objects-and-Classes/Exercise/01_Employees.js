function solve(args) {

  class Employee {
    constructor(name) {
      this.name = name;
      this.number = name.length;
    }

    toString() {
      return `Name: ${this.name} -- Personal Number: ${this.number}`;
    }
  }

  let employeesList = [];
  for (let index = 0; index < args.length; index++) {
    const name = args[index];
    let employee = new Employee(name)
    employeesList.push(employee);
  }

  for (let employee of employeesList) {
    console.log(employee.toString());
  }

}

// solve([
//   'Silas Butler',
//   'Adnaan Buckley',
//   'Juan Peterson',
//   'Brendan Villarreal'
//   ]
// );