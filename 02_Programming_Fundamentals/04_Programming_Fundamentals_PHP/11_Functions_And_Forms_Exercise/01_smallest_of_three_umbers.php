<?php

$n1 = readline();
$n2 = readline();
$n3 = readline();
$numbers[] = $n1;
$numbers[] = $n2;
$numbers[] = $n3;
$res = 0;

$res = math_min($numbers);
echo $res;

function math_min($numbers) {
  $min = PHP_INT_MAX;

  for($i = 0; $i < count($numbers); $i++) {
    if ($min > $numbers[$i]) {
      $min = $numbers[$i];
    }
  }

  return $min;
}

?>