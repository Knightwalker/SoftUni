<?php

$arr = explode(" ", readline());
$sumTotal = 0;

for ($i = 0; $i < count($arr); $i++) {
  $numberSTR = $arr[$i];  
  $sumDigitsSTR = "";

  for ($i2 = strlen($numberSTR) - 1; $i2 >= 0; $i2--) {
    $sumDigitsSTR .= $numberSTR[$i2];
  }
  $sumTotal += intval($sumDigitsSTR);
}

echo $sumTotal;

?>