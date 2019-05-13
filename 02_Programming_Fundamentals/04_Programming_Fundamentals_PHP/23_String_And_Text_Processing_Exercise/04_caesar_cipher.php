<?php

$input = readline();
$encrypted = "";

for ($i = 0; $i < strlen($input); $i++) {
  $letter = chr(ord($input[$i]) + 3);
  $encrypted .= $letter;
}

echo $encrypted;

?>