<?php

$input = readline();
$items = explode(" ", $input);
$arr = [];
for ($i = 0; $i < count($items); $i++) {
  $arr[$i] = floatval($items[$i]);
}

for ($i = 0; $i < count($arr); $i++) {
  echo number_format($arr[$i], 2, '.', '') . " => " . (int)round($arr[$i],0,PHP_ROUND_HALF_UP) . PHP_EOL;
}

?>