<?php

$n1 = readline();
$n2 = readline();
$n3 = readline();

$sum = sum($n1, $n2);
$res = subtract($sum, $n3);

echo $res;

function sum($n1, $n2) {
  $res = $n1 + $n2;
  return $res;
}
 
function subtract($sum, $n3) {
  $res = $sum - $n3;
  return $res;
}

?>