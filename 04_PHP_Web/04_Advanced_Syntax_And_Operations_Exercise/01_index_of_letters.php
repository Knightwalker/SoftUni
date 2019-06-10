<?php

$inputArr = str_split(readline());
$lettersArr = [];
for ($i = 97; $i <= 122; $i++) {
  $lettersArr[] = chr($i);
}

for($i = 0; $i < count($inputArr); $i++) {
  $currentLetter = strtolower($inputArr[$i]);
  for($j = 0; $j < count($lettersArr); $j++) {
    if ($currentLetter == $lettersArr[$j]) {
      echo $currentLetter . " -> " . $j . PHP_EOL;
    } 
  
  }
}

?>