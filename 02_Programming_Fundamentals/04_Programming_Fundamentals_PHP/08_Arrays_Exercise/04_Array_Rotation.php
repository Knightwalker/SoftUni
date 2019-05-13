<?php

$arr = explode(" ", readline());
$n = intval(readline());
//var_dump($arr);

$arrShift = [];
$tempArr = [];
$element = "";

// Filling arrays initially
for ($i = 0; $i < count($arr); $i++) { $arrShift[] = $arr[$i]; }
for ($i = 0; $i < count($arr); $i++) { $tempArr[] = $arr[$i]; }

for ($a = 0; $a < $n; $a++) {

  $element = $arrShift[0];

  for ($b = 0; $b < count($arr) - 1; $b++) { 
    $tempArr[$b] = $arrShift[$b + 1]; 
  }

  $tempArr[count($arr) - 1] = $element;

  for ($c = 0; $c < count($arrShift); $c++) {
    $arrShift[$c] = $tempArr[$c]; 
  }  

}

for ($i = 0; $i < count($arrShift); $i++ ) {
  echo $arrShift[$i] . " ";
}

//var_dump($arrShift);
//var_dump($tempArr);

?>