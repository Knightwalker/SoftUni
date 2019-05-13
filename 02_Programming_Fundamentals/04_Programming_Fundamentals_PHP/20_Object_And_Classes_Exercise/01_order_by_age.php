<?php

class Person
{
  private $name;
  private $id;
  private $age;

  public function __construct($name, $id, $age)
  {
    $this->name = $name;
    $this->id = $id;
    $this->age = $age;
  }

  public function getName()
  {
    return $this->name;
  }

  public function getId()
  {
    return $this->id;
  }

  public function getAge()
  {
    return $this->age;
  }
}

$personList = [];

while (true) {
  $input = readline();
  if ($input == "End") { break; }
  $inputArr = explode(" ", $input);
  $name = $inputArr[0];
  $id = $inputArr[1];
  $age = $inputArr[2];

  $person = new Person($name, $id, $age);
  $personList[] = $person;
}

usort($personList, function($a, $b) {
  return ($a->getAge()) - ($b->getAge());
});

foreach ($personList as $person) {
  echo "{$person->getName()} with ID: {$person->getId()} is {$person->getAge()} years old." . PHP_EOL;
}

?>