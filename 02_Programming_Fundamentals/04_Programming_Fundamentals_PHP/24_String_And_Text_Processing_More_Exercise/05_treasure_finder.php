<?php

$keysArr = explode(" ", readline());

while (true) {
  $input = readline();
  if ($input == "find") { break; }
  $message = "";
  $kindex = 0;

  for ($i = 0; $i < strlen($input); $i++) {
    $currentLetter = $input[$i];
    //echo $kindex . PHP_EOL;
 
    if ($kindex >= count($keysArr)) {
      $kindex = 0;
    }

    $newLetter = chr(ord($currentLetter) - $keysArr[$kindex]);  
    $message .= $newLetter;
    $kindex++;
  }

  //var_dump($message);
  $startAttribute = strpos($message, "&");
  $endAttribute = strripos($message, "&");
  $startCoordinates = strpos($message, "<");
  $endCoordinates = strpos($message, ">");
  $attribute = "";
  $coordinates = "";

  for ($i = $startAttribute + 1; $i <= $endAttribute - 1; $i++) {
    $currentLetter = $message[$i];
    $attribute .= $currentLetter;
  }

  for ($i = $startCoordinates + 1; $i <= $endCoordinates - 1; $i++) {
    $currentLetter = $message[$i];
    $coordinates .= $currentLetter;
  }

  echo "Found $attribute at $coordinates" . PHP_EOL;

}

?>