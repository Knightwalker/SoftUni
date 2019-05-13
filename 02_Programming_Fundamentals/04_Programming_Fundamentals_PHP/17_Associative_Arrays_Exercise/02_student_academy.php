<?php

$n = intval(readline());
$studentsBook = [];
$studentsAverageGrades = [];

for ($i = 0; $i < $n; $i++) {
  $student = readline();
  $grade = floatval(readline());

  if(!key_exists($student, $studentsBook)) {
    $studentsBook[$student] = [];
  }
  $studentsBook[$student][] = $grade; 

}

foreach ($studentsBook as $studentsName => $studentsGrades) {

  $averageGrade = 0;
  $counterGrade = 0;

  foreach ($studentsGrades as $grade) {
    $averageGrade += $grade;
    $counterGrade++;
  }

  if ($averageGrade / $counterGrade >= 4.50) {
    if(!key_exists($studentsName, $studentsAverageGrades)) {
      $studentsAverageGrades[$studentsName] = 0;
    }
    $studentsAverageGrades[$studentsName] = $averageGrade / $counterGrade;
  }

}

arsort($studentsAverageGrades);

foreach ($studentsAverageGrades as $student => $grade) {
  echo $student . " -> " . number_format($grade, 2, '.', '') . PHP_EOL;
}

?>