<?php

$n = readline(); 
$sum = 0;
$arr = [];

for ($i = 0; $i < $n; $i++) {
  $arr[] = intval(readline());
}

for ($i = 0; $i < count($arr); $i++) {
  $sum += $arr[$i];
}

for ($i = 0; $i < count($arr); $i++) {
  echo $arr[$i] . " "; 
}

echo PHP_EOL;
echo $sum;

?>