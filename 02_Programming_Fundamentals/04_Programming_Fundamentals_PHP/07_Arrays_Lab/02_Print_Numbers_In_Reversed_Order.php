<?php

$n = intval(readline());
$arr = [];
$arrReversed = [];

for ($i = 0; $i < $n; $i++) {
  $arr[$i] = intval(readline()); 
}

for ($i = $n; $i > 0; $i--) {
  $arrReversed[] = $arr[$i - 1]; 
}

for ($i = 0; $i < $n; $i++) {
  echo $arrReversed[$i] . " "; 
}

?>