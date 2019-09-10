<?php

$budget = floatval(readline());
$students = intval(readline());
$priceOfFlour = floatval(readline());
$priceOfEgg = floatval(readline());
$priceOfApron = floatval(readline());

$freeFlour = 0;
for ($i = 1; $i <= $students; $i++) {
  if ($i % 5 == 0) {
    $freeFlour++;
  }
}

$flour = $priceOfFlour * ($students - $freeFlour);
$eggs = ($priceOfEgg * 10) * $students;
$apron = $priceOfApron * ceil($students * 1.2);

$sum = $flour + $eggs + $apron;

if ($budget >= $sum) {
  echo "Items purchased for " . number_format($sum, 2, ".", "") . "$.";
} else {
  echo number_format($sum - $budget, 2, ".", "") . "$ more needed.";
}

?>