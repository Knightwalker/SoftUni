<?php

$a = readline();
$b = readline();
$res = rectangle_area($a, $b);
echo $res;

function rectangle_area($a, $b) {
  $res = $a * $b;
  return $res;
}

?>