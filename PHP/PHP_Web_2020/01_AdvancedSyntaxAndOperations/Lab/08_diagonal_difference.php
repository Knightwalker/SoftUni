<?php

$n = intval(readline());
$matrix = [];
for ($i = 0; $i < $n; $i++) { $matrix[$i] = []; }

for ($r = 0; $r < $n; $r++) {
  $inputArr = explode(" ", readline());
  for ($c = 0; $c < $n; $c++) {
    $matrix[$r][$c] = intval($inputArr[$c]);
  } 
}

$sumDiagonal = 0;
$sumAntiDiagonal = 0;
for ($r = 0; $r < $n; $r++) {
  for ($c = 0; $c < $n; $c++) {
    if ($r == $c) { 
      $sumDiagonal += $matrix[$r][$c];
    }

    if ($n - 1 - $r == $c) { 
      $sumAntiDiagonal += $matrix[$r][$c];
    }
  } 
}

print(abs($sumDiagonal - $sumAntiDiagonal));