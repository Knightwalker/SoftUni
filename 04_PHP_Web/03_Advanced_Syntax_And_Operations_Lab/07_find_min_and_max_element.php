<?php

$str = readline();
$arr = preg_split('/\s*,\s*/', trim($str));
$matrixRows = $arr[0];
$matrixCols = $arr[1];
$matrix = [];
$minVal = +2147483648;
$maxVal = -2147483648;

for ($i = 0; $i < $matrixRows; $i++) {
  $str = readline();
  $matrixInput = preg_split('/\s*,\s*/', trim($str));
  $matrix[$i] = $matrixInput; 
}

for ($r = 0; $r < $matrixRows; $r++) {
  for ($c = 0; $c < $matrixCols; $c++) {
  
    $n = intval($matrix[$r][$c]);

    if ($minVal > $n) {
      $minVal = $n;
    }
    if ($maxVal < $n) {
      $maxVal = $n;
    }

  }  
}

echo "Min: $minVal";
echo PHP_EOL;
echo "Max: $maxVal";

?>