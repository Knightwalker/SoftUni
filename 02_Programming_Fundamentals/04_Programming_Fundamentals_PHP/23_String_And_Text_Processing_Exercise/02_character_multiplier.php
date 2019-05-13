<?php

$input = explode(" ", readline());
$wordOneLen = strlen($input[0]);
$wordTwoLen = strlen($input[1]);
$firstWord = "";
$secondWord = "";
$sum = 0;

if ($wordOneLen >= $wordTwoLen) {
  $firstWord = $input[0];
  $secondWord = $input[1];
} else {
  $firstWord = $input[1];
  $secondWord = $input[0];
}

for ($i = 0; $i < strlen($secondWord); $i++) {
  $sum += ord($firstWord[$i]) * ord($secondWord[$i]); 
}

for ($i = strlen($secondWord); $i < strlen($firstWord); $i++) {
  $sum += ord($firstWord[$i]); 
}

echo $sum;

?>