<?php

$n = readline();

$arrOne = [];
$arrTwo = [];
$indexOne = 0;
$indexTwo = 1;

for ($i = 0; $i < $n; $i++) {
  $inputArr = explode(" ", readline());
  
  $arrOne[] += $inputArr[$indexOne];
  $arrTwo[] += $inputArr[$indexTwo];

  if ($indexOne == 0) { 
    $indexOne = 1;
  } else {
    $indexOne = 0;
  }

  if ($indexTwo == 0) {
    $indexTwo = 1;
  } else {
    $indexTwo = 0;
  }

}

for ($i = 0; $i < count($arrOne); $i++) {
  echo $arrOne[$i] . " ";
}
echo PHP_EOL;
for ($i = 0; $i < count($arrTwo); $i++) {
  echo $arrTwo[$i] . " ";
}
echo PHP_EOL;

?>