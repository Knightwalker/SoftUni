<?php

$input = "";
$palindrome = true;

while(true) {
  $input = readline();
  if ($input == "END") { break; }

  if (strlen($input) % 2 == 0) {

    $startIndex = 0;
    $endIndex = strlen($input) - 1;
 
    for($i = 0; $i < strlen($input) / 2; $i++) {
      if (!($input[$startIndex + $i] == $input[$endIndex - $i])) {
        $palindrome = false;
        break;
      }
    }

    if ($palindrome == false) {
      echo "false" . PHP_EOL;
    } else {
      echo "true" . PHP_EOL;
    }

    $palindrome = "true";

  } else {

    $startIndex = 0;
    $endIndex = strlen($input) - 1;

    for($i = 0; $i < (strlen($input) - 1) / 2; $i++) {
      if (!($input[$startIndex + $i] == $input[$endIndex - $i])) {
        $palindrome = false;
        break;
      }
    }

    if ($palindrome == false) {
      echo "false" . PHP_EOL;
    } else {
      echo "true" . PHP_EOL;
    }
    
    $palindrome = "true";

  }

}

?>