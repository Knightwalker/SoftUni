<?php

$arr = [];
$size = readline();

for ($i = 0; $i < $size; $i++) {
  array_push($arr, intval(readline()));
}

$arr = array_reverse($arr);

for ($i = 0; $i < $size; $i++) {
  print("{$arr[$i]} ");
}