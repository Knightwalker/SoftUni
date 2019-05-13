<?php

$a = readline();
$operator = readline();
$b = readline();

$res = 0;

if ($operator == "+") {
  $res = add($a, $b);
} else if ($operator == "*") {
  $res = multiply($a, $b);
} else if ($operator == "-") {
  $res = substract($a, $b);
} else if ($operator == "/") {
  $res = divide($a, $b);
}

echo number_format($res, 2, '.','');

function add($a, $b) {
  $res = 0;
  $res = $a + $b;
  return $res;
}

function multiply($a, $b) {
  $res = 0;
  $res = $a * $b;
  return $res;
}

function substract($a, $b) {
  $res = 0;
  $res = $a - $b;
  return $res;
}

function divide($a, $b) {
  $res = 0;
  $res = $a / $b;
  return $res;
}

?>