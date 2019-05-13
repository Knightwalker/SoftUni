<?php

$input = readline();
$listWords = [];
$listNumbers = [];
$index = 0;
$indexC = 0;
$res = "";

for ($i = 0; $i < strlen($input); $i++) {
  $currentWord = $input[$i]; 

  $validateNumber = false;
  for ($i2 = 0; $i2 <= 9; $i2++) {
    if ($currentWord == strval($i2)) {
      $validateNumber = true;
      break;
    }
  }

  if ($validateNumber == false) {
    $indexC = 0;
  }
  if ($validateNumber == true && $indexC > 0) {
    $index--;
    $indexC--;
  }

  if ($validateNumber == false) {
    if (!key_exists($index, $listWords)) {
      $listWords[$index] = "";
    }
    $listWords[$index] .= strtoupper($currentWord);
  } else {
    if (!key_exists($index, $listNumbers)) {
      $listNumbers[$index] = "";
    }
    $listNumbers[$index] .= $currentWord;
    $index++;
    $indexC = 1;
  }

}

$indexRes = 0;
foreach ($listWords as $words) {
  $res .= str_repeat($words, $listNumbers[$indexRes]);
  $indexRes++;
}

// Unique symbols logic
$uniqueSymbols = str_split($res);
$uniqueSymbols = array_unique($uniqueSymbols);
$uniqueSymbols = array_values($uniqueSymbols);
//var_dump($uniqueSymbols);

$uniqueCount = count($uniqueSymbols);

echo "Unique symbols used: " . $uniqueCount . PHP_EOL;
echo $res;

// var_dump($uniqueSymbols);
//var_dump($listWords);
//var_dump($listNumbers);

?>