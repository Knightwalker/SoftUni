<?php

$input = readline();
$arr = explode(" ", $input);
$sumEven = 0;
$sumOdd = 0;
$diff = 0;

for ($i = 0; $i < count($arr); $i++) {
  $number = $arr[$i];

  if ($number % 2 == 0) {
    $sumEven += $number;
  } else {
    $sumOdd += $number;
  }

}

$diff = $sumEven - $sumOdd;
echo $diff;

?>