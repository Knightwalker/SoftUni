<?php

$inputArr =  explode(" ", readline());
$outputArr = [];

// gen combs
$n = count($inputArr);
for ($i = 0; $i < $n; $i++) {
  for ($i2 = $i + 1; $i2 < $n; $i2++) {
    for ($i3 = 0; $i3 < $n; $i3++) {
      $a = $inputArr[$i];
      $b = $inputArr[$i2];
      $c = $inputArr[$i3];
    
      if (($a + $b) == $c) {
        array_push($outputArr, "{$a} + {$b} == {$c}");
      }
  
    }

  }
} 

if (count($outputArr) > 0) {
  for ($i = 0; $i < count($outputArr); $i++) {
    print($outputArr[$i] . PHP_EOL);
  }
} else {
  print("No");
}