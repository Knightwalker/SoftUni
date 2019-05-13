<?php

$input = readline();
$input = strtolower($input);
$res = 0;

$res = vowels_count($input);
echo $res;

function vowels_count($input) {
  $counter = 0;

  for($i = 0; $i < strlen($input); $i++) {
    if ($input[$i] == 'a' || $input[$i] == 'e' || $input[$i] == 'o' || $input[$i] == 'u' || $input[$i] == 'i') {
      $counter++;
    }
  }

  return $counter;
}

?>