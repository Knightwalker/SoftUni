<?php

$inputArr = explode(", ", readline());
$rows = intval($inputArr[0]);
$cols = intval($inputArr[1]);

$matrix = [];
for ($r = 0; $r < $rows; $r++) {
  $inputSubArr = preg_split('/\s*,\s*/', trim(readline()));
  $matrix[$r] = [];
  for ($c = 0; $c < $cols; $c++) {
    $matrix[$r][$c] = $inputSubArr[$c];
  }
}

$min = PHP_INT_MAX;
$max = PHP_INT_MIN;
for ($r = 0; $r < $rows; $r++) {
  for ($c = 0; $c < $cols; $c++) {
    $val = $matrix[$r][$c];
    if ($val < $min) {
      $min = $val;
    }
    if ($val > $max) {
      $max = $val;
    }
  }
}

print("Min: {$min}" . PHP_EOL);
print("Max: {$max}" . PHP_EOL);