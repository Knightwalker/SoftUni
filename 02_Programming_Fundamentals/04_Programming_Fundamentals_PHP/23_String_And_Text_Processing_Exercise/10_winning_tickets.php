<?php

$inputArr = array_map("trim", explode(',', readline()));

foreach ($inputArr as $ticket) {
  $specialOne = 0;   // @
  $specialTwo = 0;   // #
  $specialThree = 0; // $
  $specialFour = 0;  // ^

  // Case 1 - Invalid ticket
  if (strlen($ticket) != 20) {
    echo "invalid ticket " . PHP_EOL;
    continue;
  } 

  // Case 2 - Match with length 6 - 9
  $leftHalf = substr($ticket, 0, 10);
  $rightHalf = substr($ticket, 10, 20);
 
  //$lengthLeft = 0;
  //$lengthRight = 0;
  $length = 0;
  $symbol = "";

  for ($i = 6; $i <= 10; $i++) {

    if (count_not_interrupted_subsequence($leftHalf, "@") >= $i && count_not_interrupted_subsequence($rightHalf, "@") >= $i) {
      $length = $i;
      $symbol = "@"; 
    } else if (count_not_interrupted_subsequence($leftHalf, "$") >= $i && count_not_interrupted_subsequence($rightHalf, "$") >= $i) {
      $length = $i;
      $symbol = "$"; 
    } else if (count_not_interrupted_subsequence($leftHalf, "#") >= $i && count_not_interrupted_subsequence($rightHalf, "#") >= $i) {
      $length = $i;
      $symbol = "#"; 
    } else if (count_not_interrupted_subsequence($leftHalf, "^") >= $i && count_not_interrupted_subsequence($rightHalf, "^") >= $i) {
      $length = $i;
      $symbol = "^"; 
    }

  }

  //echo "LEN " . $length . PHP_EOL;

  $ticket = "\"" . $ticket . "\"";

  if ($length >= 6 && $length <= 9) {
    echo "ticket " . $ticket . " - " . $length . "" . $symbol . PHP_EOL;
  } else if ($length == 10) {
    echo "ticket " . $ticket . " - " . $length . "" . $symbol . " Jackpot!" . PHP_EOL;
  } else {
    echo "ticket " . $ticket . " - no match" . PHP_EOL;
  }

  //var_dump($length);
  //var_dump($symbol);

  //var_dump($leftHalf);
  //var_dump($rightHalf);

}

//var_dump($inputArr);

// echo count_not_interrupted_subsequence($input, $symbol);
function count_not_interrupted_subsequence($str, $symbol) {
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

// Input 4 - @@@@@@@123@@@@@@1234, ######4123@@@@@@1234, $$$$$$$$$$##########
// ticket "@@@@@@@123@@@@@@1234" - 6@
// ticket "######4123@@@@@@1234" - no match
// ticket "$$$$$$$$$$##########" - no match

?>