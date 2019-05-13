<?php

class Student
{
  private $name;
  private $grades = [];
  private $gradesAverage;

  public function __construct($name, $grades, $gradesAverage) {
    $this->name = $name;
    $this->grades = $grades;
    $this->gradesAverage = $gradesAverage;
  }

  public function getName()
  {
    return $this->name;
  }

  public function getGradesAverage()
  {
    return $this->gradesAverage;
  }

}

$studentList = [];
$n = readline();
for ($i = 0; $i < $n; $i++) {
  $input = explode(" ", readline());
  $name = $input[0];
  $gradesArr = [];
  $gradesAverage = 0;

  for ($i2 = 1; $i2 < count($input); $i2++) {
    $gradesArr[] = $input[$i2];
    $gradesAverage += $input[$i2];
  }

  $gradesAverage = ($gradesAverage) / (count($input)-1);
  $student = new Student($name, $gradesArr, $gradesAverage);
  $studentList[] = $student;
}

usort($studentList, function($a, $b) {
  //if (strcmp($a->getName(), $b->getName()) != 0 ) {
   // return strcmp($a->getName(), $b->getName()); 
  //} else {
   // return ($a->getGradesAverage() - $b->getGradesAverage());
  //}

  if ($a->getGradesAverage() < $b->getGradesAverage()) return 1;
  elseif ($a->getGradesAverage() > $b->getGradesAverage()) return -1; 
  else return strcmp($a->getName(), $b->getName()); 

});

usort($studentList, function($a, $b) {
  return strcmp($a->getName(), $b->getName()); 
});

//uksort($studentList, function ($a, $b) use ($studentList) { 
//    if ($array[$a] < $array[$b]) return 1;
//   elseif ($array[$a] > $array[$b]) return -1; 
//    else return strcmp($a, $b); });
//print_r($array);

//var_dump($studentList);

foreach ($studentList as $value) {
  if ($value->getGradesAverage() >= 5 ) {
    echo $value->getName() . " -> " . number_format($value->getGradesAverage(), 2, ".", "") . PHP_EOL;
  }
}

?>