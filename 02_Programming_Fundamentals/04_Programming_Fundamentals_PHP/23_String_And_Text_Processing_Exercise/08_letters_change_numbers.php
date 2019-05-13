<?php

$re = '/([ ]+)/m';
$input = preg_split($re, readline());
$sum = 0;

foreach ($input as $word) {
  $sum += lettersChangeNumbers($word);
}

echo number_format($sum, 2, ".", "");

function lettersChangeNumbers($input) {
  $re = '/([0-9]+)/m';
  $inputArr = preg_split($re, $input);
  preg_match_all($re, $input, $matches, PREG_SET_ORDER, 0);

  $word = $matches[0][0];
  $beforeWord = $inputArr[0];
  $afterWord = $inputArr[1];
  $alphabet = range('a', 'z');

  // beforeWord
  for ($i = 0; $i < strlen($beforeWord); $i++) {
    $currentLetter = $beforeWord[0];
    $currentPosInAlphabet = 1 + array_search(strtolower($beforeWord[0]), $alphabet); 

    if (ctype_upper($currentLetter) == true) {
      $word /= $currentPosInAlphabet;
    } else {
      $word *= $currentPosInAlphabet;
    }

  }

  // afterWord
  for ($i = 0; $i < strlen($afterWord); $i++) {
    $currentLetter = $afterWord[0];
    $currentPosInAlphabet = 1 + array_search(strtolower($afterWord[0]), $alphabet); 

    if (ctype_upper($currentLetter) == true) {
      $word -= $currentPosInAlphabet;
    } else {
      $word += $currentPosInAlphabet;
    }

  }

  return $word;

}

?>