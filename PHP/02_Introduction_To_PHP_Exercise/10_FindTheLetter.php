<?php

$input = readline();
$searchParam = readline();
$searchParamFound = 0;
$msg = "";
$found = false;

for ($i = 0; $i < strlen($input); $i++) {

  if ($input[$i] == $searchParam[0]) {
    $searchParamFound++;

    if ($searchParamFound == $searchParam[2]) {
      $msg = $i;
      $found = true;
    } 

  } 
}

if ($found == true) {
  echo $msg;
} else {
  echo "Find the letter yourself!";
}

?>