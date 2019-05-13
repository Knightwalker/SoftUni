<?php

$input = "";
$ordersList = [];

while(true) {
  $input = readline();
  if ($input == "buy") { break; }
  $inputArr = explode(" ", $input);

  $name = $inputArr[0];
  $price = $inputArr[1];
  $quantity = $inputArr[2];

  if (!key_exists($name, $ordersList)) {
    $ordersList[$name] = [];
    $ordersList[$name]["price"] = "";
    $ordersList[$name]["quantity"] = 0;
  }
  $ordersList[$name]["price"] = $price;
  $ordersList[$name]["quantity"] += $quantity;
  $ordersList[$name]["multiply"] = $ordersList[$name]["price"] * $ordersList[$name]["quantity"];

}

foreach ($ordersList as $orders => $valuesArr) {
  echo $orders . " -> ";

  foreach ($valuesArr as $key => $value) {
    if ($key == "multiply") {
      echo number_format($value, 2, ".", "");
    }

  }
  echo PHP_EOL;

}

//var_dump($ordersList);

?>