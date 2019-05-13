<?php

$input = readline();
$inputTwo = explode(" ", readline());
$needle = $inputTwo[0];
$replace = $inputTwo[1];
$decryptedInput = "";

$validateEncryption = false;

// Checking for lowercase letters
for($i = 0; $i < strlen($input); $i++) {
  $currentWord = ord($input[$i]);
  if ($currentWord >= 97 && $currentWord <= 122) {
    $validateEncryption = true;

  // Checking special symbols
  } else { 
    if ($input[$i] == "{" || $input[$i] == "}" || $input[$i] == "|" || $input[$i] == "#") {
      $validateEncryption = true;
    } else {
      $validateEncryption = false;
    }
  }
  
}

// Checking if the input contains letters from "d" onwards.
for ($i = 0; $i < strlen($input); $i++) {
  $currentDigit = $input[$i];

  if ($currentDigit == "a" || $currentDigit == "b" || $currentDigit == "c") {
    $validateEncryption = false;
  }
}

if ($validateEncryption == true) {
  for($i = 0; $i < strlen($input); $i++) {
    $currentWord = ord($input[$i]) - 3;
    $currentDeWord = chr($currentWord);
    $decryptedInput .= "" . $currentDeWord;
  }

  $decryptedInput = str_replace($needle, $replace, $decryptedInput);
  echo $decryptedInput;

} else {
  echo "This is not the book you are looking for.";
}

?>