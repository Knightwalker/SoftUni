<?php

$command = readline();
$a = readline();
$b = readline();
$res = 0;

if ($command == "add") {
  $res = add($a, $b);
} else if ($command == "multiply") {
  $res = multiply($a, $b);
} else if ($command == "substract") {
  $res = substract($a, $b);
} else if ($command = "divide") {
  $res = divide($a, $b);
}

echo $res;

function add($a, $b) {
  $res = $a + $b;
  return $res;
}

function multiply($a, $b) {
  $res = $a * $b;
  return $res;
}

function substract($a, $b) {
  $res = $a - $b;
  return $res;
}

function divide($a, $b) {
  $res = $a / $b;
  return $res;
}

?>