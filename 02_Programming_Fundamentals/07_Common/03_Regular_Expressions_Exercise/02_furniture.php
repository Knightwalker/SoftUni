<?php

$re = '/^>+(?<name>[A-Z{0,}a-z]+)+<<(?<value>\d+\.?\d+)+!(?<count>[\d+]+)\b/m';
$sum = 0.0;
$furnituresList = [];

while (true) {
  $input = readline();
  if ($input == "Purchase") { break; }

  preg_match_all($re, $input, $matches, PREG_SET_ORDER, 0);

  foreach($matches as $match) {
    $furnituresList[] = $match["name"];
    $sum += floatval($match["value"]) * floatval($match["count"]);
  }

}

echo "Bought furniture:" . PHP_EOL;

foreach ($furnituresList as $furniture) {
  echo $furniture . PHP_EOL;
}

echo "Total money spend: " . number_format($sum, 2, ".", "");

?>