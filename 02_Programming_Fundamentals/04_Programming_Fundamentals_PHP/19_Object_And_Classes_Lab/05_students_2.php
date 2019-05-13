<?php

class Student 
{

  private $firstName;
  private $lastName;
  private $age;
  private $hometown;

  public function __construct($firstName, $lastName, $age, $hometown)
  {
    $this->firstName = $firstName;
    $this->lastName = $lastName;
    $this->age = $age;    
    $this->hometown = $hometown;
  }

  public function getFirstName()
  {
    return $this->firstName;
  }

  public function getLastName()
  {
    return $this->lastName;
  }

  public function getAge()
  {
    return $this->age;
  }

  public function getHometown()
  {
    return $this->hometown;
  }

  public function setAge($age) 
  {
    return $this->age = $age;
  }

  public function setHometown($hometown)
  {
    return $this->hometown = $hometown;
  }

}

$studentsList = [];
$input = "";
while (true) {
  $input = readline();
  if ($input == "end") { break; }
  $inputArr = explode(" ", $input);
  
  $firstName = $inputArr[0];
  $lastName = $inputArr[1];
  $age = $inputArr[2];
  $hometown = $inputArr[3];

  if (isStudentExisting($studentsList, $firstName, $lastName) == true) {
    foreach ($studentsList as $student) {
      if (($student->getFirstName() == $firstName) && ($student->getLastName() == $lastName)) {
        $student->setAge($age);
        $student->setHometown($hometown);
      }
    }
  } else {
    $student = new Student($firstName, $lastName, $age, $hometown);
    $studentsList[] = $student;
  }

}

function isStudentExisting($studentsList, $firstName, $lastName) {
  foreach ($studentsList as $student) {
    if (($student->getFirstName() == $firstName) && ($student->getLastName() == $lastName)) {
      return true;
    }
  }
  return false;
}

// Output
$filterByHometown = readline();
foreach ($studentsList as $value) {

  if ($value->getHometown() == $filterByHometown) {
    echo "{$value->getFirstName()} {$value->getLastName()} is {$value->getAge()} years old." . PHP_EOL;
  }

}

//var_dump($studentsList);

?>