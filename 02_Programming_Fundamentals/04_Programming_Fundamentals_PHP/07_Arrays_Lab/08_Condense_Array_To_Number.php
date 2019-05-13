<?php

$arr = explode(" ", readline());
$counter = count($arr);

while ($counter > 1) {
  for ($i = 0; $i < count($arr) - 1; $i++) {
    $arr[$i] = $arr[$i] + $arr[$i + 1];
  }
  $counter--;
}

echo $arr[0];

?>