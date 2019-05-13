<?php

$input = readline();
$symbol = readline();

echo substr_count_v2($input, $symbol) . PHP_EOL;
//echo substr_count($input, $symbol) . PHP_EOL;

// Returns the max sequence of matched elements with no interruption.
// Test Use - echo substr_count_v2($input, $symbol) . PHP_EOL; // This is the modified custom function
// Compare  - echo substr_count($input, $symbol) . PHP_EOL; // This is the official PHP function.
// Input 1  - @@@@@@@123@@@@@@1234
// Input 2  - @
// Output 1 - 7 
function substr_count_v2($str, $symbol) {
  $len = 0;
  $maxLen = 0;

  for($i = 0; $i < strlen($str) - 1; $i++) {
  
    if ($str[$i] == $str[$i + 1] && $str[$i] == $symbol) {
      if ($len == 0) { $len++; }
      $len++;

      if ($len >= $maxLen) {
        $maxLen = $len;
      }
    } else {
      $len = 0;
    }
    
  }

  return $maxLen;
}

?>