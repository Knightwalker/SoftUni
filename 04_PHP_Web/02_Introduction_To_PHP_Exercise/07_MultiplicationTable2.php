<?php

$integer = intval(readline());
$multiplier = intval(readline());
$product = 0;

if ($multiplier > 10) {
  $product = $integer * $multiplier;
  echo "$integer X $multiplier = $product \n";
} else {
  for ($i = $multiplier; $i <= 10; $i++) {
    $product = $integer * $i;
    echo "$integer X $i = $product \n";
  }
}

?>