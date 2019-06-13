<?php 

$n = readline();
$arr = [];
$arrReversed = [];

for ($i = 0; $i < $n; $i++) {
  $arr[] = intval(readline());
}

for ($i = count($arr) - 1; $i >= 0; $i--) {
  $arrReversed[] = $arr[$i];
}

for ($i = 0; $i <= count($arrReversed) - 1; $i++) {
  echo $arrReversed[$i] . " ";
}

?>