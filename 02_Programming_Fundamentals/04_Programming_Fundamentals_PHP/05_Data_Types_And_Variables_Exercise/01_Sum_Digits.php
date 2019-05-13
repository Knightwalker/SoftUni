<?php 

$stringNumber = readline();
$getDigit = 0;
$sumDigits = 0;

for ($i = 0; $i < strlen($stringNumber); $i++) {
  $getDigit = $stringNumber[$i];
  $sumDigits += $getDigit;
}

echo $sumDigits;

?>