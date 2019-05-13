<?php

$arr1 = explode(" ", readline());
$arr2 = explode(" ", readline());
$resArr = [];

$arr1_is_bigger = false;
$arr2_is_bigger = false;

$minIndex = 0;
$maxIndex = 0;

if (count($arr1) > count($arr2)) {
  $arr1_is_bigger = true;
  $maxIndex = count($arr1);
  $minIndex = count($arr2);
} else {
  $arr2_is_bigger = true;
  $maxIndex = count($arr2);
  $minIndex = count($arr1);
}

for ($i = 0; $i < $maxIndex; $i++) {

  if ($i < $minIndex) {
    for ($i2 = 0; $i2 < 2; $i2 ++) {

      if ($i2 == 0) {
        $resArr[] = $arr1[$i];
        $readArr1 = true;
      } else {
        $resArr[] = $arr2[$i];
        $readArr1 = true;
      }

    }
  } else {

    if ($arr1_is_bigger == true) {
      $resArr[] = $arr1[$i];
    } else {
      $resArr[] = $arr2[$i];   
    }

  }

}

for ($i = 0; $i < count($resArr); $i++) {
  echo $resArr[$i] . " ";
}

?>