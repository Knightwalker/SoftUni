<?php

$input = readline();

$letters = [];

for ($i = 0; $i < strlen($input); $i++) {
  $char = $input[$i];

  if (!array_key_exists($char, $letters)) {
    $letters[$char] = 1;
  } else {
    $letters[$char]++;
  }

}

foreach ($letters as $key => $value) {
  echo $key . " -> " . $value . PHP_EOL;
}

?>