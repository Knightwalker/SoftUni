<?php

$inputOne = ord(readline());
$inputTwo = ord(readline());
$text = readline();

$start = min($inputOne, $inputTwo);
$end = max($inputOne, $inputTwo);

$sum = 0;
for ($i = 0; $i < strlen($text); $i++) {
  $letterINT = ord($text[$i]);

  if ($letterINT > $start && $letterINT < $end) {
    $sum += $letterINT;
  }
}

echo $sum;

?>