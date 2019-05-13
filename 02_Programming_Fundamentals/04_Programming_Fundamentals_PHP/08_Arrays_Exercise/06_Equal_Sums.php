<?php

$arr = explode(" ", readline());
$sumLeft = 0;
$sumRight = 0;
$equalSums = -1;

for ($a = 0; $a < count($arr); $a++) {
 
  if ($a > 0) {
    for($b = 0; $b < $a; $b++) {
    $sumLeft += $arr[$b];
    }
  }

  for($c = $a + 1; $c < count($arr); $c++) {
    $sumRight += $arr[$c];
  }

  if ($sumLeft == $sumRight) {
    $equalSums = $a;
    break;
  } else {
    $equalSums = -1;
  }

  $sumLeft = 0;
  $sumRight = 0;

}

if ($equalSums >= 0) {
  echo $equalSums;
} else {
  echo "no";
}

?>