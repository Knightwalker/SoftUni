<?php

class Employee {
  
  private $name;
  private $salary;

  public function __construct ($name, $salary) {
    $this->name = $name;
    $this->salary = $salary;
  }

  public function getName() {
    return $this->name;
  }

  public function getSalary() {
    return $this->salary;
  }

}

class Department {

  private $name;
  private $employees = [];

  public function __construct($name) {
    $this->name = $name;
  }

  public function getName() {
    return $this->name;
  }

  public function addEmployee($employee) {
    $this->employees[] = $employee;
  }

  public function getEmployees() {
    return $this->employees;
  }

  public function getAverageSalary() {
    $peopleCount = count($this->employees);
    $totalSalary = 0;
    foreach($this->employees as $employee) {
      $currentSalary = $employee->getSalary();
      $totalSalary += $currentSalary;
    }
    $averageSalary = $totalSalary / $peopleCount;
    return $averageSalary;
  }

}

$departmentsList = [];
$n = readline();
for ($i = 0; $i < $n; $i++) {
  $inputArr = explode(" ", readline());
  $name = $inputArr[0];
  $salary = $inputArr[1];
  $department = $inputArr[2];
  $employee = new Employee($name, $salary);

  $departmentExists = false;
  foreach($departmentsList as $departments) {
    if ($departments->getName() == $department) {
      $departmentExists = true;
      break;
    }
  }
  if ($departmentExists == false) {
    $departmentsList[] = new Department($department);
  }

  // add employee
  foreach($departmentsList as $departments) {
    if ($departments->getName() == $department) {
      $departments->addEmployee($employee);
      break;
    }
  }

}

// check which department has the highest salary
$departmentWHS = "";
$departmentMS = -999999;
foreach($departmentsList as $departments) {
  $currentDepartment = $departments->getName();
  $currentDepartmentS = $departments->getAverageSalary();
  
  if ($currentDepartmentS > $departmentMS) {
    $departmentMS = $currentDepartmentS;
    $departmentWHS = $currentDepartment;
  }
}

// var_dump($departmentsList);
// var_dump($departmentWHS);

foreach($departmentsList as $departments) {
  $currentDepartment = $departments->getName();
  $currentDepartmentEmployees = $departments->getEmployees();

  if ($currentDepartment == $departmentWHS) {
    echo "Highest Average Salary: $departmentWHS" . PHP_EOL;
    
    usort ($currentDepartmentEmployees, function($a, $b) {
      return ($a->getSalary() < $b->getSalary());
    }); 
    
   // var_dump($currentDepartmentEmployees);
    foreach ($currentDepartmentEmployees as $employee) {
      $employeeName = $employee->getName();
      $employeeSalary = $employee->getSalary(); 
      $employeeSalary = number_format($employeeSalary, 2, ".", "");
      echo "$employeeName $employeeSalary" . PHP_EOL;
    }

  }
}

?>