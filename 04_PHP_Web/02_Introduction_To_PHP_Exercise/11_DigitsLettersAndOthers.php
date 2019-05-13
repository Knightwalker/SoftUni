<?php

$input = readline();
$digits = "";
$letters = "";
$characters = "";

for ($i = 0; $i < strlen($input); $i++) {

  if (is_numeric($input[$i])) {
    $digits .= $input[$i];
  } else if (ctype_alpha($input[$i])) {
    $letters .= $input[$i];
  } else {
    $characters .= $input[$i];
  }

}

echo $digits . "\n";
echo $letters . "\n";
echo $characters . "\n";

?>