<?php

$pattern = '/.*%(?<name>[A-Z][a-z]+)%.*<(?<prod>\w+)>.*\|(?<count>[0-9]+)\|.*?(?<price>[0-9]+\.?[0-9]+)\$$/';
$totalIncome = 0;

while (true) {
  $input = readline();
  if ($input == "end of shift") { break; }

  preg_match($pattern, $input, $matches);
  if (preg_match($pattern, $input, $matches)) {
    $totalPrice = $matches["count"] * $matches["price"];
    $totalIncome += $totalPrice;
    $totalPrice = number_format($totalPrice, 2, ".", "");

    echo $matches["name"] . ": " . $matches["prod"] . " - " . "$totalPrice" . PHP_EOL; 
  }

}

echo "Total income: " . number_format($totalIncome, 2, ".", "");

?>