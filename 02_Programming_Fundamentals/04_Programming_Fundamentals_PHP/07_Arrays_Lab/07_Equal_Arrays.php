<?php

$arrFirst = explode(" ", readline());
$arrSecond = explode(" ", readline());
$sum = 0;
$equalArr = true;

for ($i = 0; $i < count($arrFirst); $i++) {
 
 if ($arrFirst[$i] == $arrSecond[$i]) {
   $sum += $arrFirst[$i]; 
 } else {
   echo "Arrays are not identical. Found difference at $i index";
   $equalArr = false;
   break;
 }

}

if ($equalArr == true) {
  echo "Arrays are identical. Sum: $sum";
}

?>