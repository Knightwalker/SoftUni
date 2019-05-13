<?php

$n = readline();
$sortArr = [];
$sum = 0;

for($a = 0; $a <$n; $a++) {
  $arr = readline(); 

  for($i = 0; $i < strlen($arr); $i++) {
    
    if($arr[$i] == 'a' || $arr[$i] == 'e' || $arr[$i] == 'i' || $arr[$i] == 'o' || $arr[$i] == 'u') {
      $number = ord($arr[$i]);
      $number = $number * strlen($arr);
      //echo $number . PHP_EOL;
      $sum += $number;

    } else {
      $number = ord($arr[$i]);
      $number = floor($number / strlen($arr));
      //echo $number . PHP_EOL;
      $sum += $number;
    }

  }

  //echo $sum . PHP_EOL;
  $sortArr[] = $sum;
  $sum = 0; 

}

sort($sortArr);

for($i = 0; $i < $n; $i++) {
  echo $sortArr[$i] . PHP_EOL;
}

?>