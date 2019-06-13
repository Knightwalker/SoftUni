<?php

$n = intval(readline());
$sum = 0;

for ($i = 1; $i <= $n * 2; $i += 2) {
  $sum += $i;
  echo "$i \n";
}

echo "Sum: $sum";

?>