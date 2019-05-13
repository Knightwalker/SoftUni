<?php

$validate_odd = true;
while ($validate_odd)
{
    $n = intval(readline());
    $n = abs($n);

    if ($n % 2 != 0) {
      echo "Please write an even number." . PHP_EOL;
    } else {
      $validate_odd = false;
      echo "The number is: $n" . PHP_EOL;
    }
}

?>