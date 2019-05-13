<?php

class Family
{
  private $familyList;

  public function __construct($familyList)
  {
    $this->familyList = $familyList;
  }

  public function getOldestMember()
  {
    $res = "";
    $member = "";
    $maxAge = -999999;

    foreach ($this->familyList as $members) {
      $currentMember = $members->getName();
      $currentAge = $members->getAge();

      if ($maxAge < $currentAge) {
        $maxAge = $currentAge;
        $member = $currentMember;
      }
      
    }

    $res = $member . " " . $maxAge;
    return $res;

  }

}

Class Person
{

  private $name;
  private $age;

  public function __construct($name, $age)
  {
    $this->name = $name;
    $this->age = $age;
  }

  public function getName()
  {
    return $this->name;
  }
  
  public function getAge()
  {
    return $this->age;
  }

}

$litsOfPeople = [];
$n = readline();
for ($i = 0; $i < $n; $i++) {
  $input = explode(" ", readline());
  $name = $input[0];
  $age = $input[1];
  $person = new Person($name, $age);
  $litsOfPeople[] = $person;
}

$family = new Family($litsOfPeople);
echo $family->getOldestMember();

//var_dump($family);

?>