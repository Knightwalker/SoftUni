<?php

$arr = [];
$arr = explode(" ", readline());
$middle = ceil(count($arr) / 2);

$leftTime = 0;
$rightTime = 0;

for ($i = 0; $i < $middle - 1; $i++) {
  if ($arr[$i] != 0) {
    $leftTime += $arr[$i];
  } else {
    $leftTime -= $leftTime * 0.2;
  }
  //echo $arr[$i] . PHP_EOL;
}

for ($i = count($arr) - 1; $i > $middle - 1; $i--) {
  if ($arr[$i] != 0) {
    $rightTime += $arr[$i];
  } else {
    $rightTime -= $rightTime * 0.2;
  }
  //echo $arr[$i] . PHP_EOL;
}

if ($leftTime < $rightTime) {
  echo "The winner is left with total time: $leftTime";
} else {
  echo "The winner is right with total time: $rightTime";
}

?>