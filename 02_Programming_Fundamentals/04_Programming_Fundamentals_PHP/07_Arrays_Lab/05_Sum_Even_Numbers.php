<?php

$input = readline();
$arr = explode(" ", $input);
$sum = 0;

for ($i = 0; $i < count($arr); $i++) {
  $number = $arr[$i];

  if ($number % 2 == 0) {
    $sum += $number;
  }

}

echo $sum;

?>