<?php

$input = readline();
$searchArr = [
  ".",
  ",",
  "?",
  "!"
];
$input = str_replace($searchArr, " ", $input);
$input = preg_split('/ +/', $input);

$palindromesList = [];

foreach ($input as $word) {
  if ($word == strrev($word) && $word != "") {
    $palindromesList[] = $word;
  }
}

natcasesort($palindromesList);
$palindromesList = array_unique($palindromesList);
echo implode(", ", $palindromesList);

//var_dump($palindromesList);

?>