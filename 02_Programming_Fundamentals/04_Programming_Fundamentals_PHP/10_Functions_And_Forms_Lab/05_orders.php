<?php

$product = strtolower(readline());
$quantity = readline();
$res = orders($product, $quantity);

echo number_format($res, 2, '.', '');

function orders($product, $quantity) {
  $res = "";
  $price = 0.0;

  if ($product == "coffee") {
    $price = 1.5;
  } else if ($product == "coke") {
    $price = 1.4;
  } else if ($product == "water") {
    $price = 1.0;
  } else if ($product == "snacks") {
    $price = 2.0;
  }

  $res = $price * $quantity;
  return $res;
}

?>