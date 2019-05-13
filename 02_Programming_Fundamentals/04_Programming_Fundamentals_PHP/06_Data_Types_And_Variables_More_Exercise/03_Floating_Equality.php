<?php

$a = floatval(readline());
$b = floatval(readline());
$eps = 0.000001;

$maxNum = 0;
$minNum = 0;

if ($a > $b) {
  $maxNum = $a;
  $minNum = $b;
} else {
  $maxNum = $b;
  $minNum = $a;
}

if (($maxNum - $minNum) < $eps) {
  echo "True";
} else {
  echo "False";
}

?>