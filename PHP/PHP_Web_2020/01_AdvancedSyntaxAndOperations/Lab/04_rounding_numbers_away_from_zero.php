<?php

$numbersArr = explode(" ", readline());

for ($i = 0; $i < count($numbersArr); $i++) {
  $val = floatval($numbersArr[$i]);
  print("{$numbersArr[$i]} => " . round($val, 0, PHP_ROUND_HALF_UP) . PHP_EOL);
}