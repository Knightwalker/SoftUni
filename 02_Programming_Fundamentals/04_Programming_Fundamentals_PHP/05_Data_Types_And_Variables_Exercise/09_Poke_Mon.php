<?php

$N = intval(readline());
$M = intval(readline());
$Y = intval(readline());
$counter = 0; 
$halvedN = $N / 2.0;

while (true) {
  if ($N < $M) { break; }

  if ($N == $halvedN) {
    if ($Y != 0) {
    $N = $N / $Y;
    }
    if ($N >= $M) {
      $N = $N - $M;
      $counter++;
    }
  } else {
    $N = $N - $M;
    $counter++;
  }

}

echo (int)$N . PHP_EOL;
echo $counter;

?>