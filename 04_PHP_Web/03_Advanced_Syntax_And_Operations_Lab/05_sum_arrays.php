<?php 

$firstInput = readline();
$secondInput = readline();
$firstArr =  explode(" ", $firstInput);
$secondArr =  explode(" ", $secondInput);
$summedArr = [];
$counter = -1;

$indexFirst = min(count($firstArr), count($secondArr));
$indexSecond = max(count($firstArr), count($secondArr));

for ($i = 0; $i < $indexFirst; $i++) {
  $firstNum = floatval($firstArr[$i]);
  $secondNum = floatval($secondArr[$i]);
  $summedArr[] = $firstNum + $secondNum;

}

for ($i = $indexFirst; $i < $indexSecond; $i++) {
  $counter++;

  if ($counter == $indexFirst) { $counter = 0; }

  if (count($firstArr) > count($secondArr)) {
    $summedArr[] = floatval($firstArr[$i]) + floatval($secondArr[$counter]);
  } else {
    $summedArr[] = floatval($secondArr[$i]) + floatval($firstArr[$counter]);
  }

}

for ($i = 0; $i < $indexSecond; $i++) {
  echo $summedArr[$i] . " ";
}

?>