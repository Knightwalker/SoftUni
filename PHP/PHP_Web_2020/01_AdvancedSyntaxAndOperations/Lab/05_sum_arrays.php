<?php

$arr1 = array_map("intval", explode(" ", readline()));
$arr2 = array_map("intval", explode(" ", readline()));
$len1 = count($arr1);
$len2 = count($arr2);
$len3 = max($len1, $len2);

for ($i = 0; $i < $len3; $i++) {
  print($arr1[$i % $len1] + $arr2[$i % $len2] . " ");
}