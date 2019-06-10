<?php 

$str = readline();
$arr =  explode(" ", $str);
$arrFilled = false;

for ($a = 0; $a < count($arr); $a++) {
  for ($b = 0; $b < count($arr); $b++) {
    for ($c = 0; $c < count($arr); $c++) {
      
      if ($arr[$a] + $arr[$b] == $arr[$c]) {
        
        if ($a < $b) {
          echo "$arr[$a] + $arr[$b] == $arr[$c]" . PHP_EOL;
          $arrFilled = true;
        }

      }

    }
  }
}

if ($arrFilled == false) { echo "No"; }

?>