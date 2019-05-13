<?php

$input = array_map("floatval", explode(" ", readline()));
$arr = [];

$firstIndex = 0;
$lastIndex = count($input) - 1;

if (count($input) % 2 == 0) {
  for ($i = 0; $i < count($input) / 2; $i++) {
  
    $arr[] = $input[$firstIndex] + $input[$lastIndex];
    $firstIndex++;
    $lastIndex--;
  }
} else {
  for ($i = 0; $i < (count($input) - 1) / 2; $i++) {
    
    $arr[] = $input[$firstIndex] + $input[$lastIndex];
    $firstIndex++;
    $lastIndex--;

  }

  $arr[] = $input[$firstIndex];
}

echo implode($arr, " ");

?>