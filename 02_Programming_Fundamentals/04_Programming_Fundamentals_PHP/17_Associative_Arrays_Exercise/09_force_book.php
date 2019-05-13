<?php

$input = "";
$forceBook = [];

while (true) {
  $input = readline();
  if ($input == "Lumpawaroo") { break; }
  $inputArr = explode(" ", $input);

  $separator = $inputArr[1];
  if ($separator == "|") {
    $forceSide = $inputArr[0];
    $forceUser = $inputArr[2];

    if (!key_exists($forceSide, $forceBook)) {
      $forceBook[$forceSide] = [];
      $forceBook[$forceSide][] = $forceUser; 
    }

    foreach ($forceBook as $side => $sidePair) {

      foreach ($sidePair as $key => $value) {

        if ($forceUser != $value) {
          $forceBook[$forceSide][] = $forceUser;
        } else {
          
        }
        echo $key . "  " . $value;
      }
     

    }



  } else if ($separator == "|") {
    $forceUser = $inputArr[0];
    $forceSide = $inputArr[2];

    if (!key_exists($forceSide, $forceBook)) {
      $forceBook[$forceSide] = [];
      $forceBook[$forceSide][$forceSide] = "";
    }

    
  }


}

var_dump($forceBook);

?>