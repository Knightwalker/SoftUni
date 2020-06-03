<?php

$inputArr = explode(", ", readline());
$n = intval($inputArr[0]);
$pattern = $inputArr[1];

$matrix = []; for ($i = 0; $i < $n; $i++) { $matrix[$i] = []; }

if ($pattern == "A") {
  $counter = 0;
  for ($i = 0; $i < $n; $i++) {
    for ($j = 0; $j < $n; $j++) {
      $matrix[$j][$i] = ++$counter;
    }
  }
} else if ($pattern == "B") {
  $counter = 0;
 
  for ($i = 0; $i < $n; $i++) {
    if ($i % 2 == 0) {
      for ($j = 0; $j < $n; $j++) {
        $matrix[$j][$i] = ++$counter;
      }
    } else {
      for ($j = $n - 1; $j >= 0; $j--) {
        $matrix[$j][$i] = ++$counter;
      }
    } 
  }
}

for ($i = 0; $i < $n; $i++) {
  for ($j = 0; $j < $n; $j++) {
    print($matrix[$i][$j] . " ");
  }
  print(PHP_EOL);
}