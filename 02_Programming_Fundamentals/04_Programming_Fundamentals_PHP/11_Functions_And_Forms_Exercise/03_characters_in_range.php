<?php

$char1 = ord(readline());
$char2 = ord(readline());
$res = [];

$indexStart = $char1;
$indexEnd = $char2;

if ($indexEnd < $indexStart) {
  $indexStart = $char2;
  $indexEnd = $char1;
}

$res = characters_in_range($indexStart, $indexEnd);

for($i = 0; $i < count($res); $i++) {
  echo $res[$i] . " ";
}

function characters_in_range($indexStart, $indexEnd) {
  $arr = [];

  for($i = $indexStart + 1; $i < $indexEnd; $i++) {
    $arr[] = chr($i);
  }
  
  return $arr;
}

?>