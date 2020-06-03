<?php

$n = intval(readline());
$product = 0;

for ($i = 1; $i <= 10; $i++) {
  $product = $n * $i;
  echo "$n X $i = $product \n";
}

?>