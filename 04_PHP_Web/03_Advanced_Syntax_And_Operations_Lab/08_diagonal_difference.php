<?php

$n = intval(readline());
$matrix = [];
$primaryDiagonalSum = 0;
$secondaryDiagonalSum = 0;
$totalSum = 0;

for ($i = 0; $i < $n; $i++) {
  $arr = array_map('intval', explode(" ", readline()));
  $matrix[$i] = $arr; 
}

$r = 0;
for ($c = 0; $c < $n; $c++) {
  $primaryDiagonalSum += $matrix[$r][$c];
  $r++;
}

$r = 0;
for ($c = $n - 1; $c >= 0; $c--) {
  $secondaryDiagonalSum += $matrix[$r][$c];
  $r++;
}

$totalSum = abs($primaryDiagonalSum - $secondaryDiagonalSum);
echo $totalSum;

?>