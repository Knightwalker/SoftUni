<?php

$input = readline();
$n = readline();

echo repeatStrings($input, $n);

function repeatStrings($input, $n) {
  $msg = "";

  for($i = 0; $i < $n; $i++) {
    $msg .= $input;
  }

  return $msg;

}

?>