<?php

$input = readline();
$arr = explode(" ", $input);
$arrReversed = [];

for ($i = count($arr) - 1; $i >= 0; $i--) {
  $arrReversed[] = $arr[$i];
}

for ($i = 0; $i < count($arrReversed); $i++) {
  echo $arrReversed[$i] . " ";
}

?>