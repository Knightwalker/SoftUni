<?php

$n = readline();

for ($i = 0; $i < $n; $i++) {
  if (top_number($i) == true) {
    echo $i . PHP_EOL;
  }
}

function top_number($input) {
  $input = strval($input);
  $divisableBy8 = false;
  $validateOddDigit = false;
  $sumDigits = 0;

  for ($i = 0; $i < strlen($input); $i++) {
    $sumDigits += $input[$i]; 

    if (!($input[$i] % 2 == 0)) {
      $validateOddDigit = true;
    }
  }
  if ($sumDigits % 8 == 0) {
    $divisableBy8 = true;
  }

  if ($divisableBy8 == true && $validateOddDigit == true) {
    return true;
  } else {
    return false;
  }

}

?>