<?php

$n = readline();
$power = readline();
$res = math_power($n, $power);
echo $res;

function math_power($n, $power) {
  $res = 1;

  for ($i = 0; $i < $power; $i++) {
    $res *= $n;
  }
  return $res;
}

?>